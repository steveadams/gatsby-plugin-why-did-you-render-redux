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
    description="Consejos para elegir un nombre de dominio para su nuevo sitio web: Aprenda cómo elegir un dominio, el nombre de un sitio web y la extensión de su dominio."
    title="Artículos de nombres de dominio">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Noticias, sugerencias y trucos sobre nombres de dominios</h1>

          <p>
            Consejos para elegir un nombre de dominio para su nuevo sitio web: Aprenda cómo elegir un dominio, el nombre
            de un sitio web y la extensión de su dominio.
          </p>
        </>
        <>
          <h4>Índice del artículo</h4>
          <Articles data={data} space />
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);

/* eslint-disable */
export const query = graphql`
  query($lang: String = "es") {
    ...ArticlesFragment
  }
`;
/* eslint-enable */
