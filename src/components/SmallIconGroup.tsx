/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import Icon, {IconProps} from '../components/Icon';
import * as font from '../font';
import {desktop, mobile} from '../styles';

function SmallIconGroup({icon, children}: {icon: IconProps; children: React.ReactNode}) {
  return (
    <div
      className={css`
        margin-bottom: 32px;
        display: flex;
        flex-wrap: wrap;
        align-items: normal;
        ${desktop} {
          padding-right: 32px;
        }
      `}>
      <Icon
        className={css`
          color: ${colors.white};
          min-width: 36px;
          min-height: 36px;
          max-height: 36px;
          flex: 0;
          ${desktop} {
            margin-right: 16px;
          }
          ${mobile} {
            margin-right: 8px;
          }
        `}
        round
        {...icon}
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
