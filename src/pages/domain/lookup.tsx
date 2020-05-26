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
    description="Lookup domain names instantly by searching as you type. Uses artificial intelligence to help you find great names. $4.99 .com names for new customers."
    title="Domain Lookup | Lookup Domain Availability">
    <Controller header="Domain Lookup" page={routes.Page.Home} results={<DomainResults showTlds />}>
      <WideLayout>
        <h1>Domain lookup – how we lookup domain names</h1>
        <p>
          Instant Domain Search does a domain lookup on every letter that you type. We think it’s important to show{' '}
          <Link to="/">domain name search</Link> results quickly so you can brainstorm without waiting for results to
          show. There are several ways to lookup domain names. You can do a DNS lookup, a WHOIS lookup, or an EPP
          lookup. The domain name search results are sponsored. We earn money when you buy names and services from
          partners that we link to.
        </p>

        <h2>DNS – Domain Name System</h2>
        <p>
          <a href="https://www.ietf.org/rfc/rfc1035.txt">DNS lookups</a> are designed to convert human-readable names,
          like <Link to="/">instantdomainsearch.com</Link>, into machine-readable numbers, like{' '}
          <a href="https://130.211.25.142/">130.211.25.142</a>. Every time you type a domain name into a web browser,
          your computer does a DNS lookup to find a server somewhere on the internet. DNS lookups are designed to be
          very fast, and can tell you quickly if a domain name is already in use. If you are comfortable with the
          command prompt, you can try using the <code style={{margin: 'auto', padding: 'auto'}}>dig</code> tool to do
          your own DNS lookups: <code style={{margin: 'auto', padding: 'auto'}}>dig instantdomainsearch.com</code>.
          Instant Domain Search is fast because it first does an optimized DNS lookup to see if your name is available,
          and then follows-up with an EPP lookup to double check.
        </p>

        <h2>EPP – Extensible Provisioning Protocol</h2>
        <p>
          <a href="https://tools.ietf.org/html/rfc4931">EPP</a> is designed for registrars to manage domain names people
          register with them. Doing an <a href="https://tools.ietf.org/html/rfc4931#section-3.1.1">EPP check</a> is the
          autoratitive way to see if a domain is available to register. In practice, it can take up to a second for
          registrars to answer EPP lookups. Because EPP lookups ultimately require an expensive database lookup,
          registrars need to limit the number of EPP queries they handle at once.
        </p>

        <h2>WHOIS Protocol</h2>
        <p>
          <a href="https://tools.ietf.org/html/rfc3912">WHOIS</a> lookups were designed to find the contact information
          for the domain registrants, and other details about it such as when it was first registered, its current
          status, and when it expires. Unfortunately, spammers abused the protocol to extract personal information from
          domain names and continue to abuse WHOIS lookups. Most domain registrars allow you to register your domain
          name privately to help hide your information from spammers and scammers. Domain registrars are constantly
          fighting spammers who try to get information from their WHOIS records that they will usually make you prove
          that you are a human before showing you WHOIS results. You can try doing a WHOIS lookup from your computer
          using the command prompt: <code style={{margin: 'auto', padding: 'auto'}}>whois instantdomainsearch.com</code>
          .
        </p>

        <h2>
          <Link to="/domain/sale/">Domain names for sale</Link>
        </h2>
        <p>
          Many of the best domain names are already registered. We work with several top aftermarket providers who
          publish lists of domain names they have for sale, and show them to you as you type. Sometimes a great name is
          worth the investment!
        </p>

        <h2>How is Instant Domain Search so fast?</h2>
        <p>
          Many domain registries publish zone files once or twice a day to help make DNS queries more efficient. Every
          night, we build an optimized index of over a hundred million domain names from several hundred zone files and
          host the index on fast servers all over the world. When you type, our software finds the closest server to you
          and does a simplified DNS lookup to get results back to you as quickly as possible. It’s so fast that the
          slowest part is usually waiting for your web browser to render all of the search results.
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
