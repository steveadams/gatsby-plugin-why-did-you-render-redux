/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as colors from '../colors';
import * as font from '../font';
import * as selectors from '../selectors';
import {mobile} from '../styles';
import LanguageFlyout from './LanguageFlyout';
import Logo from './Logo';
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
    flyout: css`
      top: 40px;
      right: 0;
      font-size: 12px;
    `,
    logo: css`
      color: ${colors.darkGray};
      font-size: ${font.xl}px;

      ${mobile} {
        font-size: ${font.l}px;
      }
    `,
    link: css`
      &:hover {
        text-decoration: none;
      }
    `,
    subTitle: css`
      margin-top: 0;
      margin-bottom: 0;
      font-size: ${font.xs}px;

      ${mobile} {
        font-size: ${font.xxs}px;
      }
    `,
  };

  const isMobile = useSelector(selectors.isMobile);

  return (
    <header className={styles.header}>
      {!isMobile && <LanguageFlyout className={styles.flyout} position={'absolute'} />}

      <Link className={styles.link} to={lang === languageCodes.english ? '/' : `/${lang}/`}>
        <Logo className={styles.logo} />
      </Link>

      <p className={styles.subTitle}>
        <Text id="subTitle" />
      </p>
    </header>
  );
}

export default React.memo(Header);
