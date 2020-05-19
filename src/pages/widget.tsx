/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import TwoColumnLayout from '../components/TwoColumnLayout';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    title="Domain Name Widgets"
    description="Domain name widgets that you can install on your web site, or on your Mac’s Dashboard.">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Domain Name Widgets</h1>
          <p>
            You can install this free 336x280 pixel Instant Domain Search widget anywhere on your site by copying the
            following code and pasting it in your web page’s HTML:
          </p>
          <pre>
            <code>{`<iframe
  style="width: 336px; height: 280px; overflow: hidden;"
  frameborder="0"
  scrolling="no"
  src="https://instantdomainsearch.com/widget/liquid/">
  <a href="https://instantdomainsearch.com/">Instant Domain Search</a>
</iframe>`}</code>
          </pre>
        </>
        <></>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
