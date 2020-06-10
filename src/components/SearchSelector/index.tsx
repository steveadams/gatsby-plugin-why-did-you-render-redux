/* Copyright 2005-present Instant Domain Search, Inc. */

import {Location} from '@reach/router';
import {Link} from 'gatsby';
import {cx} from 'linaria';
import React from 'react';
import {useSelector} from 'react-redux';

import * as analytics from '../../analytics';
import * as selectors from '../../selectors';
import {languageCodes, LocaleKey, useLanguage} from '../Text';
import FloatingSelector from './FloatingSelector';
import ListSelector from './ListSelector';

export type SearchSelectorType = 'all' | 'extensions' | 'generator' | 'sale' | 'expired';
export type SearchSelectorOption = [SearchSelectorType, LocaleKey];

export type SearchSelectorProps = {
  options: SearchSelectorOption[];
} & React.HTMLAttributes<HTMLElement>;

export type SearchSelectorOptionProps = {
  eventID?: string;
  type: SearchSelectorType;
} & React.HTMLAttributes<HTMLElement>;

export function createSearchSelectorPath(type: SearchSelectorType, lang: LanguageCode) {
  if (type === 'all') {
    return lang === languageCodes.english ? '/' : `/${lang}/`;
  }

  return `/domain/${type}/`;
}

export function SearchSelectorLink({children, type, className}: SearchSelectorOptionProps) {
  const lang = useLanguage();
  const canonicalUrl = useSelector(selectors.canonicalUrl);
  const path = createSearchSelectorPath(type, lang);

  const onClick = React.useCallback(() => {
    analytics.event('interact', 'search_results_switcher_desktop', path);
  }, [path]);

  return (
    <Location>
      {({location}) => (
        <Link
          className={cx(className, path === location.pathname ? 'current' : '')}
          onClick={onClick}
          to={`${path}${canonicalUrl}`}>
          {children}
        </Link>
      )}
    </Location>
  );
}

const options: SearchSelectorOption[] = [
  ['all', 'allDomains'],
  ['extensions', 'popularTlds'],
  ['generator', 'suggestionsLong'],
  ['sale', 'forSale'],
  ['expired', 'expired'],
];

export default function SearchSelector({floating}: {floating: boolean}) {
  const Selector = floating ? FloatingSelector : ListSelector;

  return <Selector options={options} />;
}
