/* Copyright 2005-present Instant Domain Search, Inc. */

import {graphql, Link} from 'gatsby';
import * as React from 'react';

import Articles, {ArticlesData} from '../components/Articles';
import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import TwoColumnLayout from '../components/TwoColumnLayout';
import * as routes from '../routes';

export default ({data, ...props}: ArticlesData & PageProps) => (
  <Page
    {...props}
    description="How to search for a domain name for your new website: Learn how to pick a domain, name a website, and choose your domain extension."
    title="Domain Name Articles">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Domain name tips and tricks</h1>

          <p>
            Tips for searching for a domain name for your new website:{' '}
            <Link to="/articles/choosing-a-domain-name/">Learn how to pick a domain,</Link> name a website, and{' '}
            <Link to="/articles/history-of-top-level-domains/">choose your domain extension.</Link>
          </p>

          <h2>How we make it so fast</h2>

          <p>
            Instant Domain Search has evolved over the years, and as we find time we will try to explain{' '}
            <Link to="/about/">how it all works</Link>. <Link to="/articles/streaming-json-jsons/">Streaming JSON</Link>{' '}
            really helps make the site faster for mobile users. We’ve replaced our{' '}
            <Link to="/articles/build-your-own-cdn/">hacky CDN</Link> with more modern infrastructure that uses Google
            Compute Engine’s <a href="https://cloud.google.com/load-balancing/">global load balancer.</a>
          </p>
        </>
        <>
          <h4>Article index</h4>
          <Articles data={data} space />
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);

/* eslint-disable */
export const query = graphql`
  query($lang: String = "en") {
    ...ArticlesFragment
  }
`;
/* eslint-enable */
