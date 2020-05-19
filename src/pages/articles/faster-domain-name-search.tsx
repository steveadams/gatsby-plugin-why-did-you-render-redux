/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Article from '../../components/Article';

export const frontmatter = {
  title: 'Faster Domain Search',
  headline: 'Even Faster Domain Name Search',
  description: 'Our new distributed infrastructure makes your domain searches even faster',
  date: '2011-09-15',
  authors: [{name: 'Colin Putney', link: 'https://instantdomainsearch.com/'}],
};

export default (props: PageProps) => (
  <Article {...props} frontmatter={frontmatter}>
    <p>
      The thing we’re most proud of is the "instant" in Instant Domain Search - our searches are so fast, we can perform
      them as you type the name you want to look up. Today we’re excited to announce our new distributed searching
      infrastructure. We now have search servers in Europe and Asia to minimize the transoceanic network lag that our
      users experience when searching for available domain names.
    </p>

    <h2>How it works</h2>

    <p>
      The new version of Instant Domain Search runs on Amazon's EC2 cloud computing server. The main web site is hosted
      on a central app server in the us-east-1 region (located in Virginia). When you load the home page, it's given a
      list of search servers it can use to look up domain names. By default it's configured to use the search server
      running next to the main appserver in Virginia. When the search page loads, it does some test searches on each
      server, verifying that they’re working properly, and measuring how long it takes each server to respond. Once it's
      collected enough data, it selects the server that's giving the fastest responses, and uses that for any queries
      that the user types into the search box. As the user does queries, the page is constantly re-evaluating the
      performance of the server it's using, and if that server slows down, it will switch over to another server to get
      the best performance it can.
    </p>

    <h2>The numbers</h2>

    <p>
      We noticed that many of our users will do dozens or hundreds of queries in a single visit to the search page, and
      so we can get a lot of benefit by doing our performance measurement and optimization in the browser. Here's how it
      breaks down:
    </p>

    <table>
      <thead>
        <tr>
          <th>Region</th>
          <th>Proportion</th>
          <th>Improvment</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>US East</td>
          <td>47%</td>
          <td>0%</td>
        </tr>
        <tr>
          <td>US West</td>
          <td>27%</td>
          <td>26.8%</td>
        </tr>
        <tr>
          <td>Europe</td>
          <td>17%</td>
          <td>27.5%</td>
        </tr>
        <tr>
          <td>Asia</td>
          <td>9%</td>
          <td>28.5%</td>
        </tr>
      </tbody>
    </table>

    <p>
      So 47% of our users find that the default search server in Virginia is fastest for them, and so get no benefit by
      switching to another one. Another 27% were presumably located somewhere on the West Coast, and saw almost 27%
      improvement by using the search server in California. We have fewer user in Europe and Asia, but they had slightly
      better performance improvements from using local search servers.
    </p>

    <p>Overall, 53% of our users saw their queries speedup by an average of 27%.</p>

    <h2>Automatic Failover</h2>

    <p>
      Another benefit of this arrangment is automatic failover in case of a network outage or server failure. If a
      server does’t answer at all, the search page doesn’t send it any more searches. This has already worked out well
      for us. Just a few days ago, the machine hosting our Virginia search server failed, and all the queries
      transparently migrated over to the California server. We don’t think any of our users even noticed. Client-side
      load balancing for the win!
    </p>
  </Article>
);
