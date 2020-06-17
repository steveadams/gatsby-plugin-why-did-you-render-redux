/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import Button from '../components/Button';
import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Icon, {IconName, icons} from '../components/Icon';
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
  icons: css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-template-rows: repeat(6, 1fr);
    grid-auto-flow: dense;
    grid-gap: 16px;
    grid-auto-rows: 1fr;
    text-align: center;

    li {
      margin-bottom: 32px;

      pre {
        background: none;
        margin-top: 16px;
      }
    }
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
              <span>Primary Button</span> <Icon name="ArrowLeft" />
            </Button>
            <br />
            <Button>
              <Icon name="ArrowLeft" /> <span>Back</span>
            </Button>
            <br />
            <Button>
              <span>Mobile Nav</span> <Icon name="Chevron" />
            </Button>
            <br />
            <Button textButton={true}>
              <span>Text Button</span> <Icon name="ArrowRight" />
            </Button>
          </div>

          <h2>Icons</h2>
          <div className={styles.row}>
            <ul className={styles.icons}>
              {Object.keys(icons)
                .filter(
                  k => k && !['Circle', 'Chevron', 'ChevronRight', 'Clear', 'ArrowLeft', 'ArrowRight'].includes(k),
                )
                .map(key => (
                  <li key={key}>
                    <Icon name={key as IconName} round />
                    <pre>{key}</pre>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </WideLayout>
    </Controller>
  </Page>
);
