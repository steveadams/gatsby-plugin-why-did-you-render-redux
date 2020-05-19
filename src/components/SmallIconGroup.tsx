/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as font from '../font';
import {desktop, mobile} from '../styles';

function SmallIconGroup({
  icon: Icon,
  children,
}: {
  icon: React.ExoticComponent<{className?: string}>;
  children: React.ReactNode;
}) {
  return (
    <div
      className={css`
        margin-bottom: 32px;
        display: flex;
        flex-wrap: wrap;
        ${desktop} {
          padding-right: 32px;
        }
      `}>
      <Icon
        className={css`
          min-width: 64px;
          flex: 0;
          ${desktop} {
            margin-right: 16px;
          }
          ${mobile} {
            margin-right: 8px;
          }
        `}
      />
      <p
        className={css`
          font-size: ${font.xs}px;
          margin-bottom: 0;
          flex: 1;
        `}>
        {children}
      </p>
    </div>
  );
}

export default React.memo(SmallIconGroup);
