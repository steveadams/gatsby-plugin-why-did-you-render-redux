/* Copyright 2005-present Instant Domain Search, Inc. */

import isEqual from 'react-fast-compare';

import {Action, ResultType, SocialService} from './actionTypes';
import {ToastID} from './components/Toast';
import {domainName, localStorageKey, searchResultKey} from './domain';
import {Page} from './routes';

export interface State {
  page: Page;
}

export const page = (state = Page.Home, action: Action) => {
  switch (action.type) {
    case 'PAGE_LOADED':
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

const defaultBrowserState = {isMobile: false, isTouch: false};

export const browser = (state = defaultBrowserState, action: Action) => {
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

const defaultSearchStatusState = {};

export const searchStatus = (state: Partial<State> = defaultSearchStatusState, action: Action) => {
  function getSearchStatusState(action: {phrase: string; tld: string}, state: Partial<State>): State {
    const key = `${action.phrase}.${action.tld}`;
    const newState = {
      ...state,
      [key]: {inProgress: true, requestError: false, responseError: false},
    };

    return (isEqual(state, newState) ? state : newState) as State;
  }

  switch (action.type) {
    case 'UPDATE_SEARCH_AND_SEND_REQUEST':
      return getSearchStatusState(action, state);
    case 'REQUEST_DONE':
      return getSearchStatusState(action, state);
    case 'BAD_REQUEST':
      return getSearchStatusState(action, state);
    case 'SERVER_ERROR':
      return getSearchStatusState(action, state);
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

      const newState = {
        ...state,
        [key]: {...(state[key] || {}), ...uniqueResults},
      };

      return isEqual(state, newState) ? state : newState;
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
    case 'RECEIVE_SEARCH_RESULTS': {
      const result = {...state};
      for (const domain of action.results) {
        result[domainName(domain)] = domain;
      }

      return isEqual(state, result) ? state : result;
    }
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
  let newState;

  switch (action.type) {
    case 'DOMAINS_RESOLVED':
      newState = {
        ...state,
        ...action.availability,
      };

      return isEqual(state, newState) ? state : newState;
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

const defaultExtensionSimilarity = {};

export const extensionSimilarity = (
  state: State['extensionSimilarity'] = defaultExtensionSimilarity,
  action: Action,
) => {
  let newState;

  switch (action.type) {
    case 'RECEIVE_EXTENSION_SIMILARITIES': {
      const first = action.similarities[0];

      if (!first) return state;

      // Perf optimization: assume all results in the batch share the same
      // search, so we can avoid cloning this object hundreds of times. We
      // clone it once then mutate it.
      newState = {...state, [first.search]: {...state[first.search]}};

      for (const {search, item, similarity} of action.similarities) {
        if (!newState[search]) newState[search] = {};
        newState[search]![item] = similarity;
      }

      return isEqual(state, newState) ? state : newState;
    }
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

// Create a reusable reference for empty states
const defaultSocialUsernameAvailabilityState = {};

export const socialUsernameAvailability = (
  state: {[key: string]: {[service in SocialService]: boolean}} = defaultSocialUsernameAvailabilityState,
  action: Action,
) => {
  let newState;

  switch (action.type) {
    case 'SOCIAL_USERNAME_AVAILABILITY':
      newState = {
        ...state,
        [action.name]: {...state[action.name], [action.service]: action.available},
      };

      return isEqual(state, newState) ? state : newState;
    default:
      return state;
  }
};

export interface State {
  selection: {type: ResultType; index: number};
}

const defaultSelectionState = {type: ResultType.TLDs, index: -1};
export const selection = (state = defaultSelectionState, action: Action): {type: ResultType; index: number} => {
  switch (action.type) {
    case 'SELECT_DOMAIN':
      return state.type !== action.domainType || state.index !== action.index
        ? {type: action.domainType, index: action.index}
        : state;
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

const defaultShortcutsTipState = {show: false, never: false};

export const shortcutsTip = (state = defaultShortcutsTipState, action: Action) => {
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

interface ToastState {
  added: ToastID[];
  dismissed: ToastID[];
}

export interface State {
  toasts: ToastState;
}

export const toasts = (state: ToastState = {added: [], dismissed: []}, action: Action) => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {...state, added: [...state.added, action.toastID].filter(id => !state.dismissed.includes(id))};

    case 'DISMISS_TOAST':
      return {...state, dismissed: [...state.dismissed, action.toastID]};

    case 'DISMISSED_TOASTS_LOADED':
      return {...state, dismissed: action.dismissed};

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

    case 'TOGGLE_FAVORITE': {
      const key = localStorageKey(action.domain);
      const newState = new Set(Array.from(state));
      if (state.has(key)) {
        newState.delete(key);
      } else {
        newState.add(key);
      }
      return newState;
    }

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
