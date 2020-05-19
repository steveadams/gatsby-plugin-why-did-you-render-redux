/* Copyright 2005-present Instant Domain Search, Inc. */

import {graphql} from 'gatsby';
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
    title="Artigos de nome de domínio"
    description="Sugestões para escolher um nome de domínio para o seu novo sítio web: Saiba como escolher um domínio, dar o nome a um site e selecionar a sua extensão de domínio.">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Novidades Sobre Nomes de Domínios, Sugestões e Truques</h1>
          <p>
            Sugestões para escolher um nome de domínio para o seu novo sítio web: Saiba como escolher um domínio, dar o
            nome a um site e selecionar a sua extensão de domínio.
          </p>
        </>
        <>
          <h4>Índice de Artigos</h4>
          <Articles data={data} space />
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);

/* eslint-disable */
export const query = graphql`
  query($lang: String = "pt") {
    ...ArticlesFragment
  }
`;
/* eslint-enable */
