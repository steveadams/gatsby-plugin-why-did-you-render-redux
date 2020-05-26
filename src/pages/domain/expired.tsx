/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css} from 'linaria';
import * as React from 'react';

import Column from '../../components/Column';
import Controller from '../../components/Controller';
import DomainExpired from '../../components/DomainExpired';
import IconAiSearch from '../../components/IconAiSearch';
import IconExpiredLarge from '../../components/IconExpiredLarge';
import IconGroup from '../../components/IconGroup';
import IconLock from '../../components/IconLock';
import Page from '../../components/Page';
import WideLayout from '../../components/WideLayout';
import * as font from '../../font';
import * as routes from '../../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    description="Instantly hundreds of thousands of expired domain names. Artificial intelligence powered search."
    title="Expired Domains">
    <Controller header="Expired Domains" page={routes.Page.Expired} results={<DomainExpired />}>
      <WideLayout>
        <IconGroup
          className={css`
            & > p {
              font-size: ${font.s}px;
            }
          `}
          headerTag="h1"
          icon={IconExpiredLarge}
          title="Expired domains – search expiring domains">
          Domain names expire when someone decides to stop renewing it. They may not be available to register
          immediately. We update the search index every night, so some names may already be renewed or re-registered.
          Some may become available in a few days. Some registrars, like GoDaddy, will let you buy a name that one of
          their own customers expire immediately. When you find a name you like, just click on it to try backordering
          the name! To search generated names, domain extensions, and domains for sale at the same time you can use our{' '}
          <Link to="/">domain name search</Link> tool. The domain name search results are sponsored. We earn money when
          you buy names and services from partners that we link to.
        </IconGroup>

        <Column>
          <IconGroup icon={IconAiSearch} title="AI-powered domain search">
            We use AI techniques to sift through the ten million domain names for sale that we index to show you names
            most relevant to your search. Let us know how we can improve search quality!
          </IconGroup>
        </Column>

        <Column>
          <IconGroup icon={IconLock} title="Private and secure">
            All traffic to the site is encrypted. Domain search results are not recorded. Press Return to register your
            domain name. We use Google Analytics, which uses cookies, to see how you use this website over time.
          </IconGroup>
        </Column>
      </WideLayout>
    </Controller>
  </Page>
);
