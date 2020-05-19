/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import * as font from '../font';

import Text, {useLanguage} from './Text';

function Header({children}: {children: React.ReactNode}) {
  const lang = useLanguage();

  return (
    <>
      <Link
        className={css`
          font-size: ${font.m}px;
          font-weight: ${font.medium};
          text-align: center;
          color: ${colors.mediumDarkGray};
          display: block;
          margin-top: 68px;
          &:hover {
            text-decoration: none;
          }
        `}
        to={lang === 'en' ? '/' : `/${lang}/`}>
        <Text id="logo" />
        <span style={{fontSize: '50%', fontWeight: 'normal', verticalAlign: '25%'}}>®</span>
      </Link>
      <h2
        className={css`
          font-weight: ${font.medium};
          color: ${colors.darkGray};
          font-size: ${font.xl}px;
          text-align: center;
          display: block;
          margin-bottom: -11px;
          &:hover {
            text-decoration: none;
          }
        `}>
        {children}
      </h2>
    </>
  );
}

export default React.memo(Header);
