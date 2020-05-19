/* Copyright 2005-present Instant Domain Search, Inc. */
/* eslint-disable no-shadow */

import {createSelector} from 'reselect';

import {domainName, DomainStatus, isExpiring, isForSale, isSuggestion, localStorageKey, name, status} from './domain';
import * as ranking from './ranking';
import {State} from './reducers';
import * as tlds from './tlds';
import * as util from './util';

export const typedSearch = (state: State) => state.search;
export const searchStatus = (state: State) => state.searchStatus;
export const rawResults = (state: State) => state.results;
export const rawDomains = (state: State) => state.domains;
export const domainAvailability = (state: State) => state.domainAvailability;
export const extensionSimilarity = (state: State) => state.extensionSimilarity;
export const extensionsSort = (state: State) => state.extensionsSort;
export const page = (state: State) => state.page;
export const geography = (state: State) => state.geography;
export const country = (state: State) => state.geography.country; // TODO: unclown
export const pageTitle = (state: State) => state.pageTitle;

const searchIsEmpty = createSelector(
  typedSearch,
  // tslint:disable-next-line:no-shadowed-variable
  typedSearch => typedSearch === '',
);

export const shouldShowHeaderAndFooter = searchIsEmpty;
export const shouldShowContent = searchIsEmpty;

// typed search -> 'www.' (optional) + searchSansTld + '.' + searchedTld(optional)
export const normalizedSearch = createSelector(
  typedSearch,
  // tslint:disable-next-line:no-shadowed-variable
  typedSearch => util.normalizeSearch(typedSearch),
);

export const searchPhrase = createSelector(
  normalizedSearch,
  // tslint:disable-next-line:no-shadowed-variable
  normalizedSearch => normalizedSearch[0],
);

export const mainTld = createSelector(
  normalizedSearch,
  // tslint:disable-next-line:no-shadowed-variable
  normalizedSearch => normalizedSearch[1],
);

export const canonicalUrl = createSelector(
  typedSearch,
  // tslint:disable-next-line:no-shadowed-variable
  typedSearch => {
    if (typedSearch && typedSearch.length > 0) {
      return `#search=${encodeURIComponent(typedSearch)}`;
    } else {
      return '';
    }
  },
);

export const domainsForCurrentSearch = createSelector(
  rawResults,
  normalizedSearch,
  domainAvailability,
  (rawResults, normalizedSearch, domainAvailability) =>
    Object.values(rawResults[normalizedSearch.join('.')] || {}).map(
      (domain): Domain => {
        if (status(domain) === DomainStatus.available) {
          if (domainAvailability[localStorageKey(domain)] === false) {
            return {...domain, actuallyRegistered: true}; // TODO: memoize this
          }
        }
        return domain;
      },
    ),
);

export const extensionSimilarityForCurrentSearch = createSelector(
  searchPhrase,
  extensionSimilarity,
  (searchPhrase, extensionSimilarity) => extensionSimilarity[searchPhrase] || {},
);

export const isSearchInProgress = createSelector(normalizedSearch, searchStatus, (normalizedSearch, searchStatus) => {
  const key = normalizedSearch.join('.');
  return searchStatus[key] ? searchStatus[key].inProgress : false;
});

export const requestError = createSelector(normalizedSearch, searchStatus, (normalizedSearch, searchStatus) => {
  const key = normalizedSearch.join('.');
  return searchStatus[key] ? searchStatus[key].requestError : false;
});

export const responseError = createSelector(normalizedSearch, searchStatus, (normalizedSearch, searchStatus) => {
  const key = normalizedSearch.join('.');
  return searchStatus[key] ? searchStatus[key].responseError : false;
});

export const domains = createSelector(rawDomains, domainAvailability, (rawDomains, domainAvailability) => {
  const domains: {[key: string]: Domain} = {};
  for (const key in rawDomains) {
    const domain = rawDomains[key];
    if (status(domain) === DomainStatus.available) {
      if (domainAvailability[localStorageKey(domain)] === false) {
        const registeredDomain: Domain = {...domain, actuallyRegistered: true}; // TODO: memoize this
        domains[key] = registeredDomain;
        continue;
      }
    }
    domains[key] = rawDomains[key];
  }
  return domains;
});

export const tldResults = createSelector(
  rawDomains,
  searchPhrase,
  mainTld,
  geography,
  extensionSimilarityForCurrentSearch,
  extensionsSort,
  // tslint:disable-next-line:no-shadowed-variable
  (domains, searchPhrase, mainTld, geography, extensionSimilarity, extensionSort) => {
    const geo = tlds.bestGeography(geography.country.toLowerCase());
    const popularTlds = tlds.popularTldsWithPreferred(
      mainTld ? [mainTld, 'com', ...geo] : ['com', ...geo],
      extensionSimilarity,
      extensionSort,
    );
    return popularTlds.map(
      tld => domains[`${searchPhrase}.${tld}`] || {label: searchPhrase, tld, search: 'name', isLoading: true},
    );
  },
);

let lastSuggestionResults: Domain[] = [];

