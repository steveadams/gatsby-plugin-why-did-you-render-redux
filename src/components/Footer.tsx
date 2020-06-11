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
import {SearchSelectorLink, SearchType} from './SearchSelector';
import Text, {languageCodes, localizedLanguageNames, useLanguage} from './Text';

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
      `}
      id="footer">
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
          <SearchSelectorLink className="homeLink" type={SearchType.All}>
            <Text id="home" />
          </SearchSelectorLink>
          <SearchSelectorLink type={SearchType.Extensions}>
            <Text id="popularTldsLong" />
          </SearchSelectorLink>
          <SearchSelectorLink type={SearchType.Generator}>
            <Text id="suggestionsLong" />
          </SearchSelectorLink>
          <SearchSelectorLink type={SearchType.Sale}>
            <Text id="forSaleLong" />
          </SearchSelectorLink>
          <SearchSelectorLink type={SearchType.Expired}>
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
            href="https://twitter.com/intent/follow?screen_name=InstantDomain"
            onClick={() => event('outbound', 'click', 'twitter_follow')}
            rel="noopener noreferrer"
            target="_blank">
            <IconTwitter className={styles.icon} />
            &nbsp;@InstantDomain
          </a>
          <a
            href="https://www.facebook.com/InstantDomainSearch"
            onClick={() => event('outbound', 'click', 'facebook_follow')}
            rel="noopener noreferrer"
            target="_blank">
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
          {Object.entries(localizedLanguageNames).map(([code, lang]) => (
            <Link key={code} to={code !== languageCodes.english ? `/${code}/` : '/'}>
              {lang}
            </Link>
          ))}
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
          <a href="/" title={process.env.GATSBY_BUILD_TIME}>
            ©2005–{new Date().getFullYear()} Instant Domain Search, Inc.
          </a>
          {lang === languageCodes.english && (
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
          {lang === languageCodes.spanish && (
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
          {lang === languageCodes.french && (
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
          {lang === languageCodes.portuguese && (
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
          {lang === languageCodes.russian && (
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
          {lang === languageCodes.chinese && (
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
          Bojanowski*, E. Grave*, A. Joulin, T. Mikolov,{' '}
          <a href="https://arxiv.org/abs/1607.04606">
            <em>Enriching Word Vectors with Subword Information</em>
          </a>{' '}
          <a href="https://creativecommons.org/licenses/by-sa/3.0/">
            (Creative Commons Attribution-Share-Alike License 3.0)
          </a>{' '}
          to help rank some search results. <br />
        </div>
      </div>
      {/* facebook pixel */}
      <img
        alt="Facebook Tracking Pixel"
        height="1"
        src="https://www.facebook.com/tr?id=753828288367173&amp;ev=PageView"
        width="1"
      />
    </div>
  );
}

export default Footer;
