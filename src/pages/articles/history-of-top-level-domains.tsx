/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Article from '../../components/Article';

export const frontmatter = {
  title: 'Top Level Domains History',
  headline: 'A Brief History of Top Level Domains',
  description: 'A look at the history of navigating the Internet without having to remember an IP address.',
  date: '2013-05-20',
  authors: [{name: 'Natasha John', link: 'https://www.facebook.com/natashajohn'}],
};

export default (props: PageProps) => (
  <Article {...props} frontmatter={frontmatter}>
    <p>
      To understand how domain names came to be, we should take a brief glance a few decades prior to its creation. It
      can be said that the Internet began in the 1950s when electronic computers were created and the ability to have
      rapid and centralized communication was desired.
    </p>

    <p>
      In the late 1960s, computers at Stanford and UCLA connected for the very first time thanks to Arpanet. Arpanet was
      run on packet switching and was considered to be the first network to do so. After these two universities
      successfully connected, other universities followed suit and joined the network. Soon after the rise of this
      networking, Ray Tomlinson developed email in 1971. His idea was to separate a user name from the computer name by
      using the "@" symbol which we’re so familiar with today. The introduction of email is important to note because
      the computer name within an email address was essentially a domain name, even though it wasn’t referred to as that
      back then.
    </p>

    <p>
      Fast-forward eleven years and that's when Arpanet computers made the switch to TCP/IP. It's more than likely you
      have seen your fair share of IP addresses and if asked, you probably couldn’t remember a single one of those
      numerical addresses.
    </p>

    <p>
      Although IPs were, and still are, essential to the way the Internet works, there was a need to make it more user
      friendly; The invention of the domain name system and Domain Name Servers (DNS) accomplished that goal. Users no
      longer had to remember a series of numbers separated by periods, but could enter a domain name that was easy to
      remember. This domain would then be automatically converted into an IP address, directing the user to the
      information they were trying to retrieve.
    </p>

    <p>
      TCP/IP also made it possible for the number of hosts to grow exponentially. The next dilemma was how to sort all
      of these domain names? Top-level domains (TLDs) were introduced and were originally separated by country, category
      and multi-organizations. In the fall of 1984, RFC 920 established seven TLDs and .com was one of them. The first
      and oldest registered .com belongs to Symbolics.com. Other TLDs you’re likely familiar with are .net, .org, .aero,
      .biz, .coop, .info, .museum, .name and .pro.
    </p>

    <p>
      In the world of DNS control, VeriSign, Inc. is a major player, holding the authoritative registry for .com and
      .net, amongst many other TLDs. The Internet has 13 root servers that basically support all Internet communication.
      There are 12 companies that operate these servers and VeriSign is the only one to run two of these servers. The
      acquisition of Network Solutions by VeriSign in 2000 was a big deal because Network Solutions had a long history
      of operating the domain name registry since the initial conception. To put VeriSign's reach into perspective, they
      had more than 34 million registered .com users, not including any other TLD in 2003.
    </p>

    <p>
      While the initial creation of the Internet and TLDs was cutting edge and beneficial, the commercialization of the
      Internet didn’t hit until the mid-1990s when every day people could access the Internet from their personal
      computers. This opened up the doors for businesses to start profiting from the new ways they could communicate and
      interact with customers; Internet malls started opening, Pizza Hut made online ordering available in ‘94, online
      chat rooms became all the rage and music became accessible online – if you could afford the internet connection
      charges and had the patience to sit through dial-ups. As of 1995, there were 16 million Internet users around the
      globe and it has at least doubled every year since then.
    </p>

    <p>
      Today, domain names are so important because they help give an identity to a person, organization or business
      before the user even clicks into the site. Is the address easy to remember? Does it reflect the content that's on
      your site? Does it fit with your branding? These are questions you should ask yourself before deciding on a domain
      name for your website.
    </p>

    <p>Fun Fact: The most expensive domain name ever purchased was sex.com and sold for $13,000,000 in 2010.</p>

    <p>See also:</p>

    <ul>
      <li>
        <a href="http://www.economist.com/blogs/economist-explains/2013/09/economist-explains">
          The Economist explains: How does an internet name become an internet address?
        </a>
      </li>
      <li>
        <a href="https://www.bloomberg.com/news/articles/2013-04-04/q-and-a-paul-mockapetris-inventor-of-the-domain-name-system-wants-to-filter-the-web">
          Q&amp;A: Paul Mockapetris, Inventor of the Domain Name System, Wants to Filter the Web
        </a>
      </li>
    </ul>
  </Article>
);
