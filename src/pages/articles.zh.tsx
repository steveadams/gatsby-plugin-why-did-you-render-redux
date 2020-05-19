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
    title="域名新闻，建议和窍门"
    description="有关为你的新网站选择域名的建议：了解怎样选择域名，命名网站，以及选择你的域名扩展。">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>域名新闻，建议和窍门</h1>
          <p>有关为你的新网站选择域名的建议：了解怎样选择域名，命名网站，以及选择你的域名扩展。</p>
        </>
        <>
          <h4>文章索引</h4>
          <Articles data={data} space />
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);

/* eslint-disable */
export const query = graphql`
  query($lang: String = "zh") {
    ...ArticlesFragment
  }
`;
/* eslint-enable */
