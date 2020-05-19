/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css} from 'linaria';
import * as React from 'react';

import Column from '../../components/Column';
import Controller from '../../components/Controller';
import DomainGenerator from '../../components/DomainGenerator';
import IconBusiness from '../../components/IconBusiness';
import IconCoupon from '../../components/IconCoupon';
import IconGeneratorLarge from '../../components/IconGeneratorLarge';
import IconGroup from '../../components/IconGroup';
import IconLock from '../../components/IconLock';
import IconRandom from '../../components/IconRandom';
import Page from '../../components/Page';
import WideLayout from '../../components/WideLayout';
import * as font from '../../font';
import * as routes from '../../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    title="Domain Name Generator"
    description="Generate domain names instantly as you type. Automatically adds popular beginnings and endings to your keywords and show you what’s available.">
    <Controller page={routes.Page.Generator} header="Domain Name Generator" results={<DomainGenerator />}>
      <WideLayout>
        <IconGroup
          icon={IconGeneratorLarge}
          title="Domain name generator – try thousands of combinations instantly"
          headerTag="h1"
          className={css`
            & > p {
              font-size: ${font.s}px;
            }
          `}>
          We automatically add popular domain name beginnings and endings to whatever you type in the search box.
          Sometimes we will show a generated name as available when it’s really not. This is because we check domain
          availability by looking it up in the zone file. We can do this instantly because we store the zone files in
          results with a slower but more accurate query with VeriSign to make sure it's available to register. Thats why
          memory on our servers in a very efficient format. After you choose a domain keyword, we double-check with a
          slower <Link to="/domain/lookup/">domain lookup</Link>. Some results may go from green (available!) to red
          after a few seconds once these results come in. To search generated names, domain extensions, and domains for
          sale at the same time you can use our <Link to="/">domain name search</Link> tool. The domain name search
          results are sponsored. We earn money when you buy names and services from our partners like Go Daddy, Shopify,
          Wix, WordPress, and Domain.com.
        </IconGroup>

        <Column>
          <IconGroup icon={IconRandom} title="Random name generator">
            Our algorithm adds thousands of prefixes and suffixes to your search, starting with the most popular, then
            only shows .com domains that are available. We chose these prefixes and suffixes by looking at what the most
            popular registered domain names begin and end with.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup icon={IconBusiness} title="Business name generator">
            Finding a great business name is important, and you should find a .com to match it. The name generator can
            help you find a domain that is available. To check if a social media username is available, click on the
            three dots and we will check Facebook, Twitter, and Pinterest usernames for you.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup icon={IconCoupon} title="$4.99 .com domain name registration">
            We automatically apply a discount when you register your first .com at GoDaddy. It will only cost $4.99–plus
            an $0.18 <span className="smallCaps">ICANN</span> fee. Visa, MasterCard,{' '}
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
