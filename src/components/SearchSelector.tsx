/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import * as font from '../font';
import {mobile} from '../styles';
import SearchSelectorLink from './SearchSelectorLink';
import Text, {LocaleKey, useLanguage} from './Text';

const styles = {
  searchSelector: css`
    margin-top: 40px;

    ${mobile} {
      display: none;
    }
  `,
  link: css`
    display: inline-block;
    font-size: ${font.xs}px;
    padding: 16px 24px;
    margin: 0 12px;
    color: black;
    border-bottom: transparent 4px solid;

    &:hover,
    &.current {
      border-bottom: ${colors.darkGray} 4px solid;
    }

    &:hover {
      text-decoration: none;
    }

    &.current {
      font-weight: bold;
      color: ${colors.darkGray};
      cursor: default;
    }
  `,
};

const searchSelector = (to: string, id: LocaleKey) => (
  <SearchSelectorLink className={styles.link} to={to}>
    <Text id={id} />
  </SearchSelectorLink>
);

export function SearchSelector() {
  const lang = useLanguage();

  return (
    <div className={styles.searchSelector}>
      {searchSelector(lang === 'en' ? '/' : `/${lang}/`, 'allDomains')}
      {searchSelector('/domain/extensions/', 'popularTlds')}
      {searchSelector('/domain/generator/', 'suggestionsLong')}
      {searchSelector('/domain/sale/', 'forSale')}
      {searchSelector('/domain/expired/', 'expired')}
    </div>
  );
}
