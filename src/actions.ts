/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import {batch, debounce, debounceImmediate, hashCode, normalizeSearch} from './util';
import {cookieMonster} from './session';
import {defaultActionURL, domainName, DomainStatus, googleAnalyticsLabel, name, status} from './domain';
import {dispatch, store} from './store';
import {Page} from './routes';
import {ResultType, SocialService} from './actionTypes';
import {search} from './search';
import * as analytics from './analytics';
import * as async from './async';
import * as favorites from './favorites';
import * as log from './log';
import * as selectors from './selectors';
import * as streamingAsync from './streamingAsync';
import * as url from './url';
import * as util from './util';
import config from './config';

const BULK_HASH_SEED = 27; // should match app/instant-check/src/check/check.go
const NOMINL_HASH_SEED = 42; // should match server/search.js
const SCOOTER_HASH_SEED = 27; // should match server/go/src/common/Protocol.go

const MAIN_SEARCH_RESULTS_DEBOUNCE = 50;
const EXTENED_SEARCH_RESULTS_DEBOUNCE = 250;
const STREAMING_RESULTS_DEBOUNCE = 250;
const STREAMING_RESULTS_DEBOUNCE_MOBILE = 500;

const browserResized = () => {
  const isMobile = window.innerWidth <= 832; /* matches styles.ts */
  const isTouch = window.ontouchstart !== void 0;

  if (selectors.isMobile(store.getState()) !== isMobile || selectors.isTouch(store.getState()) !== isTouch) {
    dispatch({type: 'BROWSER_RESIZED', isMobile, isTouch});
  }
};

type DoubleCheckResponse = {
  results: Array<{name: string; availability: 'registered' | 'available' | 'reserved' | 'unknown'}>;
};
type RankedExtensionsResult = {
  item: string;
  search: string;
  similarity: number;
};

/* Double-check availability of main search results */
export const doubleCheck = () => {
  clearTimeout(doubleCheckTimeout);

  const domainsToCheck = doubleCheckQueue.filter(domain => !selectors.domainCheckLoaded(store.getState(), domain));
  doubleCheckQueue = [];
  if (domainsToCheck.length < 1) {
    return;
  }

  const search = selectors.searchPhrase(store.getState());
  if (search.length < 1) {
    return;
  }

  async.request<DoubleCheckResponse>({
    url: config.bulkURL,
    requestType: 'form',
    body: {
      search: search,
      hash: `${hashCode(search, BULK_HASH_SEED)}`,
      names: domainsToCheck.map(domain => (domain.tld === 'com' ? name(domain) : domainName(domain))).join(','),
      tlds: 'com',
    },
    success: ({results}: DoubleCheckResponse) => {
      const availability: {[domainName: string]: boolean} = {};
      for (const {name, availability: a} of results) {
        availability[name.toLowerCase()] = a === 'available' || a === 'unknown';
      }
      dispatch({type: 'DOMAINS_RESOLVED', availability});
    },
  });

  // TODO: split this out
  let similarities: RankedExtensionsResult[] = [];

  const flushBatch = debounce(() => {
    dispatch({type: 'RECEIVE_EXTENSION_SIMILARITIES', similarities});
    similarities = [];
  });

  const params: {[key: string]: string | number} = {
    hash: util.hashCode(search, NOMINL_HASH_SEED).toString(),
  };

  streamingAsync.request<RankedExtensionsResult>(
    `${config.rankedExtensionsURL}${search}`,
    params,
    results => {
      for (const result of results) {
        similarities.push(result);
      }
      flushBatch();
    },
    () => {}, // onError
    () => {}, // onDone
  );
};

