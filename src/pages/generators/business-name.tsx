/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';

import * as colors from '../../colors';
import Alternates from '../../components/Alternates';
import Button from '../../components/Button';
import Column from '../../components/Column';
import Controller from '../../components/Controller';
import DomainGenerator from '../../components/DomainGenerator';
import Explainer from '../../components/Explainer';
import Icon from '../../components/Icon';
import IconGroup from '../../components/IconGroup';
import Page from '../../components/Page';
import WideLayout from '../../components/WideLayout';
import * as font from '../../font';
import * as routes from '../../routes';

const styles = {
  tryItWrapper: css`
    max-width: 816px;
    margin: 0 auto;
    text-align: center;
  `,
  tryItDescription: css`
    padding: 0 48px;
    font-size: ${font.xs}px;
  `,
  // TODO: Make small button variation, white button variation (Used in Toast as well)
  tryItButton: css`
    display: inline-block;
    margin: 16px 16px 0 0;
    padding: 6px 12px;
    color: ${colors.darkGray};
    font-size: ${font.xs}px;
    background-color: ${colors.white};

    &:hover {
      color: ${colors.mediumDarkGray};
    }

    svg {
      width: 0.8em;
      height: 0.8em;
      margin-left: 4px;
    }
  `,
};

export default (props: PageProps) => (
  <Page
    {...props}
    description="Generate thousands of business names instantly. Shows domain name availability as you type. Buy premium names to build the perfect brand."
    title="Business Name Generator">
    <Alternates />
    <Controller page={routes.Page.BusinessNameGenerator} results={<DomainGenerator />}>
      <WideLayout>
        <Explainer title="Business Name Generator">
          <p>
            There’s a lot to consider when picking a name for your business, and checking available domain names is a
            great place to start. Since a lot of common phrases have already been claimed, it’s a good idea to see if
            your business name is available before you make it official. This site will make the process of finding a
            business name easy and enjoyable.
          </p>
          <p>
            With the business name generator, all you need to do is start typing in the box above. From the first letter
            you enter, you’ll start seeing business name options. And with every letter after that, your results will
            get more and more refined. There’s no faster or more convenient way to search for business names on the
            internet.
          </p>
        </Explainer>

        <Column>
          <IconGroup eventInfo="creative_business_names_h3" icon="Names" title="Creative business names">
            The key to creating a successful business name is to make it interesting. Nike is more clever than Bob’s
            Running Shoes. Twitter is more memorable than Short Message Service. The business name generator will help
            you identify a list of names that make you stand out.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup
            eventInfo="domain_generator_h3"
            href="/domain/generator/"
            icon="DomainNameGenerator"
            title="Domain name generator">
            Even if you have an established business name, you can still use the box above to find a suitable domain
            name. If the exact words in your name are already claimed, you’ll see what your options are to purchase it
            from them. You can also experiment with abbreviations and variations of your business name until you find
            the best solution.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup eventInfo="business-name_ai_h3" icon="AI" title="AI-powered name generation">
            Trying to create a list of business names from scratch can be a difficult process without ideas to inspire
            you. The business name generator doesn’t rely on a static list of options based on common phrases. It’s
            AI-powered name generation looks for patterns among similar terms across domain names to give you
            high-quality recommendations you won’t find anywhere else.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup
            eventInfo="business-name_random_h3"
            href="/generators/random/"
            icon="Random"
            title="Random name generator">
            If you develop writer’s block when searching for a domain name, one solution to work through it is to type
            random words into the search box above. With every letter you type, you’ll get a new list of business name
            recommendations. Depending on the results you get, they may spark some ideas for possible names you can use
            for your business. Give it a shot!
          </IconGroup>
        </Column>
      </WideLayout>

      <WideLayout>
        <div className={styles.tryItWrapper}>
          <h2>Try it now</h2>
          <p className={styles.tryItDescription}>
            Want to get started even faster? Click the business type listed below that is closest to your own. You'll
            immediately see a list of relevant business names to help you narrow your search.
          </p>

          {[
            'Flower Shop',
            'Yoga Instructor',
            'Home Renovations',
            'Pizza Delivery',
            'Tech Startup',
            'Chiropractor',
            'Real Estate Sales',
            'Web Design',
            'Landscaping',
          ].map(text => (
            <Button
              className={styles.tryItButton}
              href={`/generators/business-name/#search=${text.toLowerCase().replace(' ', '%20')}`}
              key={text}
              tag="a">
              {text} <Icon name="ArrowRight" />
            </Button>
          ))}
        </div>
      </WideLayout>

      <WideLayout>
        <Column>
          <IconGroup
            eventInfo="domain_extensions_h3"
            href="/domain/extensions/"
            icon="Extensions"
            title="Domain name registration">
            We automatically apply a discount when you register your first .com at GoDaddy. Visa, MasterCard, AMEX, and
            PayPal are accepted.
          </IconGroup>
        </Column>

        <Column>
          <IconGroup
            eventInfo="domain_generator_h3"
            href="/generators/business-name/"
            icon="Lock"
            title="Private and secure">
            All traffic to the site is encrypted. Domain search results are not recorded. Press Return to register your
            domain name. We use Google Analytics, which uses cookies, to see how you use this website over time.
          </IconGroup>
        </Column>
      </WideLayout>
    </Controller>
  </Page>
);
