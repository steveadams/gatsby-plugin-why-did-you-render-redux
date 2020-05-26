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
    description="Widgets para nombres de dominio que puede instalar en su sitio web o en el Dashboard de su Mac."
    title="Widgets para nombres de dominio">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Widgets</h1>
          <p>
            Puede instalar este widget gratuito de 336 x 280 píxeles de Búsqueda de Dominio Instantánea en cualquier
            lugar de su sitio, copiando el siguiente código y pegándolo en el HTML de su página web:
          </p>
          <pre>
            <code>{`<iframe
  style="width: 336px; height: 280px; overflow: hidden;"
  frameborder="0"
  scrolling="no"
  src="https://instantdomainsearch.com/widget/liquid/">
  <a href="https://instantdomainsearch.com/">Búsqueda de Dominio Instantánea</a>
</iframe>`}</code>
          </pre>
        </>
        <></>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