export const loadVanity = () => {
  const mainDomain = selectors.mainDomain(store.getState());

  // TODO: localStorage?
  if (!mainDomain) return;

  type VanityResponse = {
    domain: string;
    error: boolean; // TODO
    registered: boolean;
    sanitized: string; // TODO
    service: 'twitter' | 'facebook' | 'instagram';
  };

  const domainName = name(mainDomain);
  async.request<VanityResponse>({
    url: `${config.socialURL}${domainName}?hash=${hashCode(domainName, SCOOTER_HASH_SEED)}`,
    streaming: true,
    success: ({domain, registered, service}: VanityResponse) => {
      switch (service) {
        case SocialService.twitter:
          dispatch({
            type: 'SOCIAL_USERNAME_AVAILABILITY',
            service: SocialService.twitter,
            available: !registered,
            name: domain,
          });
          break;
        case SocialService.facebook:
          dispatch({
            type: 'SOCIAL_USERNAME_AVAILABILITY',
            service: SocialService.facebook,
            name: domain,
            available: !registered,
          });
          break;
        case SocialService.instagram:
          dispatch({
            type: 'SOCIAL_USERNAME_AVAILABILITY',
            service: SocialService.instagram,
            name: domain,
            available: !registered,
          });
          break;
        default:
          break;
      }
    },
  });
};

let doubleCheckTimeout: number;
let doubleCheckQueue: Domain[] = [];

const scheduleDoubleCheck = (domains: Domain[]) => {
  doubleCheckQueue = [
    ...doubleCheckQueue,
    ...domains.filter(
      domain =>
        name(domain).length > 1 &&
        status(domain) === DomainStatus.available &&
        (domain.tld === 'com' || domain.tld === 'net' || domain.tld === 'cc') &&
        !selectors.domainCheckLoaded(store.getState(), domain),
    ),
  ];
  clearTimeout(doubleCheckTimeout);
  if (doubleCheckQueue.length > 0) {
    doubleCheckTimeout = window.setTimeout(doubleCheck, 500);
  }
};

/* User actions (buy, whois, etc.) */

export const performMainAction = () => {
  const mainDomain = selectors.mainDomain(store.getState());

  if (!mainDomain) {
    log.warn('performMainAction() called without an active domain');
    return;
  }

  analytics.event('convert', 'submit_js', googleAnalyticsLabel(mainDomain));
  analytics.firstConvert();

  const href = defaultActionURL(mainDomain);
  if (!href) {
    return;
  }

  // TODO: A/B test a new tab vs just navigating away
  if (selectors.isMobile(store.getState())) {
    window.location.href = href; // safari mobile presents a popup warning modal
  } else {
    window.open(href, '_blank', 'noopener=yes');
  }
};

export const expandFlyout = (flyoutID: number) => {
  dispatch({type: 'EXPAND_FLYOUT', flyoutID});
};

export const collapseFlyout = () => {
  dispatch({type: 'COLLAPSE_FLYOUT'});
};

export const dismissDialog = () => {
  dispatch({type: 'DISMISS_DIALOG'});
  focusSearchField();
};

/* Search */
export const updateSearch = (typedSearch: string) => {
  const currentTyped = selectors.typedSearch(store.getState());
  if (typedSearch === currentTyped) {
    return;
  }
  const currentPhrase = selectors.searchPhrase(store.getState());
  const currentTld = selectors.mainTld(store.getState());

  const [phrase, tld] = normalizeSearch(typedSearch);

  // only initiate search if user has actually changed the search (for example,
  // this debounces extraneous spaces, uppercase etc.)
  // TODO(fixme): and it's a search we haven't seen before.
  if (phrase !== currentPhrase || tld !== currentTld) {
    dispatch({type: 'UPDATE_SEARCH_AND_SEND_REQUEST', typed: typedSearch, phrase, tld});
    updateMainSearchResultDebounced(phrase, tld);
    updateSearchDebounced(phrase, tld);
  } else {
    dispatch({type: 'UPDATE_SEARCH', typed: typedSearch});
  }

  updateHash();
  updateTitle();
};

const updateMainSearchResultDebounced = debounceImmediate((phrase: string, tld: string) => {
  singleNameQuery(phrase, tld);
}, MAIN_SEARCH_RESULTS_DEBOUNCE);

