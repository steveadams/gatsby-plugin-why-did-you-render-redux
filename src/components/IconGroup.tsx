/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css, cx} from 'linaria';
import * as React from 'react';

import {event} from '../analytics';
import * as colors from '../colors';
import * as font from '../font';
import {desktop, mobile} from '../styles';

interface IconGroupProps {
  icon: React.ExoticComponent<{className?: string}>;
  title: string;
  href?: string;
  eventInfo?: string;
  headerTag?: 'h1' | 'h2' | 'h3';
  className?: string;
  children: React.ReactNode;
}

function IconGroup({
  icon: Icon,
  title,
  children,
  href,
  eventInfo,
  headerTag: HeaderTag = 'h3',
  className,
}: IconGroupProps) {
  return (
    <div
      className={cx(
        className,
        css`
          margin-bottom: 32px;
          ${desktop} {
            padding-right: 32px;
            display: grid;
            grid-column-gap: 16px;
            grid-template-areas:
              'icon title'
              'icon text';
          }
          ${mobile} {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
          }
        `,
      )}>
      <Icon
        className={css`
          min-width: 64px;
          ${desktop} {
            grid-area: icon;
          }
          ${mobile} {
            flex: 0;
            margin-right: 8px;
          }
        `}
      />
      <HeaderTag
        className={css`
          margin-bottom: 0;
          ${desktop} {
            grid-area: title;
            align-self: center;
          }
          ${mobile} {
            flex: 1;
          }
        `}>
        {!href && title}
        {href && (
          <Link
            className={css`
              color: ${colors.darkGray};
            `}
            onClick={() => event('internal', 'click', eventInfo)}
            to={href}>
            {title}
          </Link>
        )}
      </HeaderTag>
      <p
        className={css`
          font-size: ${font.xs}px;
          margin-bottom: 0;
          ${desktop} {
            grid-area: text;
          }
          ${mobile} {
            margin-top: 8px;
          }
        `}>
        {children}
      </p>
    </div>
  );
}

export default React.memo(IconGroup);
