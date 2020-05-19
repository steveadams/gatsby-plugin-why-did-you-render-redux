/* Copyright 2005-present Instant Domain Search, Inc. */

import {Action, ResultType, SocialService} from './actionTypes';
import {domainName, localStorageKey, searchResultKey} from './domain';
import {Page} from './routes';

export interface State {
  page: Page;
}

export const page = (state = Page.Home, action: Action) => {
  switch (action.type) {
    case 'PAGE_LOADED':
      return action.page;
    case 'SWITCH_PAGE':
      return action.page;
    default:
      return state;
  }
};

export interface State {
  pageTitle: string;
}

export const pageTitle = (state = '', action: Action) => {
  switch (action.type) {
    case 'UPDATE_PAGE_TITLE':
      return action.title;
    default:
      return state;
  }
};

export interface State {
  browser: {isMobile: boolean; isTouch: boolean};
}

export const browser = (state = {isMobile: false, isTouch: false}, action: Action) => {
  switch (action.type) {
    case 'BROWSER_RESIZED':
      return {isMobile: action.isMobile, isTouch: action.isTouch};
    default:
      return state;
  }
};

export interface State {
  search: string;
}

export const search = (state = '', action: Action) => {
  switch (action.type) {
    case 'UPDATE_SEARCH':
    case 'UPDATE_SEARCH_AND_SEND_REQUEST':
      return action.typed;
    default:
      return state;
  }
};

export interface State {
  searchStatus: {[key: string]: SearchStatus};
}

export const searchStatus = (state = {}, action: Action) => {
  let key;
  switch (action.type) {
    case 'UPDATE_SEARCH_AND_SEND_REQUEST':
      key = `${action.phrase}.${action.tld}`;
      return {
        ...state,
        [key]: {inProgress: true, requestError: false, responseError: false},
      };
    case 'REQUEST_DONE':
      key = `${action.phrase}.${action.tld}`;
      return {
        ...state,
        [key]: {inProgress: false, requestError: false, responseError: false},
      };
    case 'BAD_REQUEST':
      key = `${action.phrase}.${action.tld}`;
      return {
        ...state,
        [key]: {inProgress: false, requestError: true, responseError: false},
      };
    case 'SERVER_ERROR':
      key = `${action.phrase}.${action.tld}`;
      return {
        ...state,
        [key]: {inProgress: false, requestError: false, responseError: true},
      };
    default:
      return state;
  }
};

export interface State {
  results: {[key: string]: Domain[]};
}

export const results = (state: {[key: string]: Domain[]} = {}, action: Action) => {
  switch (action.type) {
    case 'RECEIVE_SEARCH_RESULTS': {
      const key = `${action.phrase}.${action.tld}`;
      const uniqueResults: {[key: string]: Domain} = {};
      for (const result of action.results) {
        uniqueResults[searchResultKey(result)] = result;
      }
      return {
        ...state,
        [key]: {...(state[key] || {}), ...uniqueResults},
      };
    }
    case 'BAD_REQUEST': {
      const key = `${action.phrase}.${action.tld}`;
      return {
        ...state,
        [key]: [],
      };
    }
    case 'SWITCH_PAGE': {
      return {};
    }
    default:
      return state;
  }
};

export interface State {
  domains: {[domainName: string]: Domain};
}

export const domains = (state: {[domainName: string]: Domain} = {}, action: Action) => {
  switch (action.type) {
    case 'RECEIVE_SEARCH_RESULTS':
      const result = {...state};
      for (const domain of action.results) {
        result[domainName(domain)] = domain;
      }
      return result;
    default:
      return state;
  }
};

export interface State {
  domainAvailability: {
    [key: string]: boolean;
  };
}

export const domainAvailability = (state: {[key: string]: boolean} = {}, action: Action) => {
  switch (action.type) {
    case 'DOMAINS_RESOLVED':
      return {
        ...state,
        ...action.availability,
      };
    default:
      return state;
  }
};

export interface State {
  extensionSimilarity: {
    [Search: string]:
      | {
          [Extension: string]: number | undefined;
        }
      | undefined;
  };
}

