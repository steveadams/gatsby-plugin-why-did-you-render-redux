/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {darkGray, lightGray, mediumDarkGray, mediumGray} from '../colors';
import {bold, regular} from '../font';
import {extensionsSort} from '../selectors';
import Flyout from './Flyout';
import SortIcon from './SortIcon';

const styles = {
  flyout: css`
    top: 9px;
    left: -8px;
  `,
  handle: css`
    display: block;
    border-radius: 12px;
    stroke: ${lightGray};
    &:hover {
      stroke: ${mediumGray};
    }
  `,
  expandedHandle: css`
    stroke: ${mediumDarkGray};
    &:hover {
      stroke: ${mediumDarkGray};
    }
  `,
  menu: css`
    margin: 0;
    padding: 6px 0 12px;
    font-weight: ${regular};
  `,
  label: css`
    color: ${mediumGray};
    display: block;
    margin: 0;
    padding: 6px 16px 0;
  `,
  item: css`
    color: ${mediumDarkGray};
    cursor: pointer;
    display: block;
    margin: 0;
    padding: 6px 16px;
    &:hover {
      background: ${lightGray};
    }
  `,
  selectedItem: css`
    color: ${darkGray};
    font-weight: ${bold};
  `,
};

function ExtensionsSortMenu() {
  const dispatch = useDispatch();
  const sort = useSelector(extensionsSort);

  const onPopularClick = React.useCallback(() => {
    dispatch({type: 'SET_EXTENSIONS_SORT', sort: 'popular'});
    dispatch({type: 'COLLAPSE_FLYOUT'});
  }, []);
  const onRelevantClick = React.useCallback(() => {
    dispatch({type: 'SET_EXTENSIONS_SORT', sort: 'relevant'});
    dispatch({type: 'COLLAPSE_FLYOUT'});
  }, []);

  const collapsedHandle = <SortIcon className={cx(styles.handle)} />;
  const expandedHandle = <SortIcon className={cx(styles.handle, styles.expandedHandle)} />;

  return (
    <Flyout
      className={styles.flyout}
      collapsedHandle={collapsedHandle}
      expandedHandle={expandedHandle}
      position="absolute"
      width={120}>
      <ul className={styles.menu}>
        <li className={styles.label}>Sort by:</li>
        <li className={cx(styles.item, sort === 'popular' && styles.selectedItem)} onClick={onPopularClick}>
          Popular
        </li>
        <li className={cx(styles.item, sort === 'relevant' && styles.selectedItem)} onClick={onRelevantClick}>
          Relevant
        </li>
      </ul>
    </Flyout>
  );
}

export default React.memo(ExtensionsSortMenu);
