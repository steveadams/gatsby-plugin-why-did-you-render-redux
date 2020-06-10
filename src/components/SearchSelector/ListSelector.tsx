/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../../colors';
import * as font from '../../font';
import Text from '../Text';
import {SearchSelectorLink, SearchSelectorOption, SearchSelectorProps} from '.';

const styles = {
  list: css`
    margin: 0;
  `,
  listItem: css`
    display: inline-block;
    font-size: ${font.xs}px;
    padding: 16px 24px;
    padding-top: 0;
    margin: 0 12px;
    border-bottom: transparent 4px solid;
    color: black;
    text-decoration: none;

    &:hover,
    &.current {
      text-decoration: none;
      border-bottom: ${colors.darkGray} 4px solid;
    }

    &.current {
      font-weight: bold;
      color: ${colors.darkGray};
      cursor: default;
    }
  `,
};

const ListSelector = ({options}: SearchSelectorProps) => (
  <nav>
    {options.map(([searchType, localeKey]: SearchSelectorOption) => (
      <SearchSelectorLink className={styles.listItem} key={searchType} type={searchType}>
        <Text id={localeKey} />
      </SearchSelectorLink>
    ))}
  </nav>
);

export default ListSelector;
