/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import WideLayout from '../components/WideLayout';
import godaddyLogo from '../images/hosting/godaddy.svg';
import shopifyLogo from '../images/hosting/shopify.svg';
import weeblyLogo from '../images/hosting/weebly.svg';
import wixLogo from '../images/hosting/wix.svg';
import wordpressLogo from '../images/hosting/wordpress.svg';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    description="Our favorite website builders, blogging software, and ecommerce software."
    title="Web Hosting - Make a website, online store, or blog">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <WideLayout>
        <h2>Make a website</h2>

        <ul className="hosting">
          <li>
            <a
              href="https://wixstats.com/?a=21507&amp;c=2149&amp;s1="
              rel="sponsored noopener noreferrer"
              target="_blank">
              <img alt="Wix Logo" src={wixLogo} />
              <span>Wix</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.dpbolvw.net/click-8955823-13379824"
              rel="sponsored noopener noreferrer"
              target="_blank">
              <img alt="Go Daddy Logo" src={godaddyLogo} />
              <span>Go Daddy</span>
            </a>
          </li>

          <li>
            <a
              href="https://shareasale.com/r.cfm?b=366125&amp;u=275332&amp;m=37723&amp;urllink=&amp;afftrack="
              rel="sponsored noopener noreferrer"
              target="_blank">
              <img alt="Weebly Logo" src={weeblyLogo} />
              <span>Weebly</span>
            </a>
          </li>
        </ul>

        <h2>Make a store</h2>

        <ul className="hosting">
          <li>
            <a
              href="https://www.shopify.com/?ref=instant-domain-search"
              rel="sponsored noopener noreferrer"
              target="_blank">
              <img alt="Shopify Logo" src={shopifyLogo} />
              <span>Shopify</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.dpbolvw.net/click-8955823-13379824"
              rel="sponsored noopener noreferrer"
              target="_blank">
              <img alt="Go Daddy Logo" src={godaddyLogo} />
              <span>Go Daddy</span>
            </a>
          </li>

          <li>
            <a
              href="https://shareasale.com/r.cfm?b=1207610&amp;u=275332&amp;m=37723&amp;urllink=&amp;afftrack="
              rel="sponsored noopener noreferrer"
              target="_blank">
              <img alt="Weebly Logo" src={weeblyLogo} />
              <span>Weebly</span>
            </a>
          </li>
        </ul>

        <h2>Start a blog</h2>

        <ul className="hosting">
          <li>
            <a href="https://wordpress.com/alp/?aff=5992" rel="sponsored noopener noreferrer" target="_blank">
              <img alt="WordPress Logo" src={wordpressLogo} />
              <span>WordPress</span>
            </a>
          </li>

          <li>
            <a
              href="https://www.dpbolvw.net/click-8955823-13379824"
              rel="sponsored noopener noreferrer"
              target="_blank">
              <img alt="Go Daddy Logo" src={godaddyLogo} />
              <span>Go Daddy</span>
            </a>
          </li>

          <li>
            <a
              href="https://shareasale.com/r.cfm?b=1207610&u=275332&m=37723&urllink=&afftrack="
              rel="sponsored noopener noreferrer"
              target="_blank">
              <img alt="Weebly Logo" src={weeblyLogo} />
              <span>Weebly</span>
            </a>
          </li>
        </ul>
      </WideLayout>
    </Controller>
  </Page>
);
