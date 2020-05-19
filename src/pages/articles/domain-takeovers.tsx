/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import Article from '../../components/Article';

export const frontmatter = {
  title: 'Domain Renewals',
  headline: 'Domain Takeovers',
  description:
    'Don’t let domain speculators takeover your online business! Learn to keep your domain yours with these simple tips',
  date: '2008-11-18',
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
      As you’ve read in <Link to="/articles/choosing-a-domain-name/">Master Of Your Domain Name</Link>, your website
      name can play a major role in the success of your webpage. Location matters, whether it's in the real world or the
      digital one, and you'd be surprised to see just how many parallels exist between the two. The Internet real estate
      market is sometimes as lucrative as the true one, so it isn’t surprising that some people have tried to profit
      from it. And just like real world real estate, some have done so less ethically than others.
    </p>

    <p>
      One of the most common ways domain speculators make money in today's online real estate market is domain
      takeovers. Your domain registration is just like a lease on your domain name. But unlike physical world rentals,
      digital property leasing leaves no room for any mistakes. If you forget to renew your domain name registration,
      your address immediately becomes publicly available for someone else to takeover, even if you already have a
      website uploaded. It's as if forgetting to pay your rent on time just once meant that your home was automatically
      emptied and put up for rent, all before you even had time to forward your mail — including your pay checks! When a
      domain name gets put back on the market, a domain spectator will pick it up as quickly as possible for two
      reasons. First, they hope you will be willing to pay big to get your domain back. Second, they can put advertising
      on what used to be your site to exploit your regular traffic too.
    </p>

    <p>
      You may be wondering how often these takeovers occur — are they really something you need to worry about? It's
      hard to say if your website is at high risk for being snatched, as it depends on a number of factors. However, to
      give you an idea of just how common this is, recent studies have estimated that up to one third of all domains are
      currently registered to speculators and similar Internet exploiters.
    </p>

    <h3>You can’t insure digital property, but you can ensure it...</h3>

    <p>
      So how do you make sure your domain stays in your hands? There's only one easy answer: keep an eye on your
      registration renewal dates and make sure that your registrar always has your current contact information,
      especially your email address. This way, not only can you foresee your renewal costs and budget accordingly, but
      your registrar will also be able to contact you to let you know exactly when and how to renew.
    </p>

    <p>
      If you ever do find that you’ve lost your domain, there may be some measures you can take to get it back,
      depending on where you are and who has taken it over. For example, the Internet Corporation for Assigned Names and
      Numbers (ICANN), which is the ultimate power in domain names, has set up a arbitration process for cases where a
      domain contains a trademark and has been clearly registered in bad faith. However, this arbitration can be an
      expensive and lengthy process, and sometimes it may be cheaper and better business to cut your losses and buy the
      domain back from the speculator. The best places to start are the ICANN website and your country's Internet
      regulation authority website. These can at least tell you whether there is anything to do and whether your case
      has a leg to stand on.
    </p>

    <p>
      Overall, the easiest and safest option is to have your domain automatically renew through your domain registrar.
      You can also choose to register your domain for up to ten years, which will mean you need to worry about renewal
      less often. Just remember though - a ten-year domain registration isn’t forever, and someone will always be
      waiting to takeover a successful domain.
    </p>
  </Article>
);
