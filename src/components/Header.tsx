/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as colors from '../colors';
import * as font from '../font';
import * as selectors from '../selectors';
import {mobile} from '../styles';
import IconLogo from './IconLogo';
import LanguageFlyout from './LanguageFlyout';
import Text, {languageCodes, useLanguage} from './Text';

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
        vertical-align: text-bottom;
      }
    `,
    link: css`
      display: flex;
      justify-content: center;
      color: ${colors.darkGray};

      &:hover {
        text-decoration: none;
      }
    `,
    title: css`
      line-height: 1;
      margin-bottom: 0;

      ${mobile} {
        font-size: ${font.l}px;
        /* TODO: Use spacing units */
        margin-top: 16px;
      }
    `,
    registered: css`
      font-size: ${font.xxs}px;
      font-weight: ${font.regular};
      align-self: center;
      /* Bump it up just a bit */
      position: relative;
      left: 1px;
      bottom: 3px;
    `,
    subTitle: css`
      font-size: ${font.xs}px;
      margin-top: 0;
      margin-bottom: 0;
    `,
  };

  const isMobile = useSelector(selectors.isMobile);

  return (
    <header className={styles.header}>
      {!isMobile && <LanguageFlyout />}

      <Link className={styles.link} to={lang === languageCodes.english ? '/' : `/${lang}/`}>
        <h1 className={styles.title}>
          <IconLogo className={styles.logoIcon} />
          Instant Domain Search
        </h1>
        <span className={styles.registered}>®</span>
      </Link>

      <p className={styles.subTitle}>
        <Text id="subTitle" />
      </p>
    </header>
  );
}

export default React.memo(Header);
