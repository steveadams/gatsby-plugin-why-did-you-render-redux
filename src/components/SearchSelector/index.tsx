/* Copyright 2005-present Instant Domain Search, Inc. */

import React from 'react';

import {languageCodes, LocaleKey} from '../Text';
import FloatingSelector from './FloatingSelector';
import ListSelector from './ListSelector';
import SearchSelectorLink from './SearchSelectorLink';

export type SearchType = 'all' | 'extensions' | 'generator' | 'sale' | 'expired';

export const searches: [SearchType, LocaleKey][] = [
  ['all', 'allDomains'],
  ['extensions', 'popularTlds'],
  ['generator', 'suggestionsLong'],
  ['sale', 'forSale'],
  ['expired', 'expired'],
];

export function createSearchSelectorPath(type: SearchType, lang: LanguageCode) {
  if (type === 'all') {
    return lang === languageCodes.english ? '/' : `/${lang}/`;
  }

  return `/domain/${type}/`;
}

export {SearchSelectorLink};

export default function SearchSelector({mobile}: {mobile: boolean}) {
  return mobile ? <FloatingSelector /> : <ListSelector />;
}
