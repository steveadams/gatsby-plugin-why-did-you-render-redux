/* Copyright 2005-present Instant Domain Search, Inc. */

import {languageCodes, LocaleKey} from '../Text';
import FloatingSearchSelector from './FloatingSelector';
import ListSearchSelector from './ListSelector';
import SearchSelectorLink from './SearchSelectorLink';

export enum SearchType {
  All = 'all',
  Extensions = 'extensions',
  // TODO: 'generator' should probably be updated to be more specific
  DomainNameGenerator = 'generator',
  Sale = 'sale',
  Expired = 'expired',
  BusinessNameGenerator = 'business-name',
}

export const searches: [SearchType, LocaleKey][] = [
  [SearchType.All, 'allDomains'],
  [SearchType.Extensions, 'popularTlds'],
  [SearchType.DomainNameGenerator, 'suggestionsLong'],
  [SearchType.Sale, 'forSale'],
  [SearchType.Expired, 'expired'],
  [SearchType.BusinessNameGenerator, 'businessNameGenerator'],
];

export function createSearchSelectorPath(type: SearchType, lang: LanguageCode) {
  // TODO: Consider just hardcoding the selectors, it's a little ugly now that /domains and /generators exist as selectors
  if (type === SearchType.All) {
    return lang === languageCodes.english ? '/' : `/${lang}/`;
  }

  if (type === SearchType.BusinessNameGenerator) {
    return `/generators/${type}/`;
  }

  return `/domain/${type}/`;
}

export {ListSearchSelector, FloatingSearchSelector, SearchSelectorLink};
