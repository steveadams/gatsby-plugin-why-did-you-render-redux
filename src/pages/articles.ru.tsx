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
    title="Новости и советы о доменных именах"
    description="TiКак выбрать доменное имя для своего сайта: узнайте, как выбрать домен, как назвать сайт и как выбрать домен верхнего уровня.">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Новости и советы о доменных именах</h1>
          <p>
            Как выбрать доменное имя для своего сайта: узнайте, как выбрать домен, как назвать сайт и как выбрать домен
            верхнего уровня.
          </p>
        </>
        <>
          <h4>Индекс статей</h4>
          <Articles data={data} space />
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);

/* eslint-disable */
export const query = graphql`
  query($lang: String = "ru") {
    ...ArticlesFragment
  }
`;
/* eslint-enable */
