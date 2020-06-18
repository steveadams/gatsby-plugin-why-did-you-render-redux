/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../../colors';
import * as font from '../../font';
import Text from '../Text';
import {searches, SearchSelectorLink} from '.';

const styles = {
  list: css`
    margin: 0;
  `,
  listItem: css`
    display: inline-block;
    margin: 0 12px;
    padding: 16px 24px;
    padding-top: 0;
    color: black;
    font-size: ${font.xs}px;
    text-decoration: none;
    border-bottom: transparent 4px solid;

    &:hover,
    &.current {
      text-decoration: none;
      border-bottom: ${colors.darkGray} 4px solid;
    }

    &.current {
      color: ${colors.darkGray};
      font-weight: bold;
      cursor: default;
    }
  `,
};

const ListSelector = () => (
  <nav>
    {searches.map(([searchType, localeKey]) => (
      <SearchSelectorLink className={styles.listItem} key={searchType} type={searchType}>
        <Text id={localeKey} />
      </SearchSelectorLink>
    ))}
  </nav>
);

export default ListSelector;