export const extensionSimilarity = (state: State['extensionSimilarity'] = {}, action: Action) => {
  switch (action.type) {
    case 'RECEIVE_EXTENSION_SIMILARITIES':
      const first = action.similarities[0];
      if (!first) return state;
      // Perf optimization: assume all results in the batch share the same
      // search, so we can avoid cloning this object hundreds of times. We
      // clone it once then mutate it.
      state = {...state, [first.search]: {...state[first.search]}};
      for (const {search, item, similarity} of action.similarities) {
        if (!state[search]) state[search] = {};
        state[search]![item] = similarity;
      }
      return state;
    default:
      return state;
  }
};

export interface State {
  extensionsSort: 'popular' | 'relevant';
}

export const extensionsSort = (state: State['extensionsSort'] = 'popular', action: Action) => {
  switch (action.type) {
    case 'SET_EXTENSIONS_SORT':
      return action.sort;
    default:
      return state;
  }
};

export interface State {
  socialUsernameAvailability: {[key: string]: {[service in SocialService]: boolean}};
}

export const socialUsernameAvailability = (
  state: {[key: string]: {[service in SocialService]: boolean}} = {},
  action: Action,
) => {
  switch (action.type) {
    case 'SOCIAL_USERNAME_AVAILABILITY':
      return {
        ...state,
        [action.name]: {...state[action.name], [action.service]: action.available},
      };
    default:
      return state;
  }
};

export interface State {
  selection: {type: ResultType; index: number};
}

export const selection = (
  state = {type: ResultType.TLDs, index: -1},
  action: Action,
): {type: ResultType; index: number} => {
  switch (action.type) {
    case 'SELECT_DOMAIN':
      return {type: action.domainType, index: action.index};
    case 'UPDATE_SEARCH':
    case 'UPDATE_SEARCH_AND_SEND_REQUEST':
    case 'FOCUSED_SEARCH_FIELD':
      if (state.type === ResultType.Fix) {
        return {type: ResultType.Fix, index: -1};
      }
      return {type: ResultType.TLDs, index: -1};
    default:
      return state;
  }
};

export interface State {
  shortcutsTip: {show: boolean; never: boolean};
}

export const shortcutsTip = (state = {show: false, never: false}, action: Action) => {
  switch (action.type) {
    case 'SHOW_SHORTCUTS_TIP':
      if (state.never) {
        return state;
      } else {
        return {show: true, never: false};
      }
    case 'HIDE_SHORTCUTS_TIP':
      if (state.never) {
        return state;
      } else {
        return {show: false, never: true};
      }
    case 'UPDATE_SEARCH':
    case 'UPDATE_SEARCH_AND_SEND_REQUEST':
      if (state.never) {
        return state;
      } else {
        return {show: false, never: false};
      }
    case 'SHOW_SHORTCUTS_DIALOG':
      return {show: false, never: true};
    case 'KEYBOARD_SHORTCUT_USED':
      return {show: false, never: true};
    default:
      return state;
  }
};

export interface State {
  showHostingChooser: boolean;
}

export const showHostingChooser = (state = false, action: Action) => {
  switch (action.type) {
    case 'SHOW_HOSTING_CHOOSER':
      return true;
    case 'DISMISS_HOSTING_CHOOSER':
      return false;
    default:
      return state;
  }
};

export interface State {
  shortcutsDialog: boolean;
}

export const shortcutsDialog = (state = false, action: Action) => {
  switch (action.type) {
    case 'SHOW_SHORTCUTS_DIALOG':
      return true;
    case 'DISMISS_DIALOG':
      return false;
    default:
      return state;
  }
};

export interface State {
  flyout: number | null;
}

export const flyout = (state: number | null = null, action: Action) => {
  switch (action.type) {
    case 'EXPAND_FLYOUT':
      return action.flyoutID;
    case 'COLLAPSE_FLYOUT':
      return null;
    default:
      return state;
  }
};

export interface State {
  favorites: Set<string>;
}

export const favorites = (state = new Set<string>(), action: Action) => {
  switch (action.type) {
    case 'FAVORITES_LOADED':
      return new Set(action.favorites);

    case 'TOGGLE_FAVORITE':
      const key = localStorageKey(action.domain);
      const newState = new Set(Array.from(state));
      if (state.has(key)) {
        newState.delete(key);
      } else {
        newState.add(key);
      }
      return newState;

    default:
      return state;
  }
};

export interface State {
  geography: {city: string; country: string};
}

export const geography = (state = {city: '', country: ''}, action: Action) => {
  switch (action.type) {
    case 'RECEIVE_GEOGRAPHY':
      return {city: action.city, country: action.country};
    default:
      return state;
  }
};
