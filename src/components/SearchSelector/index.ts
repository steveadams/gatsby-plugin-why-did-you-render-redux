/* Copyright 2005-present Instant Domain Search, Inc. */

import {languageCodes, LocaleKey} from '../Text';
import FloatingSearchSelector from './FloatingSelector';
import ListSearchSelector from './ListSelector';
import SearchSelectorLink from './SearchSelectorLink';

export enum SearchType {
  All = 'all',
  Extensions = 'extensions',
  Generator = 'generator',
  Sale = 'sale',
  Expired = 'expired',
}

export const searches: [SearchType, LocaleKey][] = [
  [SearchType.All, 'allDomains'],
  [SearchType.Extensions, 'popularTlds'],
  [SearchType.Generator, 'suggestionsLong'],
  [SearchType.Sale, 'forSale'],
  [SearchType.Expired, 'expired'],
];

export function createSearchSelectorPath(type: SearchType, lang: LanguageCode) {
  if (type === SearchType.All) {
    return lang === languageCodes.english ? '/' : `/${lang}/`;
  }

  return `/domain/${type}/`;
}

export {ListSearchSelector, FloatingSearchSelector, SearchSelectorLink};
