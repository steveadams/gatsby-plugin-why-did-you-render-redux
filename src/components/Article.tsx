/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import BackButton from '../components/BackButton';
import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import * as font from '../font';
import * as routes from '../routes';
import {desktop, mobile} from '../styles';

export default ({
  frontmatter: {title, description, headline, date},
  children,
  ...props
}: PageProps & {
  frontmatter: {title: string; headline: string; description: string; date: string};
  children: React.ReactNode;
}) => (
  <Page {...props} description={description} title={title}>
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <div
        className={css`
          font-weight: ${font.regular};
          margin-left: auto;
          margin-right: auto;
          max-width: 800px;
          ${desktop} {
            margin-top: 36px;
            margin-bottom: 24px;
            padding-left: 32px;
            padding-right: 32px;
          }
          ${mobile} {
            margin-top: 16px;
            margin-bottom: 48px;
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 16px;
          }
        `}
        itemScope
        itemType="http://schema.org/TechArticle">
        <BackButton />
        <h1>{headline}</h1>
        <div itemProp="articleBody">{children}</div>
        <em>
          Published{' '}
          <time dateTime={date} itemProp="datePublished">
            {new Date(date).toLocaleDateString()}
          </time>
        </em>
      </div>
    </Controller>
  </Page>
);
