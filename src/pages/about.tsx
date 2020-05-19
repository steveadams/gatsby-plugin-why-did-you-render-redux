/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import TwoColumnLayout from '../components/TwoColumnLayout';
import beauImage from '../images/beau.jpg';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    title="About Instant Domain Name Search"
    description="A brief history of Instant Domain Search. Built by Beau Hartshorne in 2005. It works by indexing domain names in an insanely fast server.">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>About Instant Domain Search</h1>
          <p>
            I built Instant Domain Search in 2005 after attending <a href="http://www.ycombinator.com/">Y Combinator</a>
            ’s inaugural <a href="https://www.startupschool.org/">Startup School</a> at Harvard. After the day of
            lectures, I was eager to launch a startup. I had a few ideas, but I was frustrated with how slow WHOIS
            queries are--and how hard it is to find a good name.
          </p>

          <p>
            It turns out that VeriSign publishes{' '}
            <a href="https://www.verisign.com/en_US/channel-resources/domain-registry-products/zone-file/index.xhtml">
              a list of domain names
            </a>{' '}
            in a giant zone file every night. Once I faxed the zone access agreement back to VeriSign, they provided me
            with access to the zone file. I got a dedicated server, hacked together a script, and was able to index the
            hundreds of millions of .com domain names with MySQL.
          </p>

          <p>
            I was surprised by how fast even the first version was. Once I had the JavaScript, PHP, and MySQL running
            smoothly, I posted a first version of the site to the Startup School wiki. Soon after, I got an email from
            <a href="http://www.paulgraham.com/">Paul Graham</a> inviting me to apply to Y Combinator. Michael Arrington
            noticed the site and covered{' '}
            <a href="https://techcrunch.com/2005/11/13/ajaxed-domain-names-search/">
              Instant Domain Search at TechCrunch
            </a>{' '}
            in November of 2005.
          </p>

          <p>
            I received funding from Y Combinator in 2006 and built an online image editor, Snipshot. I joined{' '}
            <a href="https://www.facebook.com/beau">Facebook</a> as an engineer in 2009 and, after four intense years,
            left in 2013 to work on other projects.
          </p>
        </>
        <>
          <p>Instant Domain Search was built in 2005 by Beau Hartshorne.</p>
          <p>
            <img src={beauImage} width="216" height="299" alt="Beau Hartshorne" />
          </p>

          <h4 style={{marginBottom: 0}}>Contact</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/beau">facebook.com/beau</a>
            </li>
            <li>
              <a href="https://www.twitter.com/hartshorne">@hartshorne</a>
            </li>
            <li>
              <a href="https://hartshorne.ca/">https://hartshorne.ca</a>
            </li>
            <li>
              <a href="mailto:beau@hartshorne.ca">beau@hartshorne.ca</a>
            </li>
            <li>+1 778 949-5055</li>
          </ul>

          <h4 style={{marginBottom: 0}}>Instant Domain Search, Inc.</h4>
          <p style={{lineHeight: '1.5em'}}>
            10796 Madrona Drive
            <br />
            North Saanich, BC &nbsp; V8L 5M7
            <br />
            Canada
          </p>
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
