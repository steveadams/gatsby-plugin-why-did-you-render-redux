/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';
import {Helmet} from 'react-helmet';
import {useSelector} from 'react-redux';

import '../globalStyles';
import * as selectors from '../selectors';

import * as Text from './Text';

function Page({
  title,
  description,
  location,
  pageContext: {lang = 'en'},
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
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* google translate kills react: https://github.com/facebook/react/issues/11538 */}
        <meta name="google" content="notranslate" />

        {/* ios smart banner */}
        {/* <meta name="apple-itunes-app" content="app-id=1068039352"> */}

        {/* https://caniuse.com/#feat=link-rel-preconnect */}
        <link rel="preconnect" href="https://www.google-analytics.com/" />
        <link rel="preconnect" href="https://app.instantdomainsearch.com/" />
        <link rel="preconnect" href="https://check.instantdomainsearch.com/" />

        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" type="image/svg+xml" href="/favicon.ico" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link rel="canonical" href={`https://instantdomainsearch.com${location.pathname}`} />

        {/* in theory, this allows the browser to use IDS as one of the built-in search engines. */}
        <link
          rel="search"
          type="application/opensearchdescription+xml"
          title="Domain Search"
          href="https://instantdomainsearch.com/opensearchdescription.xml"
        />

        {/* iOS tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-title" content="Domain Search" />
        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad-retina.png" />

        {/* Twitter/Facebook tags */}
        <meta property="og:site_name" content="Instant Domain Search" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://instantdomainsearch.com${location.pathname}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="image_src" href="https://instantdomainsearch.com/screenshot.png" />
        <meta property="og:image" content="https://instantdomainsearch.com/screenshot.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="fb:app_id" content="2309869772" />
        <meta property="twitter:site" content="@InstantDomain" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image:src" content="https://instantdomainsearch.com/screenshot.png" />

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
