/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import * as font from '../font';
import SearchSelectorLink from './SearchSelectorLink';
import Text, {useLanguage} from './Text';

const styles = {
  link: css`
    display: inline-block;
    font-size: ${font.xxs}px;
    padding: 12px;
    color: ${colors.mediumDarkGray};
    &:hover {
      text-decoration: none;
      color: ${colors.darkGray};
    }
    &.current {
      color: ${colors.darkGray};
      cursor: default;
    }
  `,
};

export function SearchSelector() {
  const lang = useLanguage();
  return (
    <div className="searchSelector">
      <SearchSelectorLink to={lang === 'en' ? '/' : `/${lang}/`} className={styles.link}>
        <Text id="all" />
      </SearchSelectorLink>
      <SearchSelectorLink to="/domain/extensions/" className={styles.link}>
        <Text id="popularTlds" />
      </SearchSelectorLink>
      <SearchSelectorLink to="/domain/generator/" className={styles.link}>
        <Text id="suggestions" />
      </SearchSelectorLink>
      <SearchSelectorLink to="/domain/sale/" className={styles.link}>
        <Text id="forSale" />
      </SearchSelectorLink>
      <SearchSelectorLink to="/domain/expired/" className={styles.link}>
        <Text id="expired" />
      </SearchSelectorLink>
    </div>
  );
}
