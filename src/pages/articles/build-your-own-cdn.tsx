/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import Article from '../../components/Article';

export const frontmatter = {
  title: 'Build your own CDN',
  headline: 'Build your own CDN on AWS with Route 53',
  description:
    'Instant Domain Search is served from a custom CDN built on top of Amazon Web Services. This article describes how it works.',
  date: '2014-06-25',
  authors: [{name: 'Beau Hartshorne', link: 'mailto:hartshorne@gmail.com'}],
};

export default (props: PageProps) => (
  <Article {...props} frontmatter={frontmatter}>
    <p>
      Instant Domain Search is fast because it keeps an{' '}
      <Link to="/about/">in-memory index of several domain name zone files</Link> and runs on fast servers. Each zone
      query is answered in microseconds. The slowest part of the search is the link between the client and the server.
      This is especially true for mobile networks. We are obsessed with speed, and are always looking for ways to make
      this site even faster.
    </p>

    <p>
      A few years ago, <Link to="/articles/faster-domain-name-search/">we started to use JavaScript</Link> to determine
      which server was closest to you. This technique significantly improved search performance, but does nothing to
      make the initial page load faster. Recently, we started serving all pages over HTTPS by default. This adds even
      more latency to the initial page load because we need to negotiate an HTTPS connection before the browser knows
      where to download static resources like CSS and JavaScript.
    </p>

    <p>
      Using a content delivery network (CDN) to host the site can make it hard to propagate changes, use custom redirect
      rules, and expensive to host with your own secure certificate. We also wanted to roll out SPDY, and at the time of
      this writing there is no timeframe to add SPDY support to CloudFront. The SPDY protocol is much more efficient
      than traditional HTTPS because it can negotiate a secure connection with fewer network round trips. Google has
      shown that SPDY is{' '}
      <a href="https://developers.googleblog.com/2012/05/spdy-performance-on-mobile-networks.html">
        23% faster on mobile networks
      </a>{' '}
      than HTTPS.
    </p>

    <p>
      A CDN works by caching copies of your resources in data centers around the world. These are the edge servers. The
      edge servers usually cache content on an on-demand basis. This means that the CDN fetches data to store in an edge
      server from your server (the origin server) only when a nearby client requests it. If you have a relatively
      low-traffic site like this one, your data will probably be frequently evicted from its cache. This can introduce a
      bit more latency when the CDN’s edge server fetches fresh data from your origin server.
    </p>

    <p>
      Amazon’s Route 53 service added{' '}
      <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingLatencyRRSets.html">
        latency-based routing
      </a>{' '}
      in March 2012. This means you can host servers in several Amazon data centers, and Route 53 will use DNS to
      connect users to the server closest to them. CloudFront does something similar to connect users to the closest
      edge node. This is amazing.
    </p>

    <p>
      Over a 30-day period, we used <a href="https://www.pingdom.com/">Pingdom</a> to monitor latency to a CloudFront
      URL that served a gzipped version of our home page over HTTPS. Pingdom uses servers located all over the world to
      monitor uptime, and to provide latency reports. Over the same period, we served the identical page over HTTPS,
      letting Route 53’s latency-based routing direct load to one of our servers in Virginia, California, Singapore, or
      Ireland. Overall, our custom CDN is about as fast as CloudFront:
    </p>

    <table>
      <thead>
        <tr>
          <th />
          <th>CloudFront</th>
          <th>Custom CDN</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Overall</td>
          <td>195ms</td>
          <td>193ms</td>
        </tr>
        <tr>
          <td>Fastest</td>
          <td>166ms</td>
          <td>175ms</td>
        </tr>
        <tr>
          <td>Slowest</td>
          <td>241ms</td>
          <td>234ms</td>
        </tr>
      </tbody>
    </table>

    <p>
      Even though there are far more CloudFront edge nodes than Instant Domain Search servers, we’re still able to place
      servers relatively close to the majority of our users. Route 53 will only send traffic to servers that are online.
      Since switching to this system, Pingdom tells us we’ve had 100.00% uptime for our home page, static content, and
      search interface.
    </p>

    <p>
      By serving everything from one domain, we can eliminate the DNS query, TCP connection, and SPDY/HTTPS handshake
      made with the CDN. This network chatter adds latency to a critical part of the user’s experience: the first page
      load. When a user starts searching, they are still talking to the server closest to them. This eliminates the need
      for the JavaScript hack we’d used earlier.
    </p>

    <p>
      It’s incredible that a relatively small site like ours has access to the global infrastructure provided by AWS. We
      were able to build a custom CDN from the command line, something that was only available to the largest providers
      and at great expense when this site launched in 2005.
    </p>
  </Article>
);
