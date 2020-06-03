/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import {event} from '../../../analytics';
import Column from '../../../components/Column';
import Controller from '../../../components/Controller';
import DomainResults from '../../../components/DomainResults';
import IconCoupon from '../../../components/IconCoupon';
import IconGroup from '../../../components/IconGroup';
import IconLock from '../../../components/IconLock';
import IconSearch from '../../../components/IconSearch';
import Page from '../../../components/Page';
import WideLayout from '../../../components/WideLayout';
import * as font from '../../../font';
import * as routes from '../../../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    description="Search the list of .com domain names as you type. Search results appear instantly. $4.99 coupon for new .com customers. Automatically generates suggestions and finds premium domain names available for sale."
    title=".com Domain Names">
    <Controller page={routes.Page.Com} results={<DomainResults showTlds={false} />}>
      <WideLayout>
        <IconGroup
          className={css`
            & > p {
              font-size: ${font.s}px;
            }
          `}
          headerTag="h1"
          icon={IconSearch}
          title="Search .com domain names as you type">
          The .com domain extension is the most popular domain extension available. There are over one hundred million
          .com names registered today. The extension was released in March of 1985, and is short for “commercial”. The
          .com registry is administered by <a href="https://www.verisign.com/">Verisign</a>. Verisign acts like a
          wholesaler, and does not sell to retail customers. Instead, you need to register the name through a vendor
          like our partner, GoDaddy. This interface only shows search results and suggestions for .com domain names.{' '}
          <a
            href="/domain/extensions/#search=full%20list%20of%20extensions"
            onClick={() => event('interact', 'extensions', 'click to see all')}>
            Click here to the full list of domain extensions.
          </a>
        </IconGroup>

        <Column>
          <IconGroup icon={IconCoupon} title="$4.99 .com domain name registration">
            We automatically apply a discount when you register your first .com name at GoDaddy. It will only cost
            $4.99–plus an $0.18 <span className="smallCaps">ICANN</span> fee. Visa, MasterCard,{' '}
            <span className="smallCaps">AMEX</span>, and PayPal are accepted.
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
