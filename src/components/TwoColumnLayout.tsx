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
          max-width: 800px;
          margin-right: auto;
          margin-left: auto;
          font-weight: ${font.regular};

          ${desktop} {
            display: flex;
            margin-top: 36px;
            margin-bottom: 24px;
            padding-right: 32px;
            padding-left: 32px;
          }
          ${mobile} {
            margin-top: 16px;
            margin-bottom: 48px;
            padding-right: 16px;
            padding-left: 16px;
          }
        `}>
        <div
          className={css`
            ${desktop} {
              width: 480px;
              margin-right: 72px;
              margin-bottom: 24px;
            }
            ${mobile} {
              margin: auto;
            }
          `}>
          {left}
        </div>
        <div
          className={css`
            padding-top: 5px;
            font-size: ${font.xs}px;

            ${desktop} {
              width: ${800 - 480 - 72}px;
            }

            ul {
              margin-top: 0;
            }

            li {
              margin-top: 0.3em;
              margin-bottom: 0.3em;
            }
          `}>
          {right}
        </div>
      </div>
    </>
  );
}

export default React.memo(TwoColumnLayout);
