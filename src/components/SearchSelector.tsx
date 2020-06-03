/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import * as font from '../font';
import SearchSelectorLink from './SearchSelectorLink';
import Text, {languageCodes, useLanguage} from './Text';

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
      <SearchSelectorLink className={styles.link} to={lang === languageCodes.english ? '/' : `/${lang}/`}>
        <Text id="all" />
      </SearchSelectorLink>
      <SearchSelectorLink className={styles.link} to="/domain/extensions/">
        <Text id="popularTlds" />
      </SearchSelectorLink>
      <SearchSelectorLink className={styles.link} to="/domain/generator/">
        <Text id="suggestions" />
      </SearchSelectorLink>
      <SearchSelectorLink className={styles.link} to="/domain/sale/">
        <Text id="forSale" />
      </SearchSelectorLink>
      <SearchSelectorLink className={styles.link} to="/domain/expired/">
        <Text id="expired" />
      </SearchSelectorLink>
    </div>
  );
}
