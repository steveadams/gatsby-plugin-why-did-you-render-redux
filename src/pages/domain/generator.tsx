/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Column from '../../components/Column';
import Controller from '../../components/Controller';
import DomainGenerator from '../../components/DomainGenerator';
import Explainer from '../../components/Explainer';
import IconGroup from '../../components/IconGroup';
import Page from '../../components/Page';
import WideLayout from '../../components/WideLayout';
import * as routes from '../../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    description="Generate domain names instantly as you type. Automatically adds popular beginnings and endings to your keywords and show you what’s available."
    title="Domain Name Generator">
    <Controller page={routes.Page.Generator} results={<DomainGenerator />}>
      <WideLayout>
        <Explainer title="Domain name generator – try thousands of combinations instantly">
          <p>
            We automatically add popular domain name beginnings and endings to whatever you type in the search box.
            Sometimes we will show a generated name as available when it’s really not. This is because we check domain
            availability by looking it up in the zone file. We can do this instantly because we store the zone files on
            our servers in a very efficient way.
          </p>
          <p>
            We double-check your generated results with a VeriSign domain lookup. Some results may go from green
            (available!) to red after a few seconds once these results come in. The domain name search results are
            sponsored. We earn money when you buy names and services from our partners like Go Daddy, Shopify, Wix,
            WordPress, and Domain.com.
          </p>
        </Explainer>

        <Column>
          <IconGroup icon="Random" title="Random domain generator">
            Our algorithm adds thousands of prefixes and suffixes to your search, starting with the most popular, then
            only shows .com domains that are available. We chose these prefixes and suffixes by looking at what the most
            popular registered domain names begin and end with.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup href="/generators/business-name/" icon="BizNameGenerator" title="Business name generator">
            Finding a great business name is important, and you should find a .com to match it. The name generator can
            help you find a domain that is available. To check if a social media username is available, click on the
            three dots and we will check Facebook, Twitter, and Instagram usernames for you.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup icon="Coupon" title="Domain name registration">
            We automatically apply a discount when you register your first .com at GoDaddy. Visa, MasterCard,{' '}
            <span className="smallCaps">AMEX</span>, and PayPal are accepted.
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