const updateSearchDebounced = debounceImmediate((phrase: string, tld: string) => {
  if (selectors.hostingChooserShown(store.getState())) {
    dispatch({type: 'DISMISS_HOSTING_CHOOSER'});
  }

  const onResults = batch(
    (results: Domain[]) => {
      if (results.length === 0) return;
      dispatch({type: 'RECEIVE_SEARCH_RESULTS', phrase, tld, results});
      scheduleDoubleCheck(results);
    },
    selectors.isMobile(store.getState()) ? STREAMING_RESULTS_DEBOUNCE_MOBILE : STREAMING_RESULTS_DEBOUNCE,
  );

  const onDone = () => {
    onResults.flush();
    dispatch({type: 'REQUEST_DONE', phrase, tld});
  };

  const onError = (status: number | null) => {
    if (status !== null && status >= 400 && status < 500) {
      dispatch({type: 'BAD_REQUEST', phrase, tld, status});
    } else {
      dispatch({type: 'SERVER_ERROR', phrase, tld, status});
    }
  };

  const page = selectors.page(store.getState());
  const preferredTlds = ['com'];
  if (tld) {
    preferredTlds.unshift(tld);
  }
  if (store.getState().geography.country) {
    preferredTlds.push(store.getState().geography.country.toLowerCase());
  }

  switch (page) {
    case Page.Generator:
      search(config.generatorURL, phrase, null, preferredTlds, onResults, onDone, onError, 96);
      break;
    case Page.Gtlds:
      search(config.nameURL, phrase, 'all', preferredTlds, onResults, onDone, onError);
      break;
    case Page.Sale:
      search(config.vectorURL, phrase, null, preferredTlds, onResults, onDone, onError, 96);
      break;
    case Page.Expired:
      search(config.expiringURL, phrase, null, preferredTlds, onResults, onDone, onError, 96);
      break;
    default:
      let pending = 3;
      let errors = 0;
      const onOneDone = () => {
        pending--;
        if (pending === 0) onDone();
      };
      const onOneError = (status: number | null) => {
        pending--;
        errors++;
        if (errors === 3) onError(status);
      };
      search(config.nameURL, phrase, 'popular', preferredTlds, onResults, onOneDone, onOneError);
      search(config.generatorURL, phrase, null, preferredTlds, onResults, onOneDone, onOneError, 32);
      search(config.vectorURL, phrase, null, preferredTlds, onResults, onOneDone, onOneError, 32);
      break;
  }
}, EXTENED_SEARCH_RESULTS_DEBOUNCE);

export const focusSearchField = () => {
  const field = document.getElementById('search');
  if (field) {
    field.focus();
  }
};

export const blurSearchField = () => {
  const field = document.getElementById('search');
  if (field) {
    field.blur();
  }
};

export const focusedSearchField = () => {
  dispatch({type: 'FOCUSED_SEARCH_FIELD'});
};

export const clearSearchField = () => {
  updateSearch('');
  focusSearchField();
};

export const showHostingChooser = () => {
  dispatch({type: 'SHOW_HOSTING_CHOOSER'});
};

export const dismissHostingChooser = (event: React.MouseEvent) => {
  dispatch({type: 'DISMISS_HOSTING_CHOOSER'});
  focusSearchField();
  event.preventDefault();
};

const singleNameQuery = (phrase: string, tld: string) => {
  const query = url.encodeQueryString({
    tlds: tld || 'com',
    hash: hashCode(phrase, NOMINL_HASH_SEED).toString(),
  });

  async.request<Domain>({
    url: `${config.nameURL}${encodeURIComponent(phrase)}?${query}`,
    success: (response: Domain) => {
      dispatch({type: 'RECEIVE_SEARCH_RESULTS', phrase, tld, results: [response]});
      if (status(response) === DomainStatus.available) {
        scheduleDoubleCheck([response]);
      }
    },
  });
};

/* Favorites */

const loadFavorites = () => {
  dispatch({type: 'FAVORITES_LOADED', favorites: favorites.load()});
};

export const listOfFavoritesShown = () => {
  Array.from(store.getState().favorites).forEach(loadFavoriteData);
};

const loadFavoriteData = (key: string) => {
  const parts = key.split('.');
  const phrase = parts.slice(0, parts.length - 1).join('.');
  const tld = parts[parts.length - 1];
  singleNameQuery(phrase, tld);
};

