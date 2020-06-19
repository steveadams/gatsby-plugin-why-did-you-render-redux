/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import {event} from '../analytics';
import * as colors from '../colors';
import Alternates from '../components/Alternates';
import Column from '../components/Column';
import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Explainer from '../components/Explainer';
import IconGroup from '../components/IconGroup';
import Page from '../components/Page';
import SmallIconGroup from '../components/SmallIconGroup';
import WideLayout from '../components/WideLayout';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    description="Domain name search results appear instantly as you type. Lookup .com domain names and many other TLDs at once. See more options instantly."
    title="Domain Name Search">
    <Alternates />
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <WideLayout>
        <Explainer title="Domain name search">
          <p>
            Instant Domain Search <strong>shows domain name search results as you type.</strong> Our domain checker
            automatically generates available domain names, shows aftermarket domains for sale, and shows domain
            availability for popular domain extensions—instantly! <Link to="/wow">Great domain names</Link> are short,
            memorable, and easy to spell.
          </p>
          <p>
            Try not to use hyphens or numbers. A good place to start is what someone might type into a search engine to
            find your website. The domain name search results are sponsored. We earn money when you buy names and
            services from partners that we link to.
          </p>
        </Explainer>

        <Column>
          <IconGroup
            eventInfo="business_name_generator_h3"
            href="/?"
            icon="BizNameGenerator"
            title="Business Name Generator">
            Search .com and other domain extensions like .app, .dev, .store, and over a hundred more. We also search
            country-code domains (ccTLDs) like .ca, .co.uk, .us, and .in. The{' '}
            <Link onClick={() => event('internal', 'click', 'business_name_generator_p-small')} to="/?">
              domain name extensions
            </Link>{' '}
            page shows gTLD domain availability in a grid to make it easier to see many results at once.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup
            eventInfo="domain_generator_h3"
            href="/domain/generator/"
            icon="DomainGenerator"
            title="Domain name generator">
            Our{' '}
            <Link onClick={() => event('internal', 'click', 'domain_generator_p')} to="/domain/generator/">
              domain name generator
            </Link>{' '}
            adds thousands of popular beginnings and endings to your domain name search to find available names for
            registration. Use the generator to find website names for your new business or online store.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup eventInfo="domain_sale_h3" href="/domain/sale/" icon="Sale" title="Domains for sale">
            Search millions of domain names for sale. We work with large marketplaces like AfterNic, GoDaddy, and Sedo.
            AI-powered search helps find great names related to your domain name.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup
            eventInfo="domain_expired_h3"
            href="/domain/extensions/"
            icon="Extensions"
            title="Domain Extensions">
            Search .com and other domain extensions like .app, .dev, .store, and over a hundred more. We also search
            country-code domains (ccTLDs) like .ca, .co.uk, .us, and .in. The domain name extensions page shows gTLD
            domain availability in a grid to make it easier to see many results at once.
          </IconGroup>
        </Column>
      </WideLayout>

      <WideLayout>
        <Column>
          <IconGroup headerTag="h2" icon="Availability" title="Check domain availability">
            Instant Domain Search checks domain availability by doing a <span className="smallCaps">DNS</span> query to
            get domain name search results as fast as possible. <span className="smallCaps">WHOIS</span>{' '}
            <Link onClick={() => event('internal', 'click', 'domain_lookup_p-small')} to="/domain/lookup/">
              domain lookups
            </Link>{' '}
            are much slower than <span className="smallCaps">DNS</span> queries, but provide more information about who
            registered the name.
          </IconGroup>
        </Column>

        <Column>
          <SmallIconGroup icon={{name: 'DomainUnavailable', background: colors.red}}>
            <strong className="red">Red</strong> results mean that the name is taken. Do&nbsp;a&nbsp;
            <span className="smallCaps">WHOIS</span> lookup to see when the current registration expires.
          </SmallIconGroup>
          <SmallIconGroup icon={{name: 'DomainAvailable', background: colors.green}}>
            <strong className="green">Green</strong> results mean the domain name is available to register!
          </SmallIconGroup>
          <SmallIconGroup icon={{name: 'DomainForSale', background: colors.blue}}>
            <strong className="blue">Blue</strong> results show domain names for sale. Buy them from one of our auction
            partners.
          </SmallIconGroup>
        </Column>
      </WideLayout>

      <WideLayout>
        <Column>
          <IconGroup icon="Coupon" title="Domain name registration">
            We automatically apply a discount when you register your first{' '}
            <Link onClick={() => event('internal', 'click', 'domain_com_p-small')} to="/domain/extensions/.com/">
              .com
            </Link>{' '}
            at GoDaddy. Go Daddy accepts Visa, MasterCard, <span className="smallCaps">AMEX</span>, and PayPal.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup icon="Secure" title="Private and secure">
            All traffic to the site is encrypted. Domain name search results are not recorded. Press Return to register
            your domain name. We use Google Analytics, which uses cookies, to see how you use this website over time.
          </IconGroup>
        </Column>
      </WideLayout>
    </Controller>
  </Page>
);
