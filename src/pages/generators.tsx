/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Alternates from '../components/Alternates';
import Column from '../components/Column';
import Controller from '../components/Controller';
import DomainGenerator from '../components/DomainGenerator';
import Explainer from '../components/Explainer';
import IconGroup from '../components/IconGroup';
import Page from '../components/Page';
import WideLayout from '../components/WideLayout';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page {...props} description="Generate a name domain name for your business." title="Name Generator">
    <Alternates />
    <Controller page={routes.Page.Generators} results={<DomainGenerator />}>
      <WideLayout>
        <Explainer title="Name Generator">
          <p>We are constantly working on new name generators. Stay tuned for more!</p>
        </Explainer>

        <Column>
          <IconGroup
            eventInfo="business_name_generator_h3"
            href="/generators/business-name/"
            icon="BizNameGenerator"
            title="Business name generator">
            The key to finding a great business name is to make it interesting. The business name generator will help
            you identify a list of names that make you stand out.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup
            eventInfo="domain_generator_h3"
            href="/domain/generator/"
            icon="DomainNameGenerator"
            title="Domain name generator">
            Our domain name generator adds thousands of popular beginnings and endings to your search. Find website
            names for your new business or online store.
          </IconGroup>
        </Column>
      </WideLayout>
    </Controller>
  </Page>
);
