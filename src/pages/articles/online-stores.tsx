/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Article from '../../components/Article';

export const frontmatter = {
  title: 'Online Stores',
  headline: 'The Online Store',
  description:
    'A glimpse at online store and online shop websites and services: See what services online store websites offer the new online shopkeep.',
  date: '2008-06-02',
  authors: [
    {name: 'Beau Hartshorne', link: 'mailto:hartshorne@gmail.com'},
    {
      name: 'Mike Dascal',
      link: 'http://www.mykcreative.com/',
    },
  ],
};

export default (props: PageProps) => (
  <Article {...props} frontmatter={frontmatter}>
    <p>
      Everyday more and more people are realizing the incredible market value of online stores. Not only can you make it
      easier for people to buy your products when you place your shop online, (as your electronic consumers don’t have
      to leave the comfort of their couches), but you also widen your market from your locale to the entire world of
      Internet users.
    </p>

    <p>
      Maintaining online stores was once difficult for small businesses for a number of reasons. Nowadays things have
      completely changed, though: Website hosting costs have dropped significantly, software has been designed to make
      building your online store easier and more secure, and perhaps most importantly, people have become used to
      shopping online. In fact, because online stores cost significantly less to run that actual shops, many items can
      be cheaper to purchase from online retailers, and more and more consumers are shopping online first for just this
      reason.
    </p>

    <p>
      There are a number of sites that offer both online store hosting as well as online store software packages. We'll
      look at some of the largest ones and compare the services they offer. As each website offers multiple service
      levels, you should fully consider each service package and make sure it gives you everything you need before you
      make any decisions.
    </p>

    <h3>Shopify</h3>

    <p>
      Made for online stores by online retailers, Shopify is not only a network of online shops and boutiques, but a
      bundle of essential business services. Unlike some other online store software and hosting services, your store is
      almost entirely independently run by you. The software provided allows you to easily handle your merchandise and
      makes shopping in your store intuitive and pleasant for your customers, as well as helps you market yourself and
      take care of customer service. You also have the option of using online store templates Shopify provides you,
      hiring a designer that they recommend, or designing your store entirely by yourself.
    </p>

    <h3>eBay Stores</h3>

    <p>
      Almost everyone knows eBay as the largest online auction site. However in addition to the auction side of its
      business, it also hosts a huge network of online stores that are accessible directly through their own web
      addresses, as well as via the eBay auction site. When you open an eBay store on the web, you get all the benefits
      of listing your products online with eBay, as well as extra features to manage your merchandise, your marketing,
      and even your accounting. Although the three service levels offered differ greatly, they all offer some technical
      support, some off-eBay marketing tools, and some hosting space for your online store.
    </p>

    <p>
      Once you’ve chosen your online store service provider, you’re on your way — take some photos of your merchandise,
      post them using the software you’re provided, and you should be seeing first customers in no time!
    </p>
  </Article>
);
