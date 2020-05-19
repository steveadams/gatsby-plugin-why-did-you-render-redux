/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import Article from '../../components/Article';

export const frontmatter = {
  title: 'Domain Hosting',
  headline: 'Domain Hosting at a Glance',
  description:
    'Tips to picking a domain hosting service: Learn what services different domain hosting websites offer and what you might want to',
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
      So your website's on its way — you’ve decided what you want to publish, you’ve{' '}
      <Link to="/articles/choosing-a-domain-name/">chosen a domain name</Link>, and now... well... now what?
    </p>
    <p>
      There are two things you have left to do before you can start putting your website on the web. First, you need to
      register your domain name, which means you'll be the only one to have the right to use it. Second, you need to
      pick a domain hosting provider, which means putting your website on the Internet. Luckily, to make your life just
      a bit easier, domain hosting companies offer domain registration services as well. All you have left to do is
      decide which one of the many companies to use.
    </p>
    <p>
      Because domain hosting is such an important part of bringing your site to life, you should{' '}
      <strong>be sure that you choose a company that you can depend on</strong> and that suits your needs. Whether
      you’re an independent person who wants to start a blog or portfolio site, or a small- or medium-sized business,
      you should shop around to see who will offer the services you need. Here are some things you might want to look in
      a domain hosting service as a first-time website creator:
    </p>
    <h3>Technical assistance</h3>
    <p>
      There's always a chance that something will go wrong, and it's always nice to have an ear to turn to. Some domain
      hosting companies will offer technical assistance either online or by telephone for a fee or for free.
    </p>
    <h3>Website templates</h3>
    <p>
      If you don’t know how to program a website, or just don’t want to start your site from scratch, many domain
      hosting companies will off you templates you can use to build your site. Others will even give you software that
      lets you custom design your webpage easily without the trouble of programming, or will offer a professional
      website designer service for a fee.
    </p>
    <h3>Other software templates — blogs, photos, etc.</h3>
    <p>
      Your webpage can be... well just about anything you want! Many domain hosting companies can offer you special
      software that will help you publish some of the more common types of websites, such as blogs,{' '}
      <Link to="/articles/image-hosting/">imaging hosting</Link> and sharing,{' '}
      <Link to="/articles/online-stores/">online stores</Link>, and more.
    </p>
    <h3>Email addresses</h3>
    <p>
      A domain name is more than a website address — it gives you the rights to email addresses as well. If you register
      a domain name, say mydomain.com you have the right to all the email addresses that end with your domain, such as
      myemail@mydomain.com. If you want to make use of these email addresses, be sure that your domain hosting company
      makes it easy for you to do so.
    </p>
    <p>
      The largest sites that offer domain name registration and domain hosting are probably GoDaddy, 1&amp;1,
      Register.com, and Network Solutions. You can link to these and check out their services by typing the domain you
      want to register into the search field of <Link to="/">Instant Domain Search</Link> and clicking on the site you
      want under the extension you want — as long as it's available!
    </p>
  </Article>
);
