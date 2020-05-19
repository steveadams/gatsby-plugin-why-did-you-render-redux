/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import Article from '../../components/Article';

export const frontmatter = {
  title: 'How To Search For A Domain Name',
  headline: 'How To Search For A Domain Name',
  description:
    'How to search for a domain name for your new website: Learn how to pick a name a domain, name a website, and choose your domain.',
  date: '2008-11-18',
  authors: [
    {name: 'Beau Hartshorne', link: 'mailto:beau@instantdomainsearch.com'},
    {
      name: 'Mike Dascal',
      link: 'http://www.mykcreative.com/',
    },
  ],
};

export default (props: PageProps) => (
  <Article {...props} frontmatter={frontmatter}>
    <p>
      If you haven’t done so yet, it's time to find your place online! And one of the very first things that you'll have
      to do is establish your electronic address — your domain name. When you make a website, it must act as your
      storefront, your salespeople, your customer service desk, your news board, and so much more. You should treat your
      website just as you would treat any business, and so the ancient rule still applies: “the three most important
      aspects of opening a new business are location, location, and location”.
    </p>

    <p>
      So how do you <Link to="/">find a domain name</Link>? There's no fool-proof way, but we’ve compiled a list of some
      things you should think about here:
    </p>

    <h3>Domain names vs. business names</h3>

    <p>
      Although though your website or business and your domain name don’t necessarily need to be the same, making sure
      they’re similar is generally a good move. Think about how websites enter our speech, such as “Google”. Now
      consider how difficult it might be to find these sites if their domain names were nothing like their business
      name, for example if Google was found at “the-most-successful-search-engine-ever.info.”
    </p>

    <h3>Length</h3>

    <p>
      Your domain name shouldn’t be too short or too long. It's easy to see why you don’t want your domain name to be
      too long — not only do words in long domain names become difficult to read, but the domain names are also easily
      forgotten altogether. It may seem strange, but short names can sometimes be just as bad — especially if you use a
      long acronym that seems like a random collection of letters.
    </p>

    <table>
      <tbody>
        <tr>
          <td>Too long</td>
          <td>www.howtochoosethebestdomainforyourwebsite.com</td>
        </tr>
        <tr>
          <td>Too short</td>
          <td>www.htcadn.com</td>
        </tr>
        <tr>
          <td>Just right</td>
          <td>www.chooseadomain.com</td>
        </tr>
      </tbody>
    </table>

    <h3>Specificity</h3>

    <p>
      If the everyday web surfer was looking to buy a shirt and wanted to find info online, s/he probably would probably
      start at a search engine, such as google.com, and would type the name of a shop, or a kind of shop, and a
      location, such as “clothing store San Francisco”. S/he probably wouldn’t search for just “shirts” because s/he
      knows that the results won’t be what s/he's looking for. When you’re creating your domain name, think about what
      your clients may type into search engine. If your domain name is made up of words that people type into their
      search engines, or keywords, you’re much more likely to appear near the top of their search results list, and more
      likely to get customers.
    </p>

    <table>
      <tbody>
        <tr>
          <td>Too specific</td>
          <td>www.ChooseYourNewDomainName.com</td>
        </tr>
        <tr>
          <td>Too general</td>
          <td>www.naming.com</td>
        </tr>
        <tr>
          <td>Just right</td>
          <td>www.chooseadomain.com</td>
        </tr>
      </tbody>
    </table>

    <h3>Extensions</h3>

    <p>
      Ignoring the www., every domain name has two parts to it — the text before the 'dot', which is the main part of
      the domain name, and the extension after it. The extension you chose can work both for and against you. For
      example, imagine you’ve picked chooseadomain as your website name, but find the chooseadomain.com domain name
      isn’t available. You might register the chooseadomain.net domain name instead. This allows you to keep your
      original name, which is good, but you also run a certain risk of people typing in the more common .com suffix when
      they try to find your website. This can be a problem if the chooseadomain.com name belongs to one of your
      competitors. Consider all your options when you pick your extensions, and be sure that you specify your entire
      domain name when you talk about it — especially if you aren’t a .com.
    </p>

    <table>
      <tbody>
        <tr>
          <td>.com</td>
          <td>Primarily commercial enterprises, but open to anyone</td>
        </tr>
        <tr>
          <td>.org</td>
          <td>Non-profit organizations</td>
        </tr>
        <tr>
          <td>.net</td>
          <td>Originally for Internet service providers</td>
        </tr>
        <tr>
          <td>.info</td>
          <td>Informational sites</td>
        </tr>
        <tr>
          <td>.mobi</td>
          <td>Websites that are meant to be viewed on mobile devices, like cellphones or Blackberrys</td>
        </tr>
      </tbody>
    </table>

    <p>
      Once you’ve found a domain name, the next step is to make sure it's not already registered by doing a{' '}
      <Link to="/">domain name search</Link>. If it's available, then just follow their link to a domain name
      registration and hosting site and you'll have your very own domain in minutes!
    </p>
  </Article>
);
