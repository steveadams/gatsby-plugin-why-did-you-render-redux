/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import {event} from '../analytics';
import Alternates from '../components/Alternates';
import Column from '../components/Column';
import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Explainer from '../components/Explainer';
import IconGroup from '../components/IconGroup';
import Page from '../components/Page';
import WideLayout from '../components/WideLayout';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    description="Domain name search results appear instantly as you type. Lookup .com domain names and many other TLDs at once. See more options instantly."
    title="Domain Name Search">
    <Alternates />
    <Controller page={routes.Page.Generators} results={<DomainResults showTlds />}>
      <WideLayout>
        <Explainer title="Name Generators">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet vulputate morbi sit condimentum
            pellentesque. Elementum ultrices volutpat phasellus congue mauris enim suspendisse. Tortor facilisis non
            phasellus tellus lorem non fusce aliquet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet vulputate morbi sit condimentum
            pellentesque. Elementum ultrices volutpat phasellus congue mauris enim suspendisse. Tortor facilisis non
            phasellus tellus lorem non fusce aliquet.
          </p>
        </Explainer>

        <Column>
          <IconGroup eventInfo="domain_generator_h3" href="/domain" icon="DomainNameGenerator" title="Domain Generator">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet vulputate morbi sit condimentum
            pellentesque. Elementum ultrices volutpat phasellus congue mauris enim suspendisse. Tortor facilisis non
            phasellus tellus.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup
            eventInfo="business_generator_h3"
            href="/generators/business-name"
            icon="BizNameGenerator"
            title="Business Name Generator">
            Our{' '}
            <Link onClick={() => event('internal', 'click', 'domain_generator_p')} to="/domain/generator/">
              domain name generator
            </Link>{' '}
            adds thousands of popular beginnings and endings to your domain name search to find available names for
            registration. Use the generator to find website names for your new business or online store.
          </IconGroup>
        </Column>
      </WideLayout>
    </Controller>
  </Page>
);
