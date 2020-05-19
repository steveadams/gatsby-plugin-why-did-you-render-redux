/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import WideLayout from '../components/WideLayout';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page {...props} title="Privacy Policy" description="Privacy Policy for Instant Domain Search.">
    <Controller header="Privacy Policy" page={routes.Page.Home} results={<DomainResults showTlds />}>
      <WideLayout>
        <h1>Privacy Policy</h1>

        <p>
          This Privacy Policy describes how we treat personal information when you visit our site and use our products
          and services. This Privacy Policy applies to all of the products, services and websites (collectively,
          "Services") offered by Instant Domain Search, Inc. ("us", "we", "our", "Instant Domain Search"), or its
          subsidiaries or affiliated companies.
        </p>

        <p>
          <strong>
            If you have any questions or concerns about this Privacy Policy, please feel free to contact us any time at{' '}
            <a href="mailto:help@instantdomainsearch.com">help@instantdomainsearch.com</a>.
          </strong>
        </p>

        <h2>Summary</h2>

        <p>
          Our web servers automatically log your IP address and information about your web browser. This helps us find
          people who abuse the service. We retain this information for 30 days. We use Google Analytics and Google
          Optimize to see how you use the site. Google and Facebook set cookies automatically when you visit our
          website. These cookies help to collect analytics, and help us send relevant ads to you on other sites. When
          you leave our web site by clicking on a link, we include a unique ID provided by Google Analytics. That lets
          us track whether certain devices, for example, make a purchase our partner web sites. All this seems pretty
          reasonable to us. Please email <a href="mailto:help@instantdomainsearch.com">help@instantdomainsearch.com</a>{' '}
          to let us know what we could do better.
        </p>

        <h2>Information We Collect</h2>

        <ul>
          <li>
            <p>
              <strong>Cookies:</strong> As you browse Instant Domain Search’s website, cookies will be automatically
              placed on your computer so that we can understand what you are interested in. Google Ads, Google
              Analytics, and Google Optimize (<a href="https://policies.google.com/privacy">Privacy Policy</a>) will
              place cookies on your computer to see how you use the site over time. Facebook will place cookies (
              <a href="https://www.facebook.com/policies/cookies/">Cookie Policy</a>)on your computer to help show you
              relevant ads on Facebook and other sites. Our affiliate partner, Conversant, LLC. (
              <a href="https://www.conversantmedia.com/legal/privacy/">Privacy Policy</a>), will use cookies to track
              purchases made when you click on any link or press enter or return and make a purchase at one of our
              partners.
            </p>
          </li>

          <li>
            <p>
              <strong>Log information:</strong> When you access our Services, our servers automatically record
              information that your browser sends whenever you visit a website. These server logs may include
              information such as your web request, Internet Protocol address, browser type, browser language, the date
              and time of your request and one or more cookies that may uniquely identify your browser. We use this
              information in aggregate to help understand what types of devices use the Service, and to help detect
              abuse of the Service. We retain this information for 30 days.
            </p>
          </li>

          <li>
            <p>
              <strong>Event logging:</strong> When you access our Services, our servers automatically record information
              related to how you use the web site. We do not link this information to your IP address, and instead link
              it to a random number that we assign to your web browser. We keep event logging information indefinitely
              to help improve our products. This helps us understand, for example, how someone who visits the site every
              day uses the web site compared to how someone uses the site on their first visit.
            </p>
          </li>

          <li>
            <p>
              <strong>User communications:</strong> When you send email or other communications to us, we may retain
              those communications in order to process your inquiries, respond to your requests and improve our
              services. We offer some of our services in connection with other websites. Personal information that you
              provide to those sites may be sent to Instant Domain Search in order to deliver the service. We process
              such information in accordance with this Privacy Policy. The affiliated sites may have different privacy
              practices and we encourage you to read their privacy policies.
            </p>
          </li>

          <li>
            <p>
              <strong>Other sites:</strong> This Privacy Policy applies to Instant Domain Search and Instant Domain
              Search’s other Services only. We do not exercise control over the sites displayed as links from our
              Services. These other sites may place their own cookies or other files on your computer, collect data or
              solicit personal information from you.
            </p>
          </li>
        </ul>

        <h2>How we Use collected Information</h2>

        <p>
          Instant Domain Search only processes personal information for the purposes described in this Privacy Policy
          and/or any specific notices given for specific Services. Such purposes include:
        </p>

        <ul>
          <li>Providing Services to our users;</li>
          <li>Research and analysis in order to maintain, protect and improve our services;</li>
          <li>Ensuring the technical functioning of our network; and</li>
          <li>Developing new services.</li>
        </ul>

        <p>
          If you provide us with personal information when you sign up to our Services and we use that information in a
          manner different than the purpose for which it was collected, then we will ask for your consent prior to such
          use.
        </p>

        <p>
          Instant Domain Search processes personal information on servers in Canada, the United States of America and in
          other countries. In some cases, we process personal information on a server outside your own country. We may
          process personal information to provide our own Services.
        </p>

        <h2>Your Choices</h2>

        <p>
          Our Services may allow you to opt-out of certain information gathering and sharing or to opt-out of certain
          Services or features. You will be explained how to do so at each occasion where you have such choices.
        </p>

        <h2>Information Sharing</h2>

        <p>
          We may share your information with third parties we use to perform certain functions, such as hosting. These
          parties will be contractually bound to treat your information in accordance with this Privacy Policy and any
          other confidentiality and security measures instructed by us. Otherwise, we will only share your information
          if we have your consent, or, we have a good faith belief that access, use, preservation or disclosure of such
          information is reasonably necessary to (a) comply with legal process or enforceable governmental request, (b)
          enforce applicable Terms of Use, including investigation of potential violations thereof, (c) detect, prevent,
          or otherwise address fraud, security or technical issues, or (d) protect against imminent harm to the rights,
          property or safety of Instant Domain Search, its users or the public as required or permitted by law.
        </p>

        <p>
          If Instant Domain Search becomes involved in a merger, acquisition, or any form of sale of some or all of its
          assets, we will provide notice before personal information is transferred and becomes subject to a different
          privacy policy.
        </p>

        <h2>Accessing, updating, and deleting personal information</h2>

        <p>
          When you use Instant Domain Search’s Services, we will make efforts to provide you with reasonable access to
          your personal information, so that such data can be either updated or deleted at your request if it is not
          otherwise required to be retained by law or for legitimate business purposes. We ask users to identify
          themselves and the information requested to be accessed processing such requests. We may decline to process
          unreasonable requests, requests which require disproportionate technical effort, jeopardize the privacy of
          others, or would be extremely impractical, or for which access is not otherwise required. Please contact us at{' '}
          <a href="mailto:help@instantdomainsearch.com">help@instantdomainsearch.com</a> if you would like access to
          whatever information we are able to associate with you, or if you would like us to delete any information we
          are able to associate with you.
        </p>

        <p>
          Where we provide information access and correction, we perform this service free of charge, unless if doing so
          would require a disproportionate effort.
        </p>

        <h2>More Information</h2>

        <p>
          If you have any questions or concerns about this Privacy Policy, please feel free to contact us any time at{' '}
          <a href="mailto:help@instantdomainsearch.com">help@instantdomainsearch.com</a>.
        </p>
      </WideLayout>
    </Controller>
  </Page>
);
