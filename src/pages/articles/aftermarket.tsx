/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Article from '../../components/Article';

export const frontmatter = {
  title: 'Buying A Domain Name',
  headline: 'The Domain Name Aftermarket',
  description: 'Even if the name you want has been taken, you may be able to buy it on the aftermarket.',
  date: '2010-12-17',
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
      When you try to register a domain, you'll often see that the name you want is already taken. Unfortunately, with
      hundreds of millions of people on the Internet, and tens of thousands of domains registered every day, the domain
      that you want is usually long gone by the time you get to it. However, it's often possible to buy a registered
      domain name — you just need to know what to do.
    </p>

    <h3>The Domain Name Aftermarket</h3>

    <p>
      There are many who play the domain name speculation game. They register domains in hopes that someday someone will
      want to buy it from them. Some of these registrants are people working independently, and others are companies
      whose business is entirely domain reselling. Some businesses even sell individuals' domains on consignment.
    </p>

    <p>
      There are a couple different ways that registered domain names are sold: They can be sold outright, auctioned, or
      backordered with a registrar if set to expire soon.
    </p>

    <h3>Domain Sales</h3>

    <p>
      The simplest domain transaction is an outright sale. Here the domain is usually listed for sale and people either
      accept the price or make a counteroffer. Offers can be made directly, or you can use a domain broker to negotiate
      for you.
    </p>

    <p>
      In fact, there's nothing stopping you from making an offer for a domain that's not listed for sale, and such
      offers are made relatively often. For example, if the domain you want isn’t available, GoDaddy's Domain Buy
      service can appraise the domain you want, and then try to negotiate a price with its owner on your behalf.
    </p>

    <h3>Domain Auctions</h3>

    <p>
      Equally common is the domain auction. If you’ve ever used EBay then this will seem very familiar. In domain
      auctions, domain names are put up for sale to the highest bidder. Auctions can sometimes have reserves — a minimum
      sale price set by the domain owner that must be met for the auction to result in a sale. All bids placed are
      committal — if you win the auction then you’re required to buy the domain — so don’t bid unless you’re sure!
    </p>

    <h3>Domain Backorders</h3>

    <p>
      Domain backordering can be a much cheaper alternative to buying a domain outright or in auction. The only problem
      is that you can’t always be sure when you'll get your hands on the domain — or sometimes if you'll get it at all.
      Essentially, some registrars will let you order a domain that isn’t for sale yet. When the domain's current
      registration term comes to its end, the registrar will then try to register the domain for you as soon as
      possible.
    </p>

    <p>
      There are some variations on this method. For example, some registrars will hold auctions for domain backorders,
      and then try to register them for the highest bidder. There can also be differences in the cost of these services
      — some registrars may charge you as soon as you request the domain, while others will only charge you if they're
      successful in acquiring it for you.
    </p>

    <h3>The Aftermarket Market</h3>

    <p>
      Here's a quick look at some the services offered by some of the larger domain aftermarket companies online (as of
      this writing):
    </p>

    <table>
      <thead>
        <tr>
          <th>Provider</th>
          <th>Direct sales</th>
          <th>Auctions</th>
          <th>Backorders</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>GoDaddy</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Network Solutions</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>Sedo</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Name Jet</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td>AfterNic</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Buydomains.com</td>
          <td>Yes</td>
          <td>Yes</td>
          <td>No</td>
        </tr>
        <tr>
          <td>Domain.com</td>
          <td>No</td>
          <td>No</td>
          <td>No</td>
        </tr>
        <tr>
          <td>1&amp;1</td>
          <td>No</td>
          <td>No</td>
          <td>No</td>
        </tr>
      </tbody>
    </table>

    <h3>Where to Begin</h3>

    <p>
      When you want a domain, the first thing to do is use Instant Domain Search to see if your domain is available. If
      it's already registered and you want to try to purchase it, head to GoDaddy and some of the other providers listed
      above. Start by checking the domain auctions and sales — they’re often listed together on the provider websites.
      Keep in mind that different providers often feature different domains, so you may want to check a couple of these.
      If you don’t see your domain listed, then you can try a domain backorder or hire a domain broker to make an offer
      for you. You may not be able to purchase the domain in the end, but if you choose a service that only charges for
      successful domain acquisitions then you’ve got nothing to lose.
    </p>

    <p>
      The domain aftermarket is fast-paced, but also user-friendly. As long as you spend a little time researching the
      domains that you want, including their value and when they expire, you can be a savvy domain investor or pick up
      the perfect address for your website. And don’t forget that the domain market is like any other — there's always a
      risk involved, but the profit potential is virtually limitless.
    </p>
  </Article>
);
