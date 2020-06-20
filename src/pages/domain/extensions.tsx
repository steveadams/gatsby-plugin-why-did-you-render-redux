/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import {event} from '../../analytics';
import Column from '../../components/Column';
import Controller from '../../components/Controller';
import DomainGrid from '../../components/DomainGrid';
import Explainer from '../../components/Explainer';
import IconGroup from '../../components/IconGroup';
import Page from '../../components/Page';
import WideLayout from '../../components/WideLayout';
import * as routes from '../../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    description="Search the list of new gTLD domain extensions instantly as you type. We support the best domain extensions that you can buy today."
    title="Domain Extensions">
    <Controller page={routes.Page.Gtlds} results={<DomainGrid />}>
      <WideLayout>
        <Explainer title="Domain extensions – search new gTLDs instantly">
          <p>
            New domain name extensions, or generic top-level domains—gTLDs—are coming online every day. We also support
            hundreds of country code TLDs as you type. We made a special interface to instantly search hundreds of
            domain names at once.{' '}
            <Link to="/domain/extensions/#search=full list of extensions">Click here to the full list.</Link>
          </p>
          <p>
            To search generated names, domain extensions, and domains for sale at the same time you can use our{' '}
            <Link to="/">domain name search tool.</Link> The domain name search results are sponsored. We earn money
            when you buy names and services from partners that we link to.
          </p>
        </Explainer>

        <Column>
          <IconGroup icon="Question" title="What is a gTLD?">
            A generic top-level domain (gTLD), is the last part of the domain, like{' '}
            <Link onClick={() => event('internal', 'click', 'domain_com_p-small')} to="/domain/extensions/.com/">
              .com
            </Link>
            . Since over 100 million .com domains are registered, <span className="smallCaps">ICANN</span> (the entity
            responsible for domain names) voted to allow more TLDs to be created. Hundreds of new gTLDs are now
            available.{' '}
          </IconGroup>
        </Column>

        <Column>
          <IconGroup icon="List" title="List of domain extensions">
            Hundreds of new endings, like .guru and .tips, are now available to register. We show the best TLDs first.{' '}
            <a
              href="/domain/extensions/#search=full%20list%20of%20extensions"
              onClick={() => event('interact', 'extensions', 'see the full list')}>
              See the full list.
            </a>{' '}
          </IconGroup>
        </Column>

        <Column>
          <IconGroup icon="Search" title="Search all domain endings at once">
            This page is optimized to help you search for them all at once. It shows results in a grid, with available
            extensions shown in green.{' '}
            <a href="/domain/extensions/#search=kitten" onClick={() => event('interact', 'extensions', 'kitten')}>
              Try it
            </a>
            .{' '}
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
