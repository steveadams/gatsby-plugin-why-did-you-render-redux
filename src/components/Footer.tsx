/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import {event} from '../analytics';
import * as colors from '../colors';
import * as font from '../font';
import * as selectors from '../selectors';
import {desktop, mobile} from '../styles';
import IconFacebook from './IconFacebook';
import IconTwitter from './IconTwitter';
import LanguageFlyout from './LanguageFlyout';
import Logo from './Logo';
import Text, {languageCodes, LocaleKey, useLanguage} from './Text';

const styles = {
  wrapper: css`
    clear: both;
    padding-top: 72px;
    font-size: ${font.xs}px;
    background-color: ${colors.darkGray};

    ${mobile} {
      padding-top: 40px;
    }
  `,
  content: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
    padding-right: 16px;
    padding-left: 16px;
    color: ${colors.mediumGray};

    a {
      display: inline-block;
      padding: 6px;
      color: ${colors.mediumGray};

      &:hover {
        color: ${colors.lighterGray};
        text-decoration: none;
      }
    }

    ${desktop} {
      max-width: 960px;

      &:first-child {
        align-self: flex-start;
      }

      &:last-child {
        align-self: flex-end;
      }
    }

    ${mobile} {
      flex-direction: column;
    }
  `,
  credit: css`
    margin-top: 48px;
    padding: 20px 16px;
    color: #cfcfcf;
    line-height: 1.6;
    text-align: center;
    background-color: ${colors.darkerGray};

    a {
      padding: 0;
      color: ${colors.blue};
    }

    a:hover {
      color: ${colors.hoverBlue};
    }

    ${mobile} {
      margin-top: 32px;
    }
  `,
  logo: css`
    color: ${colors.white};
    font-size: ${font.l}px;

    ${mobile} {
      order: 2;
      font-size: ${font.s}px;
    }
  `,
  navigation: css`
    ${mobile} {
      order: 1;
      margin-bottom: 32px;
    }
  `,
  copyright: css`
    margin-top: 4px;

    a {
      color: ${colors.mediumDarkGray};
    }
  `,
  language: css`
    position: relative;
    margin-top: 24px;
    margin-bottom: 24px;

    a {
      color: ${colors.blue};
    }

    a:hover {
      color: ${colors.hoverBlue};
    }

    ${desktop} {
      display: none;
    }
  `,
  social: css`
    ${desktop} {
      align-self: flex-end;
    }
  `,
  icons: css`
    ${desktop} {
      padding-top: 8px;
      padding-bottom: 8px;
    }

    ${mobile} {
      margin-bottom: 1em;
      line-height: 1.3em;
      text-align: center;
    }
  `,
  icon: css`
    display: inline-block;
    width: 14px;
    height: 14px;
    vertical-align: text-bottom;
  `,
};

function Footer() {
  const lang = useLanguage();
  const isMobile = useSelector(selectors.isMobile);

  return (
    <footer className={styles.wrapper} id="footer">
      <div className={styles.content}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <div className={styles.navigation}>
          {Object.keys(LocalizedPath).map(pathKey => (
            <Link key={pathKey} to={`${getLocalizedPath(lang, pathKey as LocalizedPath)}`}>
              <Text id={pathKey as LocaleKey} />
            </Link>
          ))}
          <a href="mailto:help@instantdomainsearch.com">
            <Text id="contact" />
          </a>
          <Link to="/terms/">
            <Text id="terms" />
          </Link>
          <Link to="/privacy/">
            <Text id="privacy" />
          </Link>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.copyright}>
          <a href="/" title={process.env.GATSBY_BUILD_TIME}>
            ©2005–{new Date().getFullYear()} Instant Domain Search, Inc.
          </a>
        </div>

        <div className={styles.language}>{isMobile ?? <LanguageFlyout />}</div>

        <div className={styles.social}>
          <a
            href="https://twitter.com/intent/follow?screen_name=InstantDomain"
            onClick={() => event('outbound', 'click', 'twitter_follow')}
            rel="noopener noreferrer"
            target="_blank"
            title="@InstantDomain">
            <IconTwitter className={styles.icon} />
          </a>

          <a
            href="https://www.facebook.com/InstantDomainSearch"
            onClick={() => event('outbound', 'click', 'facebook_follow')}
            rel="noopener noreferrer"
            target="_blank"
            title="InstantDomainSearch">
            <IconFacebook className={styles.icon} />
          </a>
        </div>
      </div>

      <div className={styles.credit}>
        We use <a href="https://fasttext.cc/docs/en/pretrained-vectors.html">word vectors</a> published by P.
        Bojanowski*, E. Grave*, A. Joulin, T. Mikolov,{' '}
        <a href="https://arxiv.org/abs/1607.04606">
          <em>Enriching Word Vectors with Subword Information</em>
        </a>
        <br />
        <a href="https://creativecommons.org/licenses/by-sa/3.0/">
          (Creative Commons Attribution-Share-Alike License 3.0)
        </a>{' '}
        to help rank some search results.
        {/* facebook pixel - placed here because it breaks the layout the least here if an adblocker shows the alt text */}
        <img
          alt="Facebook Tracking Pixel"
          height="1"
          src="https://www.facebook.com/tr?id=753828288367173&amp;ev=PageView"
          width="1"
        />
      </div>
    </footer>
  );
}

enum LocalizedPath {
  about = 'about',
  articles = 'articles',
  faq = 'faq',
}

const pathsToLocalize: {[key: string]: Record<LocalizedPath, string>} = {
  default: {
    about: 'about',
    articles: 'articles',
    faq: 'faq',
  },
  fr: {
    about: 'apropos',
    articles: 'articles',
    faq: 'faq',
  },
  es: {
    about: 'acerca',
    articles: 'articulos',
    faq: 'pmf',
  },
  pt: {
    about: 'acerca',
    articles: 'artigos',
    faq: 'pf',
  },
};

const getLocalizedPath = (code: LanguageCode, key: LocalizedPath) => {
  const head = code === languageCodes.english ? '/' : `/${code}`;
  const tail = pathsToLocalize[code] !== undefined ? pathsToLocalize[code][key] : pathsToLocalize.default[key];

  return `${head}/${tail}`;
};

export default Footer;
