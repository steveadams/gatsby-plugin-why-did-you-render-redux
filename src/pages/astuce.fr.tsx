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
    title="Widgets de nom de domaine"
    description="Widgets de nom de domaine widgets que vous pouvez installer sur votre site web, ou sur le tableau de bord de votre Mac.">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Widgets</h1>
          <p>
            Vous pouvez installer ce widget Recherche Instantanée de Noms de Domaine gratuit et instantané, au format
            336x280 pixels, n'importe où sur votre site en copiant le code ci-dessous et en le collant dans le code HTML
            de votre page web :
          </p>
          <pre>
            <code>{`<iframe
  style="width: 336px; height: 280px; overflow: hidden;"
  frameborder="0"
  scrolling="no"
  src="https://instantdomainsearch.com/widget/liquid/">
  <a href="https://instantdomainsearch.com/">Recherche Instantanée de Noms de Domaine</a>
</iframe>`}</code>
          </pre>
        </>
        <></>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
