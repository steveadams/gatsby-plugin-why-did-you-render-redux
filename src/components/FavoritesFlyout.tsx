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
import StarIcon from './StarIcon';

const styles = {
  flyout: css`
    left: calc(100% + 16px);
    display: flex;
    align-items: center;
    height: 48px;
  `,
  handle: css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 4px 4px 0;
    color: ${colors.mediumDarkGray};
    font-size: ${font.xs}px;
    text-align: center;
    border-radius: 18px;

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
    color: ${colors.darkGray};
    font-size: ${font.s}px;
    text-align: left;
  `,
  starOutlined: css`
    fill: transparent;
    stroke: ${colors.mediumGray};
  `,
  starFilled: css`
    fill: ${colors.yellow};
    stroke: none;
  `,
};

function FavoritesFlyout() {
  const count = useSelector(selectors.numberOfFavorites);

  const handle = (
    <div className={cx(styles.handle, count > 0 ? styles.expandedHandle : '')} id="favorites">
      {count > 0 && (
        <>
          <StarIcon className={count > 0 ? styles.starFilled : styles.starOutlined} />
          <span>{count}</span>
        </>
      )}
    </div>
  );

  return (
    <Flyout
      className={styles.flyout}
      collapsedHandle={handle}
      expandedHandle={handle}
      onExpand={actions.listOfFavoritesShown}
      position="absolute"
      width={280}>
      <DomainList category="favorites" className={styles.content} compact location={ClickLocation.Favorites} />
    </Flyout>
  );
}

export default React.memo(FavoritesFlyout);
