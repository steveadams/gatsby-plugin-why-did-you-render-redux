/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import * as font from '../font';
import {mobile} from '../styles';
import Text, {languageCodes, useLanguage} from './Text';

function HomeHeader() {
  const lang = useLanguage();

  return (
    <Link
      className={css`
        font-weight: ${font.medium};
        color: ${colors.darkGray};
        font-size: ${font.xl}px;
        text-align: center;
        display: block;
        margin-top: 96px;
        &:hover {
          text-decoration: none;
        }
        ${mobile} {
          font-size: ${font.l}px;
          margin-top: 16px;
        }
      `}
      to={lang === languageCodes.english ? '/' : `/${lang}/`}>
      <Text id="logo" />
      <span style={{fontSize: '50%', fontWeight: 'normal', verticalAlign: '25%'}}>®</span>
    </Link>
  );
}

export default React.memo(HomeHeader);
