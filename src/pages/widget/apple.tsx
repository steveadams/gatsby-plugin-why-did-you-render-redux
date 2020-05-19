/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Controller from '../../components/Controller';
import DomainResults from '../../components/DomainResults';
import Page from '../../components/Page';
import TwoColumnLayout from '../../components/TwoColumnLayout';
import * as routes from '../../routes';

export default (props: PageProps) => (
  <Page
    {...props}
    title="Mac OS X Domain Name Widget"
    description="Instantly checks .com domain name availability as you type. Works on Mac OS X.">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <TwoColumnLayout>
        <>
          <h1>Mac OS X Dashboard Widget</h1>
          <p>Sorry, we’ve discontinued the OS X Dashboard Widget.</p>
        </>
        <></>
      </TwoColumnLayout>
    </Controller>
  </Page>
);
