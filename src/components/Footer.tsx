/* Copyright 2005-present Instant Domain Search, Inc. */
import {Link} from 'gatsby';
import {css} from 'linaria';
import * as React from 'react';

import {event} from '../analytics';
import * as colors from '../colors';
import * as font from '../font';
import {desktop, mobile} from '../styles';

import IconFacebook from './IconFacebook';
import IconTwitter from './IconTwitter';
import SearchSelectorLink from './SearchSelectorLink';
import Text, {useLanguage} from './Text';

const styles = {
  icon: css`
    fill: ${colors.mediumDarkGray};
    width: 14px;
    height: 14px;
    margin-right: -1px;
    display: inline-block;
    vertical-align: text-bottom;
    a:hover > & {
      fill: ${colors.darkGray};
    }
  `,
};

function Footer() {
  const lang = useLanguage();
  return (
    <div
      id="footer"
      className={css`
        border-top: 1px solid ${colors.mediumGray};
        background: ${colors.extraLightGray};
        clear: both;
        font-size: ${font.xxs}px;
        padding-bottom: 16px;
        padding-top: 16px;
        ${mobile} {
          padding-bottom: 16px;
          padding-top: 16px;
        }
        a {
          color: ${colors.mediumDarkGray};
          display: inline-block;
          padding: 6px;
          &:hover {
            text-decoration: none;
            color: ${colors.darkGray};
          }
        }
      `}>
      <div
        className={css`
          margin-left: auto;
          margin-right: auto;
          ${desktop} {
            max-width: 800px;
            padding-left: 32px;
            padding-right: 32px;
          }
          ${mobile} {
            padding-left: 16px;
            padding-right: 16px;
          }
        `}>
        <div
          className={css`
            ${desktop} {
              display: none;
            }
            ${mobile} {
              line-height: 1.3em;
              margin-bottom: 1em;
              text-align: center;
              & > .current.homeLink {
                display: none;
              }
            }
          `}>
          <SearchSelectorLink to={lang === 'en' ? '/' : `/${lang}/`} className="homeLink">
            <Text id="home" />
          </SearchSelectorLink>
          <SearchSelectorLink to="/domain/extensions/">
            <Text id="popularTldsLong" />
          </SearchSelectorLink>
          <SearchSelectorLink to="/domain/generator/">
            <Text id="suggestionsLong" />
          </SearchSelectorLink>
          <SearchSelectorLink to="/domain/sale/">
            <Text id="forSaleLong" />
          </SearchSelectorLink>
          <SearchSelectorLink to="/domain/expired/">
            <Text id="expiredLong" />
          </SearchSelectorLink>
        </div>

        <div
          className={css`
            margin-left: -6px;
            ${desktop} {
              float: left;
              padding-bottom: 8px;
              padding-top: 8px;
            }
            ${mobile} {
              line-height: 1.3em;
              margin-bottom: 1em;
              text-align: center;
            }
          `}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => event('outbound', 'click', 'twitter_follow')}
            href="https://twitter.com/intent/follow?screen_name=InstantDomain">
            <IconTwitter className={styles.icon} />
            &nbsp;@InstantDomain
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => event('outbound', 'click', 'facebook_follow')}
            href="https://www.facebook.com/InstantDomainSearch">
            <IconFacebook className={styles.icon} />
            &nbsp;InstantDomainSearch
          </a>
        </div>

        <div
          className={css`
            margin-right: -6px;
            ${desktop} {
              float: right;
              padding-bottom: 8px;
              padding-top: 8px;
              text-align: right;
            }
            ${mobile} {
              display: block;
              line-height: 1.3em;
              margin-bottom: 1em;
              text-align: center;
            }
          `}>
          <Link to="/">English</Link>
          <Link to="/es/">Español</Link>
          <Link to="/fr/">Français</Link>
          <Link to="/pt/">Português</Link>
          <Link to="/ru/">Русский</Link>
          <Link to="/zh/">中文</Link>
        </div>

        <div
          className={css`
            clear: both;
            text-align: center;
            padding-top: 32px;
            padding-bottom: 32px;
            a {
              white-space: nowrap;
            }
          `}>
          <a title={process.env.GATSBY_BUILD_TIME} href="/">
            ©2005–{new Date().getFullYear()} Instant Domain Search, Inc.
          </a>
          {lang === 'en' && (
            <>
              <Link to="/about/">
                <Text id="about" />
              </Link>
              <Link to="/faq/">
                <Text id="faq" />
              </Link>
              <Link to="/articles/">
                <Text id="articles" />
              </Link>
            </>
          )}
          {lang === 'es' && (
            <>
              <Link to="/es/acerca/">
                <Text id="about" />
              </Link>
              <Link to="/es/pmf/">
                <Text id="faq" />
              </Link>
              <Link to="/es/articulos/">
                <Text id="articles" />
              </Link>
            </>
          )}
          {lang === 'fr' && (
            <>
              <Link to="/fr/apropos/">
                <Text id="about" />
              </Link>
              <Link to="/fr/faq/">
                <Text id="faq" />
              </Link>
              <Link to="/fr/articles/">
                <Text id="articles" />
              </Link>
            </>
          )}
          {lang === 'pt' && (
            <>
              <Link to="/pt/acerca/">
                <Text id="about" />
              </Link>
              <Link to="/pt/pf/">
                <Text id="faq" />
              </Link>
              <Link to="/pt/artigos/">
                <Text id="articles" />
              </Link>
            </>
          )}
          {lang === 'ru' && (
            <>
              <Link to="/ru/about/">
                <Text id="about" />
              </Link>
              <Link to="/ru/faq/">
                <Text id="faq" />
              </Link>
              <Link to="/ru/articles/">
                <Text id="articles" />
              </Link>
            </>
          )}
          {lang === 'zh' && (
            <>
              <Link to="/zh/about/">
                <Text id="about" />
              </Link>
              <Link to="/zh/faq/">
                <Text id="faq" />
              </Link>
              <Link to="/zh/articles/">
                <Text id="articles" />
              </Link>
            </>
          )}

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

        <div
          className={css`
            color: #cfcfcf;
            text-align: center;
            line-height: 1.6;
            margin-bottom: 24px;
            & > a {
              padding: 0;
            }
          `}>
          We use <a href="https://fasttext.cc/docs/en/pretrained-vectors.html">word vectors</a> published by P.
          Bojanowski*, E. Grave*, A. Joulin, T. Mikolov,
          <br />
          <a href="https://arxiv.org/abs/1607.04606">
            <em>Enriching Word Vectors with Subword Information</em>
          </a>{' '}
          to rank some search results.
        </div>
      </div>
      {/* facebook pixel */}
      <img
        alt="Facebook Tracking Pixel"
        src="https://www.facebook.com/tr?id=753828288367173&amp;ev=PageView"
        height="1"
        width="1"
      />
    </div>
  );
}

export default Footer;
