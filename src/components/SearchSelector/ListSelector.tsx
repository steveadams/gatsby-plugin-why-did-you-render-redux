/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../../colors';
import * as font from '../../font';
import Text from '../Text';
import {searches, SearchSelectorLink} from '.';

// Prevent the selectors from wrapping as the window scales down
const wrappingBreakpoint = '@media only screen and (max-width: 960px)';

const styles = {
  nav: css`
    display: flex;
    justify-content: center;
    margin: 0px;
  `,
  listItem: css`
    display: inline-block;
    margin: 0 12px;
    padding: 0px 24px 16px 24px;
    color: black;
    font-size: ${font.xs}px;
    text-decoration: none;
    border-bottom: transparent 4px solid;

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }

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

    ${wrappingBreakpoint} {
      margin: 0 6px;
      padding: 0px 12px 16px 12px;
    }
  `,
};

const ListSearchSelector = () => (
  <nav className={styles.nav}>
    {searches.map(([searchType, localeKey]) => (
      <SearchSelectorLink className={styles.listItem} key={searchType} type={searchType}>
        <Text id={localeKey} /> {localeKey === 'businessNameGenerator'}
      </SearchSelectorLink>
    ))}
  </nav>
);

export default ListSearchSelector;
