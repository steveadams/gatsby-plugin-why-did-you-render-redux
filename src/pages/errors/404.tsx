/* Copyright 2005-present Instant Domain Search, Inc. */

import {Link} from 'gatsby';
import * as React from 'react';

import Controller from '../../components/Controller';
import DomainResults from '../../components/DomainResults';
import Page from '../../components/Page';
import TwoColumnLayout from '../../components/TwoColumnLayout';
import * as routes from '../../routes';

export default (props: PageProps) => (
  <Page {...props} description="Page Not Available" title="Page Not Available">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <p>
            Sorry, the page you requested was not available. <Link to="/">Click here to go to the search page</Link>.
          </p>
        </>
        <></>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
