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
      text-align: center;
      background-color: ${colors.extraLightGray};

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
      &:hover {
        text-decoration: none;
      }
    `,
    title: css`
      display: flex;
      justify-content: center;
      margin-bottom: 0;
      color: ${colors.darkGray};
      font-weight: ${font.bold};
      font-size: ${font.xl}px;
      line-height: 1;

      ${mobile} {
        /* TODO: Use spacing units */
        margin-top: 16px;
        font-size: ${font.l}px;
      }
    `,
    registered: css`
      align-self: center;
      font-weight: ${font.regular};
      font-size: ${font.xxs}px;
    `,
    subTitle: css`
      margin-top: 0;
      margin-bottom: 0;
      font-size: ${font.xs}px;
    `,
  };

  const isMobile = useSelector(selectors.isMobile);

  return (
    <header className={styles.header}>
      {!isMobile && <LanguageFlyout />}

      <Link className={styles.link} to={lang === languageCodes.english ? '/' : `/${lang}/`}>
        <span className={styles.title}>
          <IconLogo className={styles.logoIcon} />
          Instant Domain Search
          <span className={styles.registered}>®</span>
        </span>
      </Link>

      <p className={styles.subTitle}>
        <Text id="subTitle" />
      </p>
    </header>
  );
}

export default React.memo(Header);
