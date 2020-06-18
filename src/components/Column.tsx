/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import {desktop} from '../styles';

function Column({children}: {children: React.ReactNode}) {
  return (
    <div
      className={css`
        ${desktop} {
          display: inline-block;
          width: 50%;
          vertical-align: top;
        }
      `}>
      {children}
    </div>
  );
}

export default React.memo(Column);