export const toggleFavorite = (domain: Domain) => {
  dispatch({type: 'TOGGLE_FAVORITE', domain});
  favorites.save(store.getState().favorites);
};

/* URL handling */

export const hashChanged = () => {
  const {search} = url.parseLocation(window.location) as URLParams;

  if (window.location.hash.length > 0 && !search) {
    return false; // ignore anchor links: /faq/#how-does-instant-domain-search-make-money
  }

  updateSearch(search || '');
  focusSearchField();
};

export const updatePageTitle = (title: string) => {
  dispatch({type: 'UPDATE_PAGE_TITLE', title});
};

const updateTitle = debounce(() => {
  const [search] = selectors.normalizedSearch(store.getState());
  const updatedTitle = search && 0 < search.length ? `${search} | Instant Domain Search` : '';
  updatePageTitle(updatedTitle);
}, 1000);

const updateHash = debounce(() => {
  const hash = selectors.canonicalUrl(store.getState());
  // pushState doesn't scroll us to the top, use that if available
  if (window.history && window.history.pushState) {
    const url = `${window.location.pathname}${hash}`;
    window.history.pushState(null, '', url || '/');
  } else {
    window.location.hash = hash;
  }
}, 1000);

/* Keyboard shortcuts */

const setupKeyboardShortcuts = () => {
  document.body.addEventListener('keydown', event => {
    if (event.altKey || event.metaKey || event.shiftKey) {
      return;
    }

    if (event.ctrlKey) {
      switch (event.keyCode) {
        case 191: // '?'
          keyboardShortcutUsed();
          showShortcutsDialog();
          break;
        case 74: // 'J'
          keyboardShortcutUsed();
          selectNextDomain();
          break;
        case 75: // 'K'
          keyboardShortcutUsed();
          selectPreviousDomain();
          break;
        case 70: // 'F'
          keyboardShortcutUsed();
          selectNextColumn();
          break;
        case 66: // 'B'
          keyboardShortcutUsed();
          selectPreviousColumn();
          break;
        case 83: // 'S'
          keyboardShortcutUsed();
          toggleFavorite(selectors.selectedDomain(store.getState()) || selectors.mainDomain(store.getState()));
          break;
        default:
          break;
      }
    } else {
      switch (event.keyCode) {
        case 191: // '/'
          keyboardShortcutUsed();
          event.preventDefault();
          focusSearchField();
          break;
        case 27: // 'Esc'
          keyboardShortcutUsed();
          if (selectors.dialogShown(store.getState())) {
            dismissDialog();
          } else {
            event.preventDefault();
            clearSearchField();
          }
          break;
        case 40: // '↓'
          keyboardShortcutUsed();
          selectNextDomain();
          break;
        case 38: // '↑'
          keyboardShortcutUsed();
          selectPreviousDomain();
          break;
        default:
          break;
      }
    }
  });
};

const keyboardShortcutUsed = () => {
  analytics.firstKeyboardShortcut();
  dispatch({type: 'KEYBOARD_SHORTCUT_USED'});
};

let shortcutsTipTimeout: number;

export const scheduleShortcutsTip = () => {
  clearTimeout(shortcutsTipTimeout);
  shortcutsTipTimeout = window.setTimeout(showShortcutsTip, 4000);
};

export const showShortcutsTip = () => {
  shortcutsTipTimeout = window.setTimeout(hideShortcutsTip, 4000);
  dispatch({type: 'SHOW_SHORTCUTS_TIP'});
};

export const hideShortcutsTip = () => {
  dispatch({type: 'HIDE_SHORTCUTS_TIP'});
};

export const showShortcutsDialog = () => {
  dispatch({type: 'SHOW_SHORTCUTS_DIALOG'});
};

