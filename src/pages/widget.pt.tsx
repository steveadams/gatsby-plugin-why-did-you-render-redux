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
    description="Widgets para nome de domínio que pode instalar no seu sítio web, ou no Painel do seu Mac."
    title="Widgets para Nome de Domínio">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Widgets para Nome de Domínio</h1>
          <p>
            Pode instalar este widget gratuito com 336x280 pixeis da Pesquisa de Domínio Instantânea em qualquer parte
            do seu sítio web, copiando o código seguinte e colando-o no HTML da sua página web:{' '}
          </p>
          <pre>
            <code>{`<iframe
  style="width: 336px; height: 280px; overflow: hidden;"
  frameborder="0"
  scrolling="no"
  src="https://instantdomainsearch.com/widget/liquid/">
  <a href="https://instantdomainsearch.com/">Pesquisa de Domínio Instantânea</a>
</iframe>`}</code>
          </pre>
        </>
        <></>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
