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
    description="Conseils pour choisir un nom de domaine pour votre nouveau site Web: Apprenez à choisir un domaine, à nommer un site Web et à choisir votre extension de domaine."
    title="Actualités sur les noms de domaines">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Actualités sur les noms de domaines, trucs et astuces</h1>
          <p>
            Conseils pour choisir un nom de domaine pour votre nouveau site : Apprenez à choisir un domaine, le nom d'un
            site web, et choisissez votre extension de domaine.
          </p>
        </>
        <>
          <h4>Index de l’article</h4>
          <Articles data={data} space />
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);

/* eslint-disable */
export const query = graphql`
  query($lang: String = "fr") {
    ...ArticlesFragment
  }
`;
/* eslint-enable */