export const suggestionResults = createSelector(
  domainsForCurrentSearch,
  tldResults,
  isSearchInProgress,
  // tslint:disable-next-line:no-shadowed-variable
  (domainsForCurrentSearch, tldResults, isSearchInProgress) => {
    const seen = new Set(tldResults.map(domainName));
    const results = domainsForCurrentSearch.filter(
      domain => isSuggestion(domain) && !seen.has(localStorageKey(domain)),
    );

    if (isSearchInProgress && results.length === 0) return lastSuggestionResults;

    results.sort(ranking.compare);
    return (lastSuggestionResults = results);
  },
);

let lastForSaleResults: Domain[] = [];

export const forSaleResults = createSelector(
  domainsForCurrentSearch,
  tldResults,
  isSearchInProgress,
  // tslint:disable-next-line:no-shadowed-variable
  (domainsForCurrentSearch, tldResults, isSearchInProgress) => {
    const seen = new Set(tldResults.map(domainName));
    const results = domainsForCurrentSearch.filter(domain => isForSale(domain) && !seen.has(localStorageKey(domain)));

    if (isSearchInProgress && results.length === 0) return lastForSaleResults;

    results.sort(ranking.compare);
    lastForSaleResults = results;
    return results;
  },
);

let lastExpiringResults: Domain[] = [];

export const expiringResults = createSelector(
  domainsForCurrentSearch,
  tldResults,
  isSearchInProgress,
  // tslint:disable-next-line:no-shadowed-variable
  (domainsForCurrentSearch, tldResults, isSearchInProgress) => {
    const seen = new Set(tldResults.map(domainName));
    const results = domainsForCurrentSearch.filter(domain => isExpiring(domain) && !seen.has(localStorageKey(domain)));

    if (isSearchInProgress && results.length === 0) return lastExpiringResults;

    results.sort(ranking.compare);
    lastExpiringResults = results;
    return results;
  },
);

let lastGeneratorResults: Domain[] = [];

export const generatorResults = createSelector(
  domainsForCurrentSearch,
  isSearchInProgress,
  (domainsForCurrentSearch, isSearchInProgress) => {
    const results = domainsForCurrentSearch;
    if (isSearchInProgress && results.length === 0) return lastGeneratorResults;
    results.sort(ranking.compare);
    lastGeneratorResults = results;
    return results;
  },
);

export const topLevelDomains = createSelector(domains, searchPhrase, (domains, searchPhrase) => {
  return Object.entries(tlds.byCategory).map(([name, results]) => {
    return {
      category: name,
      domains: results.map(({name}) => {
        const domain: Domain | null = domains[`${searchPhrase}.${name}`];
        return {name, domain};
      }),
    };
  });
});

export const allResultsByType = createSelector(
  expiringResults,
  forSaleResults,
  generatorResults,
  suggestionResults,
  tldResults,
  (expiringResults, forSaleResults, generatorResults, suggestionResults, tldResults) => ({
    expiring: expiringResults,
    fix: generatorResults,
    forSale: forSaleResults,
    suggestions: suggestionResults,
    tlds: tldResults,
  }),
);

export const selection = (state: State) => state.selection;

export const selectedDomain = createSelector(
  allResultsByType,
  selection,
  // tslint:disable-next-line:no-shadowed-variable
  (allResultsByType, {type, index}) => allResultsByType[type] && allResultsByType[type][index],
);

let lastMainDomain: Domain | null = null;

export const mainDomain = createSelector(
  selectedDomain,
  searchPhrase,
  mainTld,
  domains,
  (selectedDomain, searchPhrase, mainTld, domains) => {
    if (searchPhrase.length === 0) return (lastMainDomain = null);
    const tld = mainTld || 'com';

    // Single-character domains are all taken
    if (/^\w$/.test(searchPhrase)) {
      const placeholder: Domain = {
        isRegistered: true,
        label: searchPhrase,
        rank: 1,
        search: 'name',
        tld,
      };

      return (lastMainDomain = placeholder);
    }
    if (selectedDomain) return selectedDomain;

    if (!domains[`${searchPhrase}.${tld}`]) return lastMainDomain;
    const domain = domains[`${searchPhrase}.${tld}`];
    return (lastMainDomain = domain);
  },
);

export const socialUsernameAvailability = (state: State, domain: Domain) =>
  state.socialUsernameAvailability[name(domain)] || {};
export const domainCheckLoaded = (state: State, domain: Domain) =>
  state.domainAvailability[localStorageKey(domain)] !== void 0;

export const isMobile = (state: State) => state.browser.isMobile;
export const isTouch = (state: State) => state.browser.isTouch;

export const favoriteIDs = (state: State) => state.favorites;
export const numberOfFavorites = createSelector(favoriteIDs, favoriteIDs => favoriteIDs.size);
export const favorites = createSelector(favoriteIDs, domains, (favoriteIDs, domains) =>
  Array.from(favoriteIDs)
    .map(id => domains[id])
    .filter(d => !!d),
);

export const hostingChooserShown = (state: State) =>
  !searchIsEmpty(state) && !isMobile(state) && state.showHostingChooser;

export const shortcutsDialogShown = (state: State) => state.shortcutsDialog;
export const showShortcutsTip = (state: State) => state.shortcutsTip.show;

export const dialogShown = createSelector(shortcutsDialogShown, shortcutsDialogShown => shortcutsDialogShown);

export const expandedFlyout = (state: State) => state.flyout;

export const forResultCategory = {
  expiring: expiringResults,
  forSale: forSaleResults,
  suggestions: suggestionResults,
  tlds: tldResults,
  favorites,
};
