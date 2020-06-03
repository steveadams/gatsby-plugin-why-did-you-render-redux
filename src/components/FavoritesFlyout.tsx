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
    display: flex;
    align-items: center;
    height: 48px;
    left: calc(100% + 16px);
  `,
  handle: css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.mediumDarkGray};
    padding: 4px 4px 4px 0;
    border-radius: 18px;
    text-align: center;
    font-size: ${font.xs}px;

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
  starOutlined: css`
    stroke: ${colors.mediumGray};
    fill: transparent;
  `,
  starFilled: css`
    stroke: none;
    fill: ${colors.yellow};
  `,
};

function FavoritesFlyout() {
  const count = useSelector(selectors.numberOfFavorites);

  const star = <StarIcon className={count > 0 ? styles.starFilled : styles.starOutlined} />;

  const collapsedHandle = (
    <div className={styles.handle} id="favorites">
      {count > 0 && (
        <>
          {star}
          <span>{count}</span>
        </>
      )}
    </div>
  );

  const expandedHandle = (
    <div className={cx(styles.handle, styles.expandedHandle)} id="favorites">
      {star}
      <span>{count}</span>
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
