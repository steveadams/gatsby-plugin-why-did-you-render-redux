/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import * as font from '../font';
import {mobile} from '../styles';
import IconLogo from './IconLogo';
import LanguageFlyout from './LanguageFlyout';
import Text, {useLanguage} from './Text';

function Header() {
  const lang = useLanguage();

  const styles = {
    header: css`
      position: relative;
      width: calc(100% - 32px);
      max-width: 960px;
      margin: 0 auto;
      padding: 64px 16px 24px;

      background-color: ${colors.extraLightGray};
      text-align: center;

      ${mobile} {
        padding-top: 40px;
      }
    `,
    logoIcon: css`
      &.icon {
        /* TODO: USE VARIABLE-BASED UNITS */
        margin-right: 8px;
        width: 0.75em;
        height: 0.75em;
      }
    `,
    link: css`
      &:hover {
        text-decoration: none;
      }
    `,
    title: css`
      color: ${colors.darkGray};
      display: inline-block;

      ${mobile} {
        font-size: ${font.l}px;
        /* TODO: Use spacing units */
        margin-top: 16px;
      }
    `,
    registered: css`
      display: inline-block;
      font-size: ${font.xxs}px;
      font-weight: ${font.regular};
      vertical-align: 100%;
    `,
    subTitle: css`
      margin-bottom: 0;
    `,
  };

  return (
    <header className={styles.header}>
      <LanguageFlyout />

      <Link className={styles.link} to={lang === 'en' ? '/' : `/${lang}/`}>
        <h1 className={styles.title}>
          <IconLogo className={styles.logoIcon} />
          <Text id="logo" />
        </h1>
      </Link>

      <span className={styles.registered}>®</span>
      <p className={styles.subTitle}>
        <small>
          <Text id="subTitle" />
        </small>
      </p>
    </header>
  );
}

export default React.memo(Header);