const setupTouchEvents = () => {
  let keyboardShown = true;
  const onSwipe = (event: Event) => {
    const {scrollTop} = document.body;
    if (scrollTop > 100 && keyboardShown) {
      blurSearchField();
      keyboardShown = false;
    } else if (scrollTop < 100 && !keyboardShown) {
      // If this is a touchmove, we probably can't successfully show the keyboard, so wait for the touchend
      if (event.type === 'touchend') {
        focusSearchField();
        keyboardShown = true;
      }
    }
  };

  document.addEventListener('touchmove', debounce(onSwipe), {passive: true});
  document.addEventListener('touchend', onSwipe, {passive: true});
};

export const selectNextDomain = () => {
  const domains = selectors.allResultsByType(store.getState());
  const {type, index} = selectors.selection(store.getState());
  const domainList = domains[type] || domains;
  if (index + 1 < domainList.length) {
    const idx = type !== ResultType.Fix && index < 0 ? 1 : index + 1;
    dispatch({type: 'SELECT_DOMAIN', domainType: type, index: idx});
  }
};
export const selectPreviousDomain = () => {
  const {type, index} = selectors.selection(store.getState());
  if (index > 0) {
    dispatch({type: 'SELECT_DOMAIN', domainType: type, index: index - 1});
  }
};
export const selectNextColumn = () => {
  const domains = selectors.allResultsByType(store.getState());
  const {type, index} = selectors.selection(store.getState());
  if (type === ResultType.TLDs) {
    const domainList = domains.suggestions || domains;
    dispatch({
      type: 'SELECT_DOMAIN',
      domainType: ResultType.Suggestions,
      index: Math.min(Math.max(index, 0), domainList.length - 1),
    });
  } else if (type === ResultType.Suggestions) {
    const domainList = domains.forSale || domains;
    dispatch({
      type: 'SELECT_DOMAIN',
      domainType: ResultType.ForSale,
      index: Math.min(Math.max(index, 0), domainList.length - 1),
    });
  }
};
export const selectPreviousColumn = () => {
  const domains = selectors.allResultsByType(store.getState());
  const {type, index} = selectors.selection(store.getState());
  if (type === ResultType.ForSale) {
    const domainList = domains.suggestions || domains;
    dispatch({
      type: 'SELECT_DOMAIN',
      domainType: ResultType.Suggestions,
      index: Math.min(Math.max(index, 0), domainList.length - 1),
    });
  } else if (type === ResultType.Suggestions) {
    const domainList = domains.forSale || domains;
    dispatch({
      type: 'SELECT_DOMAIN',
      domainType: ResultType.TLDs,
      index: Math.min(Math.max(index, 0), domainList.length - 1),
    });
  }
};

const setupAnalytics = () => {
  analytics.restoreQueue();
  analytics.pageview();
  analytics.setup((geography: {Country: string; City: string}) => {
    dispatch({type: 'RECEIVE_GEOGRAPHY', country: geography.Country, city: geography.City});

    // TODO(fixme): fix caching. now that we have geography, do another search
    // that will include the user's country TLDs
    const [phrase, tld] = selectors.normalizedSearch(store.getState());
    if (phrase !== '') {
      updateSearchDebounced(phrase, tld);
    }
  });
};

/* Init */

let isFullPageLoad = true;

/* Called on page load and on pushState navigation */
export const init = (page: Page) => {
  if (isFullPageLoad) {
    isFullPageLoad = false;
    dispatch({type: 'PAGE_LOADED', page});
    loadFavorites();
    browserResized();
    window.addEventListener('resize', browserResized);
    setupKeyboardShortcuts();
    setupAnalytics();
    setupTouchEvents();
    window.addEventListener('hashchange', hashChanged);
    hashChanged(); // permalinks
    updateTitle();

    if (page === Page.Generator) {
      dispatch({type: 'SELECT_DOMAIN', domainType: ResultType.Fix, index: -1});
    }
    // delete all non-whitelisted cookies
    cookieMonster();
  } else {
    dispatch({type: 'SWITCH_PAGE', page});
    const [phrase, tld] = selectors.normalizedSearch(store.getState());
    updateMainSearchResultDebounced(phrase, tld);
    updateSearchDebounced(phrase, tld);
    updateTitle();
    analytics.pageview();
  }
};
