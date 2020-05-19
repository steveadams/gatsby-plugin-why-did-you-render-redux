/* Copyright 2005-present Instant Domain Search, Inc. */

import {Page} from './routes';

export enum SocialService {
  facebook = 'facebook',
  instagram = 'instagram',
  twitter = 'twitter',
}

export enum ResultType {
  Expiring = 'expiring',
  Fix = 'fix',
  ForSale = 'forSale',
  Suggestions = 'suggestions',
  TLDs = 'tlds',
}

export type Action =
  | {type: 'BAD_REQUEST'; phrase: string; tld: string; status: number | null}
  | {type: 'BROWSER_RESIZED'; isMobile: boolean; isTouch: boolean}
  | {type: 'COLLAPSE_FLYOUT'}
  | {type: 'DISMISS_DIALOG'}
  | {type: 'DISMISS_HOSTING_CHOOSER'}
  | {type: 'DOMAINS_RESOLVED'; availability: {[domainName: string]: boolean}}
  | {type: 'EXPAND_FLYOUT'; flyoutID: number}
  | {type: 'FAVORITES_LOADED'; favorites: Set<string>}
  | {type: 'FOCUSED_SEARCH_FIELD'}
  | {type: 'HIDE_SHORTCUTS_TIP'}
  | {type: 'KEYBOARD_SHORTCUT_USED'}
  | {type: 'PAGE_LOADED'; page: Page}
  | {type: 'RECEIVE_EXTENSION_SIMILARITIES'; similarities: Array<{item: string; search: string; similarity: number}>}
  | {type: 'RECEIVE_GEOGRAPHY'; country: string; city: string}
  | {type: 'RECEIVE_SEARCH_RESULTS'; phrase: string; tld: string; results: Domain[]}
  | {type: 'REQUEST_DONE'; phrase: string; tld: string}
  | {type: 'SELECT_DOMAIN'; domainType: ResultType; index: number}
  | {type: 'SERVER_ERROR'; phrase: string; tld: string; status: number | null}
  | {type: 'SET_EXTENSIONS_SORT'; sort: 'popular' | 'relevant'}
  | {type: 'SHOW_HOSTING_CHOOSER'}
  | {type: 'SHOW_SHORTCUTS_DIALOG'}
  | {type: 'SHOW_SHORTCUTS_TIP'}
  | {type: 'SOCIAL_USERNAME_AVAILABILITY'; service: SocialService; name: string; available: boolean}
  | {type: 'SWITCH_PAGE'; page: Page}
  | {type: 'TOGGLE_FAVORITE'; domain: Domain}
  | {type: 'UPDATE_PAGE_TITLE'; title: string}
  | {type: 'UPDATE_SEARCH_AND_SEND_REQUEST'; typed: string; phrase: string; tld: string}
  | {type: 'UPDATE_SEARCH'; typed: string};
