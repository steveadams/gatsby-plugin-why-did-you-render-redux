/* Copyright 2005-present Instant Domain Search, Inc. */

import '../globalStyles';

import * as React from 'react';
import {Helmet} from 'react-helmet';
import {useSelector} from 'react-redux';

import * as colors from '../colors';
import config from '../config';
import * as selectors from '../selectors';
import * as Text from './Text';

function Page({
  title,
  description,
  location,
  pageContext: {lang = Text.languageCodes.english},
  children,
}: PageProps & {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const pageTitle = useSelector(selectors.pageTitle);
  title = pageTitle && 0 < pageTitle.length ? pageTitle : title;

  return (
    <Text.Provider value={lang}>
      <Helmet defer={false}>
        <html lang={lang} />

        <meta charSet="utf-8" />
        <meta content="IE=edge,chrome=1" httpEquiv="X-UA-Compatible" />
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* google translate kills react: https://github.com/facebook/react/issues/11538 */}
        <meta content="notranslate" name="google" />

        {/* ios smart banner */}
        {/* <meta name="apple-itunes-app" content="app-id=1068039352"> */}

        {/* https://caniuse.com/#feat=link-rel-preconnect */}
        <link href="https://www.google-analytics.com/" rel="preconnect" />
        <link href={`${config.appURL}`} rel="preconnect" />

        <link href="/favicon.svg?v=PYq02Qy8dr" rel="icon" type="image/svg+xml" />
        <link href="/favicon.ico?v=PYq02Qy8dr" rel="alternate icon" type="image/x-icon" />
        <link href="/apple-touch-icon.png?v=PYq02Qy8dr" rel="apple-touch-icon" sizes="180x180" />
        <link href="/favicon-32x32.png?v=PYq02Qy8dr" rel="alternate icon" sizes="32x32" type="image/png" />
        <link href="/favicon-16x16.png?v=PYq02Qy8dr" rel="alternate icon" sizes="16x16" type="image/png" />
        <link href="/site.webmanifest?v=PYq02Qy8dr" rel="manifest" />
        <link color={colors.darkGray} href="/safari-pinned-tab.svg?v=PYq02Qy8dr" rel="mask-icon" />
        <link href="/favicon.ico?v=PYq02Qy8dr" rel="shortcut icon" />
        <meta content={colors.darkGray} name="msapplication-TileColor" />
        <meta content={colors.lighterGray} name="theme-color" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={`https://instantdomainsearch.com${location.pathname}`} rel="canonical" />

        {/* in theory, this allows the browser to use IDS as one of the built-in search engines. */}
        <link
          href="https://instantdomainsearch.com/opensearchdescription.xml"
          rel="search"
          title="Domain Search"
          type="application/opensearchdescription+xml"
        />

        {/* iOS tags */}
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="Domain Search" name="apple-mobile-web-app-title" />

        {/* Twitter/Facebook tags */}
        <meta content="Instant Domain Search" property="og:site_name" />
        <meta content="website" property="og:type" />
        <meta content={`https://instantdomainsearch.com${location.pathname}`} property="og:url" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <link href="https://instantdomainsearch.com/image.png" rel="image_src" />
        <meta content="https://instantdomainsearch.com/image.png" property="og:image" />
        <meta content="image/png" property="og:image:type" />
        <meta content="2309869772" property="fb:app_id" />
        <meta content="@InstantDomain" property="twitter:site" />
        <meta content="summary" property="twitter:card" />
        <meta content={title} property="twitter:title" />
        <meta content={description} property="twitter:description" />
        <meta content="https://instantdomainsearch.com/image.png" property="twitter:image:src" />

        {/* <script src="//www.google-analytics.com/cx/api.js?experiment=Xee7fJz8RKKgYb1TsDrt0g" /> */}
        {/* https://developers.google.com/structured-data/slsb-overview */}
        <script type="application/ld+json">
          {`{
          "@context": "http://schema.org",
          "@type": "WebSite",
          "url": "https://instantdomainsearch.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://instantdomainsearch.com/#search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }`}
        </script>
      </Helmet>
      {children}
    </Text.Provider>
  );
}

export default React.memo(Page);
