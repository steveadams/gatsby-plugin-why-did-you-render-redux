/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import React from 'react';

import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Icon from '../components/Icon';
import Page from '../components/Page';
import WideLayout from '../components/WideLayout';
import * as routes from '../routes';

const styles = {
  notFoundWrapper: css`
    max-width: 560px;
    margin: 0 auto;
    padding: 60px 0;
    text-align: center;
  `,
  icon: css`
    width: 300px;
    height: 300px;
    margin: 0 auto 44px auto;
  `,
};

export default (props: PageProps) => (
  <Page {...props} description="500 | Computer says 500!" title="500 Server Error">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <WideLayout>
        <section className={styles.notFoundWrapper}>
          <Icon className={styles.icon} name="NotFound" />
          <h1>Computer says 500!</h1>
          <p>
            Ooops. Something broke. Our team of expert developers have been woken up in the middle of the night by an
            army of badgers to fix this issue. They will reprimanded at the highest order.
          </p>
          <p>(not really, but you get the picture)</p>
        </section>
      </WideLayout>
    </Controller>
  </Page>
);
