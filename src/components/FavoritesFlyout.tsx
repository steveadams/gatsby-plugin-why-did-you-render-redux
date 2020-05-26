/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as actions from '../actions';
import {ClickLocation} from '../analytics';
import * as colors from '../colors';
import * as font from '../font';
import * as selectors from '../selectors';
import DomainList from './DomainList';
import Flyout from './Flyout';
import {StarIcon} from './icons';

const styles = {
  flyout: css`
    top: 11px;
    left: calc(100% - 32px);
    margin-left: 8px;
  `,
  handle: css`
    display: block;
    white-space: nowrap;
    padding-right: 2px;
    font-size: ${font.xxs}px;
    color: ${colors.mediumDarkGray};
    line-height: 28px;
    min-width: 26px;
    border-radius: 18px;
    text-align: center;
    &:hover {
      text-decoration: none;
      background: ${colors.lightGray};
    }
  `,
  expandedHandle: css`
    background: ${colors.lightGray};
  `,
  content: css`
    padding: 16px 24px 16px 40px;
    text-align: left;
    font-size: ${font.s}px;
    color: ${colors.darkGray};
  `,
  star: css`
    display: inline-block;
    vertical-align: -7px;
    margin-left: -4px;
    margin-right: -4px;
    stroke: ${colors.yellow};
    fill: ${colors.yellow};
  `,
};

function FavoritesFlyout() {
  const count = useSelector(selectors.numberOfFavorites);

  const collapsedHandle = (
    <div className={styles.handle} id="favorites">
      {count > 0 && <StarIcon className={styles.star} />}
      {count || ''}
    </div>
  );

  const expandedHandle = (
    <div className={cx(styles.handle, styles.expandedHandle)} id="favorites">
      {count > 0 && <StarIcon className={styles.star} />}
      {count || ''}
    </div>
  );

  return (
    <Flyout
      className={styles.flyout}
      collapsedHandle={collapsedHandle}
      expandedHandle={expandedHandle}
      onExpand={actions.listOfFavoritesShown}
      position="absolute"
      width={280}>
      <DomainList category="favorites" className={styles.content} compact location={ClickLocation.Favorites} />
    </Flyout>
  );
}

export default React.memo(FavoritesFlyout);
