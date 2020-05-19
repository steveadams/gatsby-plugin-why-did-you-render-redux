/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as font from '../font';
import {desktop, mobile} from '../styles';

function TwoColumnLayout({children: [left, right]}: {children: [React.ReactNode, React.ReactNode]}) {
  return (
    <>
      <div
        className={css`
          font-weight: ${font.regular};
          margin-left: auto;
          margin-right: auto;
          max-width: 800px;
          ${desktop} {
            margin-top: 36px;
            margin-bottom: 24px;
            padding-left: 32px;
            padding-right: 32px;
            display: flex;
          }
          ${mobile} {
            margin-top: 16px;
            margin-bottom: 48px;
            padding-left: 16px;
            padding-right: 16px;
          }
        `}>
        <div
          className={css`
            ${desktop} {
              margin-bottom: 24px;
              margin-right: 72px;
              width: 480px;
            }
            ${mobile} {
              margin: auto;
            }
          `}>
          {left}
        </div>
        <div
          className={css`
            font-size: ${font.xs}px;
            padding-top: 5px;
            ${desktop} {
              width: ${800 - 480 - 72}px;
            }
            ul {
              margin-top: 0;
            }
            li {
              margin-bottom: 0.3em;
              margin-top: 0.3em;
            }
          `}>
          {right}
        </div>
      </div>
    </>
  );
}

export default React.memo(TwoColumnLayout);
