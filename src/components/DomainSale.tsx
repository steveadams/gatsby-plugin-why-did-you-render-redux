/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import {ClickLocation} from '../analytics';
import * as selectors from '../selectors';
import {desktop, mobile} from '../styles';
import DomainView from './DomainView';

const styles = {
  root: css`
    margin-right: -24px;
    margin-left: -24px;
    padding-top: 16px;
    padding-bottom: 16px;
  `,
  tldWrapper: css`
    float: left;
    box-sizing: border-box;
    width: 33.33%;

    ${desktop} {
      padding-right: 12px;
      padding-left: 12px;
    }

    ${mobile} {
      float: none;
      width: auto;
    }
  `,
};

function DomainSale() {
  const domains = useSelector(selectors.forSaleResults);

  return (
    <div className="wrapper">
      <div className={styles.root}>
        {domains.map((domain, i) => (
          <div className={styles.tldWrapper} key={`${i}`}>
            <DomainView category="forSale" domain={domain} location={ClickLocation.ForSaleList} position={i} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(DomainSale);
