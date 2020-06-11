/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import React from 'react';

import * as colors from '../colors';
import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import {NotFoundIcon} from '../components/icons';
import Page from '../components/Page';
import WideLayout from '../components/WideLayout';
import * as routes from '../routes';

const styles = {
  notFoundWrapper: css`
    text-align: center;
    max-width: 560px;
    margin: 0 auto;
    padding: 60px 0;
  `,
  iconWrapper: css`
    position: relative;
    display: flex;
    justify-content: center;
    width: 300px;
    height: 300px;
    border-radius: 100%;
    margin: 0 auto 44px auto;
    background: ${colors.extraLightGray};
  `,
  icon: css`
    position: relative;
    bottom: 16px;
    align-self: center;
    color: ${colors.darkGray};
  `,
};

export default (props: PageProps) => (
  <Page {...props} description="404 | Computer says 404!" title="404 Not Found">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <WideLayout>
        <section className={styles.notFoundWrapper}>
          <div className={styles.iconWrapper}>
            <NotFoundIcon className={styles.icon} />
          </div>
          <h1>Computer says 404!</h1>
          <p>
            Ooops. That page doesnt seem to exist. Our team of expert developers have been woken up in the middle of the
            night by an army of badgers to fix this issue. They will reprimanded at the highest order.
          </p>
          <p>(not really, but you get the picture)</p>
        </section>
      </WideLayout>
    </Controller>
  </Page>
);
