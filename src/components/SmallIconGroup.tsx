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
        display: flex;
        flex-wrap: wrap;
        align-items: normal;
        margin-bottom: 32px;

        ${desktop} {
          padding-right: 32px;
        }
      `}>
      <Icon
        className={css`
          flex: 0;
          min-width: 36px;
          min-height: 36px;
          max-height: 36px;
          color: ${colors.white};

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
          flex: 1;
          margin-bottom: 0;
          font-size: ${font.xs}px;
        `}>
        {children}
      </p>
    </div>
  );
}

export default React.memo(SmallIconGroup);
