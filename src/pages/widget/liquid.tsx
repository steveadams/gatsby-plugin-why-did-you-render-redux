/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import Controller from '../../components/Controller';
import DomainResults from '../../components/DomainResults';
import Page from '../../components/Page';
import * as routes from '../../routes';

export default (props: PageProps) => (
  <Page {...props} title="Mobile Domains" description="Find domain names instantly by searching as you type.">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <p style={{textAlign: 'center'}}>Instantly check .com names for free.</p>
    </Controller>
  </Page>
);
