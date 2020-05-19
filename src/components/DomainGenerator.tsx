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
    padding-top: 16px;
    padding-bottom: 16px;
    margin-left: -24px;
    margin-right: -24px;
  `,
  tldWrapper: css`
    width: 33.33%;
    float: left;
    box-sizing: border-box;
    ${desktop} {
      padding-left: 12px;
      padding-right: 12px;
    }
    ${mobile} {
      float: none;
      width: auto;
    }
  `,
};

function DomainGenerator() {
  const domains = useSelector(selectors.generatorResults);
  return (
    <div className="wrapper">
      <div className={styles.root}>
        {domains.map((domain, i) => (
          <div key={`${i}`} className={styles.tldWrapper}>
            <DomainView location={ClickLocation.GeneratorList} position={i} category="generator" domain={domain} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(DomainGenerator);
