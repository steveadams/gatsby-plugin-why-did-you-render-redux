/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import Controller from '../../components/Controller';
import DomainResults from '../../components/DomainResults';
import Page from '../../components/Page';
import WideLayout from '../../components/WideLayout';
import * as routes from '../../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    description="Find your perfect domain name with the fastest domain name search available. Uses artificial intelligence to find great names related to your search."
    title="Domain Names | Instant Domain Search">
    <Controller header="Domain Names" page={routes.Page.Home} results={<DomainResults showTlds />}>
      <WideLayout>
        <h1>What is a domain name?</h1>

        <p>
          A domain name helps people find your business on the internet. Without domain names, customers need to
          remember a bunch of numbers—like 130.211.25.142 for Instant Domain Search–to find your website. The domain
          name system—<a href="https://www.ietf.org/rfc/rfc1034.txt">DNS</a>—is responsible for translating the name
          into the numbers—an <a href="https://tools.ietf.org/html/rfc1918">IP address</a>—that computers can use to
          find your site.
        </p>

        <p>
          Many domain name extensions–like <a href="https://www.verisign.com/">.com, .net,</a> and .xyz–are now
          available to register. The vast majority of websites and email addresses use .com. There are over one hundred
          million .com names registered, which is why it is so hard to find a good name.
        </p>

        <p>
          Every country is also assigned a top-level domain extension (TLD) like .ca (Canada). Some countries govern who
          can use their TLD fairly strictly, while others—like .co (Columbia) and .io (Indian Ocean)—market their TLDs
          globally.
        </p>

        <h2>
          <Link to="/domain/extensions/">Domain name extensions</Link>
        </h2>

        <p>
          <a href="https://www.icann.org/">ICANN</a>, the governing body for domain name endings has allowed hundreds of
          new TLDs to enter the market. For a number of reasons, .com remains dominant. You can see this selling prices
          of .com domain names compared to anything else on the market.
        </p>

        <h2>
          <Link to="/domain/sale/">Domain names for sale</Link>
        </h2>

        <p>
          Some domains are held by <a href="https://en.wikipedia.org/wiki/Frank_Schilling">individual investors</a>{' '}
          who’ve amassed large portfolios of names for sale. Most are not in use, and are waiting for a buyer looking
          for the perfect name and willing to pay a premium for a great name.
        </p>

        <p>
          If a domain name is not renewed, it stops working for about two months before the registrar responsible for it
          releases it to the public to buy again. If you find a name that’s about to be released, you can buy a
          backorder service that will try to beat the crowd waiting to register good names that become available again.
        </p>

        <h2>
          <Link to="/">Domain name search</Link>
        </h2>

        <p>
          To find a great name, start by typing in the search box at the top of this page. We show search results as you
          type, <Link to="/domain/sale/">domain names for sale</Link>, and <Link to="/domain/generator/">generate</Link>{' '}
          automatic suggestions for other names you can buy today.
        </p>

        <h2>Private and secure</h2>

        <p>
          All traffic to the site is encrypted. Search results are not recorded. We use Google Analytics, which uses
          cookies, to see how you use this website over time.
        </p>
      </WideLayout>
    </Controller>
  </Page>
);
