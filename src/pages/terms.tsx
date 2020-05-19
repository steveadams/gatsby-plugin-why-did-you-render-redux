/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import WideLayout from '../components/WideLayout';
import * as routes from '../routes';

export default (props: PageProps) => (
  <Page {...props} title="Terms of Service" description="Terms of service for Instant Domain Search.">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <WideLayout>
        <h1>Terms of Service</h1>

        <p>
          THESE TERMS AND CONDITIONS ARE THE CONTRACT BETWEEN YOU AND INSTANT DOMAIN SEARCH. PLEASE READ THEM CAREFULLY
          BEFORE SIGNING UP FOR OR USING INSTANTDOMAINSEARCH.COM.
        </p>

        <p>
          By using the instantdomainsearch.com web site, a service of Instant Domain Search, Inc., ("Instant Domain
          Search"), you are agreeing to be bound by the following terms and conditions.
        </p>

        <p>In connection with your use of the service, you agree to:</p>

        <ul>
          <li>obey the law;</li>
          <li>obey any codes of conduct or other notices we provide you; and</li>
          <li>promptly notify us if you learn of a security breach related to the service.</li>
        </ul>

        <p>
          You are solely responsible for all uses of your account under your password. You must protect your password.
        </p>

        <p>
          You will provide us an email address, where we may contact you with information about your account or our
          products or services. It is your responsibility to ensure that your email address is entered correctly and is
          kept up to date.
        </p>

        <p>
          <strong>Your use of instantdomainsearch.com is at your sole risk.</strong> The service is provided on an "AS
          IS" and "as available" basis.
        </p>

        <p>
          Instant Domain Search makes no express or implied warranty of the quality or suitability of
          instantdomainsearch.com for any purpose.
        </p>

        <p>
          We will do our best to preserve and protect your data, but make no guarantees that it won’t get lost,
          corrupted, or inadvertently leaked. You should back up critical data or take other steps to protect your vital
          information.
        </p>

        <h3>Termination.</h3>

        <ul>
          <li>We reserve the right to terminate your account for any reason at any time.</li>
          <li>You may terminate your account at any time upon ten (10) days prior notice to us.</li>
        </ul>

        <p>
          You expressly agree that Instant Domain Search WILL NOT be liable for any indirect, incidental, special,
          consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use,
          data or other intangible losses (even if Instant Domain Search has been advised of the possibility of such
          damages), resulting from: (i) the use or the inability to use instantdomainsearch.com; (ii) the cost of
          procurement of substitute goods or services resulting from any goods, data, information or services purchased
          or obtained through or from instantdomainsearch.com; (iii) unauthorized access to or alteration of your
          transmissions or data; (iv) statements or conduct of any third party on instantdomainsearch.com; (v)
          termination of your account; or (vi) any other matter relating to instantdomainsearch.com. If you are not
          satisfied with instantdomainsearch.com, your sole and exclusive remedy is to stop using it. IN NO EVENT WILL
          Instant Domain Search BE LIABLE TO YOU FOR ANY AMOUNT IN EXCESS OF THE AMOUNT THAT YOU HAVE ACTUALLY PAID
          Instant Domain Search IN THE TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO YOUR CLAIM.
        </p>

        <p>
          The disclaimers and limitations of liability set forth in these terms and conditions are an essential basis of
          your bargain with Instant Domain Search for the use of instantdomainsearch.com.
        </p>

        <p>We reserve the right to modify the service at any time.</p>

        <p>
          You will indemnify, defend and hold Instant Domain Search, its officers, directors, employees, affiliates and
          service providers from any claim or cause of action of any kind whatsoever arising out of (a) any data,
          information or materials of any kind that are input or uploaded to the service using your account, and (b)
          your use of the service.
        </p>

        <p>
          From time to time you may give us suggestions or feedback about instantdomainsearch.com. If you do so, you
          hereby grant us an irrevocable, perpetual, royalty-free, fully paid-up, worldwide license to use such
          suggestions or feedback for any purpose.
        </p>

        <p>
          We reserve the right to modify these terms and conditions at any time upon notice to you, which we may make
          either by sending you mail (written or electronic) or posting the change on our website. You agree that any
          subsequent use of instantdomainsearch.com will constitute your acceptance of those modified terms and
          conditions going forward.
        </p>

        <p>
          Instant Domain Search will have the right to assign this Agreement to an affiliate of Instant Domain Search at
          any time without notice.
        </p>

        <p>
          These terms and conditions are the entire agreement between you and Instant Domain Search regarding the use of
          instantdomainsearch.com. No other communication, whether written or oral, will be deemed to supplement or
          supersede these terms and conditions unless made in writing and signed by both you and Instant Domain Search.
        </p>
      </WideLayout>
    </Controller>
  </Page>
);
