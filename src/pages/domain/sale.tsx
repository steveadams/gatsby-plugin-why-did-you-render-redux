/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import {css} from 'linaria';
import * as React from 'react';

import Column from '../../components/Column';
import Controller from '../../components/Controller';
import DomainSale from '../../components/DomainSale';
import IconAiSearch from '../../components/IconAiSearch';
import IconBuyDomains from '../../components/IconBuyDomains';
import IconDomainAuction from '../../components/IconDomainAuction';
import IconForSaleLarge from '../../components/IconForSaleLarge';
import IconGroup from '../../components/IconGroup';
import IconLock from '../../components/IconLock';
import Page from '../../components/Page';
import WideLayout from '../../components/WideLayout';
import * as font from '../../font';
import * as routes from '../../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    title="Domains For Sale"
    description="Instantly search millions of domain names for sale as you type. Artificial intelligence helps find great names related to your search.">
    <Controller page={routes.Page.Sale} header="Domains For Sale" results={<DomainSale />}>
      <WideLayout>
        <IconGroup
          icon={IconForSaleLarge}
          title="Domains for sale – search the domain marketplace instantly"
          headerTag="h1"
          className={css`
            & > p {
              font-size: ${font.s}px;
            }
          `}>
          Instant Domain Search sifts through millions of domain names for sale with every key press. We show names for
          sale in blue, and link to marketplace where the domain is listed when you click on a name. You can use our{' '}
          <Link to="/">domain name search</Link> tool to search for names that are not yet registered. The domain name
          search results are sponsored. We earn money when you buy names and services from our partners like Go Daddy,
          Shopify, Wix, WordPress, and Domain.com.
        </IconGroup>

        <Column>
          <IconGroup icon={IconBuyDomains} title="Buy domains">
            Buying a domain name is straightforward. We work with large marketplaces like AfterNic, GoDaddy, and Sedo,
            all of whom can help you buy and transfer your domain name. Transfers are usually handled by the domain
            marketplace, and you should expect to be up and running with your new name quickly once you transfer a
            domain.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup icon={IconDomainAuction} title="Domain auctions">
            Some domain names are only available at auction. For now, we’ve chosen to feature buy it now domain names
            because they are often available immediately. We are working to improve our search engine to make it easier
            for advanced users to choose whether they want to include domains at auction (or domains with hyphens and
            numbers) in the search results.
          </IconGroup>
        </Column>

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
