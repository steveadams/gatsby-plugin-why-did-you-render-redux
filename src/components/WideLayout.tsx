/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as font from '../font';
import {desktop, mobile} from '../styles';

function WideLayout({children}: {children: React.ReactNode}) {
  return (
    <div
      className={css`
        font-weight: ${font.regular};
        margin-left: auto;
        margin-right: auto;
        max-width: 960px;
        ${desktop} {
          margin-top: 36px;
          margin-bottom: 24px;
          padding-left: 32px;
          padding-right: 32px;
        }
        ${mobile} {
          margin-top: 32px;
          margin-bottom: 48px;
          padding-left: 16px;
          padding-right: 16px;
        }
      `}>
      {children}
    </div>
  );
}

export default React.memo(WideLayout);
