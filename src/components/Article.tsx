/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../colors';
import Controller from '../components/Controller';
import DomainResults from '../components/DomainResults';
import Page from '../components/Page';
import * as font from '../font';
import * as routes from '../routes';
import {desktop, mobile} from '../styles';
import Button from './Button';
import Icon from './Icon';
import Text from './Text';

const styles = {
  container: css`
    max-width: 800px;
    margin-right: auto;
    margin-left: auto;
    font-weight: ${font.regular};

    ${desktop} {
      margin-top: 36px;
      margin-bottom: 64px;
      padding-right: 32px;
      padding-left: 32px;
    }

    ${mobile} {
      margin-top: 16px;
      margin-bottom: 48px;
      padding-top: 16px;
      padding-right: 16px;
      padding-left: 16px;
    }
  `,
  backButton: css`
    display: inline-block;
    margin-bottom: 32px;
  `,
  header: css`
    margin-bottom: 16px;
  `,
  publishedDate: css`
    color: ${colors.mediumDarkGray};
    font-size: ${font.xs}px;
  `,
};

export default ({
  frontmatter: {title, description, headline, date},
  children,
  ...props
}: PageProps & {
  frontmatter: {title: string; headline: string; description: string; date: string};
  children: React.ReactNode;
}) => (
  <Page {...props} description={description} title={title}>
    <Controller page={routes.Page.Home} results={<DomainResults showTlds />}>
      <div className={styles.container} itemScope itemType="http://schema.org/TechArticle">
        {/* TODO probably want to point this to /articles, but will need localization */}
        <Button className={styles.backButton} onClick={() => history.back()}>
          <Icon name="ArrowLeft" />{' '}
          <span>
            <Text id="back" />
          </span>
        </Button>

        <h1 className={styles.header}>{headline}</h1>
        <p className={styles.publishedDate}>
          Published{' '}
          <time dateTime={date} itemProp="datePublished">
            {new Date(date).toLocaleDateString('en-US')}
          </time>
        </p>
        <div itemProp="articleBody">{children}</div>
      </div>
    </Controller>
  </Page>
);
