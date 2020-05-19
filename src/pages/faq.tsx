/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import TwoColumnLayout from '../components/TwoColumnLayout';
import * as routes from '../routes';

const context = React.createContext(false);

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\w]+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function Question({children}: {children: string}) {
  const toc = React.useContext(context);
  return toc ? (
    <li>
      <a href={`#${slugify(children)}`}>{children}</a>
    </li>
  ) : (
    <h3 id={slugify(children)}>{children}</h3>
  );
}

function Answer({children}: {children: JSX.Element | JSX.Element[]}) {
  const toc = React.useContext(context);
  if (toc) return null;
  return children as JSX.Element;
}

function FAQ({toc = false}: {toc?: boolean}) {
  return (
    <context.Provider value={toc}>
      <Question>How does Instant Domain Search make money?</Question>

      <Answer>
        <p>
          We make money when you buy domain names through one of the registrars we link to. These referral fees are what
          keep the site running.
        </p>
      </Answer>

      <Question>What is your privacy policy concerning my search results?</Question>

      <Answer>
        <p>
          We do not share your search results with anyone. We do live EPP queries with VeriSign (the administrator of
          the .com TLD) on .com names that are not in the zone files to make sure they are still available to register.
          We make money when someone buys a name they found on our site through one of our listed vendors. We’re not in
          the domain resale business.
        </p>
      </Answer>

      <Answer>
        <p>
          We try to select the best vendors in the industry, but we cannot be held responsible for their use or misuse
          of your domain searches once you click on their link from our site.
        </p>
      </Answer>

      <Answer>
        <p>
          Instant Domain Search encrypts all of your searches with HTTPS to prevent others on your network from reading
          your searches.
        </p>
      </Answer>

      <Question>How does Instant Domain Search work?</Question>

      <Answer>
        <p>
          We download huge lists of registered names from VeriSign and other gTLD providers every night. Almost all
          domain names that are in use are included in these lists, called zone files. We index the zone files, and host
          the indexes in data centers around the world. For gTLDs whose zone files we do not have access to, we do a DNS
          query to check availability. We also do a live query with VeriSign directly for .com domain names to see if
          their status has changed since we indexed the zone file, or if they are in a state that would exclude them
          from the zone file.
        </p>
      </Answer>

      <Answer>
        <p>
          When you first visit our web site, we determine which of our servers is closest to you, and set up a secure
          link from your browser to our server. As you type, we search our index for the exact match, and also try to
          come up with useful suggestions that you may also be interested in buying.
        </p>
      </Answer>

      <Answer>
        <p>
          The availability and suggestion server is written in C++, and exposed to the internet with Go. The site is
          hosted on <a href="https://cloud.google.com/">Google Cloud Platform</a>.
        </p>
      </Answer>

      <Question>The name I found shows as available on your site but it really isn’t. Why?</Question>

      <Answer>
        <p>From time to time, we will list names as available when they’ve already been taken. This can happen when:</p>
        <ul>
          <li>The name’s ownership is being disputed.</li>
          <li>It’s about to expire.</li>
          <li>It’s in the “Redemption Period” i.e., it recently expired.</li>
          <li>The name has no nameservers.</li>
        </ul>
      </Answer>

      <Answer>
        <p>
          On the other hand, we should never report a name as taken when it’s actually available. We only show names as
          taken when they are in good standing and have nameservers associated with them.
        </p>
      </Answer>

      <Question>How do you choose a good domain name?</Question>

      <Answer>
        <p>
          Read our article <Link to="/articles/choosing-a-domain-name/">How To Search For A Domain Name</Link>.
        </p>
      </Answer>

      <Question>Somebody stole a domain I found on your site. How can I resolve this?</Question>

      <Answer>
        <p>
          This is probably a coincidence. Millions of domains are registered and expire every day. Please take note of
          the date and time of your search. Then compare it to the actual date and time the domain was registered. We
          care about your <a href="#what-is-your-privacy-policy-concerning-my-search-results">privacy</a>.
        </p>
      </Answer>

      <Question>What are other people saying about Instant Domain Search?</Question>

      <Answer>
        <p>
          <a href="https://adage.com/article/the-media-guy/media-guy-s-pop-pick-instant-domain-search/114445/">
            Advertising Age
          </a>
          : “A nifty, real-time platform for brand-name brainstorming.”
        </p>
      </Answer>
    </context.Provider>
  );
}

export default (props: PageProps) => (
  <Page
    {...props}
    title="Frequently Asked Questions"
    description="Frequently asked questions and privacy information for Instant Domain Search.">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Frequently Asked Questions</h1>
          <FAQ />
        </>
        <>
          <h4>FAQ Index</h4>
          <ul className="index">
            <FAQ toc />
          </ul>
        </>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
