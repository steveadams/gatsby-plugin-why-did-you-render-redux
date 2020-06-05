/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import {ChevronIcon, LongRightArrowIcon} from '../components/icons';
import Page from '../components/Page';
import WideLayout from '../components/WideLayout';
import * as routes from '../routes';

const styles = {
  row: css`
    display: flex;
    align-content: center;
    justify-content: space-around;
    margin: 16px auto;
    padding: 16px 0;
    border-top: 1px solid ${colors.extraLightGray};
    border-bottom: 1px solid ${colors.extraLightGray};
  `,
};

export default (props: PageProps) => (
  <Page {...props} description="Instant Domain Search UI Kit" title="UI Kit">
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <WideLayout>
        <h1>Instant Domain Search UI Kit</h1>

        <section>
          <h2>Buttons</h2>
          <div className={styles.row}>
            <Button>
              <span>Primary Button</span> <LongRightArrowIcon />
            </Button>
            <br />
            <BackButton />
            <br />
            <Button>
              <span>Mobile Nav</span> <ChevronIcon />
            </Button>
            <br />
            <Button textButton={true}>
              <span>Text Button</span> <LongRightArrowIcon />
            </Button>
          </div>
        </section>
      </WideLayout>
    </Controller>
  </Page>
);
