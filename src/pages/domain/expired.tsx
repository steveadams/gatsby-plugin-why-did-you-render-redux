/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import Column from '../../components/Column';
import Controller from '../../components/Controller';
import DomainExpired from '../../components/DomainExpired';
import Explainer from '../../components/Explainer';
import IconGroup from '../../components/IconGroup';
import Page from '../../components/Page';
import WideLayout from '../../components/WideLayout';
import * as routes from '../../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    description="Instantly hundreds of thousands of expired domain names. Artificial intelligence powered search."
    title="Expired Domains">
    <Controller page={routes.Page.Expired} results={<DomainExpired />}>
      <WideLayout>
        <Explainer title="Expired domains – search expiring domains">
          <p>
            Domain names expire when someone decides to stop renewing it. They may not be available to register
            immediately. We update the search index every night, so some names may already be renewed or re-registered.
            Some may become available in a few days. Some registrars, like GoDaddy, will let you buy a name that one of
            their own customers expire immediately.
          </p>
          <p>
            When you find a name you like, just click on it to try backordering the name! To search generated names,
            domain extensions, and domains for sale at the same time you can use{' '}
            <Link to="/">our domain name search tool.</Link> The domain name search results are sponsored. We earn money
            when you buy names and services from partners that we link to.
          </p>
        </Explainer>

        <Column>
          <IconGroup icon="AI" title="AI-powered domain search">
            We use AI techniques to sift through the ten million domain names for sale that we index to show you names
            most relevant to your search. Let us know how we can improve search quality!
          </IconGroup>
        </Column>

        <Column>
          <IconGroup icon="Lock" title="Private and secure">
            All traffic to the site is encrypted. Domain search results are not recorded. Press Return to register your
            domain name. We use Google Analytics, which uses cookies, to see how you use this website over time.
          </IconGroup>
        </Column>
      </WideLayout>
    </Controller>
  </Page>
);
