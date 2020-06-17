/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import * as font from '../font';
import {desktop, mobile} from '../styles';

const styles = {
  wrapper: css`
    font-weight: ${font.regular};
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;

    &:nth-child(2) {
      background-color: ${colors.lighterGray};
    }

    ${desktop} {
      padding: 80px 0;

      &:first-child {
        padding-top: 40px;
      }
    }

    ${mobile} {
      margin-top: 32px;
      padding: 40px 0 20px 0;

      &:first-child {
        padding-top: 20px;
      }
    }
  `,
  inside: css`
    max-width: 960px;
    margin: 0 auto;

    ${mobile} {
      padding: 0 24px;
    }
  `,
};

const WideLayout = ({children}: {children: React.ReactNode}) => (
  <div className={styles.wrapper}>
    <div className={styles.inside}>{children}</div>
  </div>
);

export default React.memo(WideLayout);
