/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css} from 'linaria';
import * as React from 'react';

import {event} from '../analytics';
import Alternates from '../components/Alternates';
import Column from '../components/Column';
import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import IconBlue from '../components/IconBlue';
import IconCoupon from '../components/IconCoupon';
import IconExpired from '../components/IconExpired';
import IconExtensions from '../components/IconExtensions';
import IconForSale from '../components/IconForSale';
import IconGenerator from '../components/IconGenerator';
import IconGreen from '../components/IconGreen';
import IconGroup from '../components/IconGroup';
import IconLock from '../components/IconLock';
import IconRed from '../components/IconRed';
import IconSearch from '../components/IconSearch';
import IconSemaphore from '../components/IconSemaphore';
import Page from '../components/Page';
import SmallIconGroup from '../components/SmallIconGroup';
import WideLayout from '../components/WideLayout';
import * as font from '../font';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    title="Domain Name Search"
    description="Domain name search results appear instantly as you type. $4.99 domains for new .com customers. Check the availability of hundreds of domain names at once.">
    <Alternates />
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <WideLayout>
        <IconGroup
          icon={IconSearch}
          title="Domain name search"
          headerTag="h1"
          className={css`
            & > p {
              font-size: ${font.s}px;
            }
          `}>
          Instant Domain Search shows domain name search results as you type. Our domain checker automatically generates
          available domain names, shows aftermarket domains for sale, and shows domain availability for popular domain
          extensions—instantly! Great <Link to="/articles/choosing-a-domain-name/">domain names</Link> are short,
          memorable, and easy to spell. Try not to use hyphens or numbers. A good place to start is what someone might
          type into a search engine to find your website. The domain name search results are sponsored. We earn money
          when you buy names and services from partners that we link to.
        </IconGroup>

        <Column>
          <IconGroup
            icon={IconExtensions}
            title="Domain extensions"
            href="/domain/extensions/"
            eventInfo="domain_extensions_h3">
            Search .com and other domain extensions like .app, .dev, .store, and over a hundred more. We also search
            country-code domains (ccTLDs) like .ca, .co.uk, .us, and .in. The{' '}
            <Link onClick={() => event('internal', 'click', 'domain_extensions_p-small')} to="/domain/extensions/">
              domain name extensions
            </Link>{' '}
            page shows gTLD domain availability in a grid to make it easier to see many results at once.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup
            icon={IconGenerator}
            title="Domain name generator"
            href="/domain/generator/"
            eventInfo="domain_generator_h3">
            Our{' '}
            <Link onClick={() => event('internal', 'click', 'domain_generator_p')} to="/domain/generator/">
              domain name generator
            </Link>{' '}
            adds thousands of popular beginnings and endings to your domain name search to find available names for
            registration. Use the generator to find website names for your new business or online store.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup icon={IconForSale} title="Domains for sale" href="/domain/sale/" eventInfo="domain_sale_h3">
            Search millions of domain names for sale. We work with large marketplaces like AfterNic, GoDaddy, and Sedo.
            AI-powered search helps find great names related to your domain name.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup
            icon={IconExpired}
            title="Expired domain names"
            href="/domain/expired/"
            eventInfo="domain_expired_h3">
            Search domain names that are about to expire. Some registrars let you buy the domain name immediately,
            sometimes the names go to an auction, and others will backorder the name for you.
          </IconGroup>
        </Column>
      </WideLayout>

      <hr style={{margin: '0 0 48px'}} />

      <WideLayout>
        <Column>
          <IconGroup icon={IconSemaphore} title="Check domain availability" headerTag="h2">
            Instant Domain Search checks domain availability by doing a <span className="smallCaps">DNS</span> query to
            get domain name search results as fast as possible. <span className="smallCaps">WHOIS</span>{' '}
            <Link to="/domain/lookup/" onClick={() => event('internal', 'click', 'domain_lookup_p-small')}>
              domain lookups
            </Link>{' '}
            are much slower than <span className="smallCaps">DNS</span> queries, but provide more information about who
            registered the name.
          </IconGroup>
        </Column>

        <Column>
          <SmallIconGroup icon={IconRed}>
            <strong className="red">Red</strong> results mean that the name is taken. Do&nbsp;a&nbsp;
            <span className="smallCaps">WHOIS</span> lookup to see when the current registration expires.
          </SmallIconGroup>
          <SmallIconGroup icon={IconGreen}>
            <strong className="green">Green</strong> results mean the domain name is available to register!
          </SmallIconGroup>
          <SmallIconGroup icon={IconBlue}>
            <strong className="blue">Blue</strong> results show domain names for sale. Buy them from one of our auction
            partners.
          </SmallIconGroup>
        </Column>
      </WideLayout>

      <hr style={{margin: '0 0 48px'}} />

      <WideLayout>
        <Column>
          <IconGroup icon={IconCoupon} title="$4.99 .com domain name registration">
            We automatically apply a discount when you register your first{' '}
            <Link to="/domain/extensions/.com/" onClick={() => event('internal', 'click', 'domain_com_p-small')}>
              .com
            </Link>{' '}
            at GoDaddy. It will only cost $4.99–plus an $0.18 <span className="smallCaps">ICANN</span> fee. Go Daddy
            accepts Visa, MasterCard, <span className="smallCaps">AMEX</span>, and PayPal.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup icon={IconLock} title="Private and secure">
            All traffic to the site is encrypted. Domain name search results are not recorded. Press Return to register
            your domain name. We use Google Analytics, which uses cookies, to see how you use this website over time.
          </IconGroup>
        </Column>
      </WideLayout>
    </Controller>
  </Page>
);
