/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as actions from '../actions';
import * as analytics from '../analytics';
import * as colors from '../colors';
import * as font from '../font';
import domainLogo from '../images/hosting/domain.svg';
import godaddyLogo from '../images/hosting/godaddy.svg';
import shopifyLogo from '../images/hosting/shopify.svg';
import tailorLogo from '../images/hosting/tailor.svg';
import * as selectors from '../selectors';
import Icon from './Icon';
import Link from './Link';

const styles = {
  parent: css`
    background-color: ${colors.extraLightGray};
    position: relative;
  `,
  header: css`
    font-size: ${font.l}px;
    line-height: 24px;
    padding-bottom: 20px;
    text-align: center;
  `,
  contentBox: css`
    padding-top: 54px;
    padding-bottom: 54px;
    margin-left: auto;
    margin-right: auto;
    width: 800px;
  `,
  footer: css`
    margin-top: 30px;
    text-align: center;
  `,
  grayLink: css`
    color: ${colors.mediumDarkGray};
  `,
  clearButton: css`
    border-radius: 12px;
    cursor: pointer;
    display: block;
    position: absolute;
    right: 12px;
    stroke: ${colors.mediumDarkGray};
    top: 12px;

    &:hover {
      background: ${colors.mediumDarkGrayHover};
      stroke: ${colors.white};
    }
  `,
};

function HostingChooser() {
  const shown = useSelector(selectors.hostingChooserShown);

  React.useEffect(() => {
    shown && analytics.sawHostingChooser();
  }, [shown]);

  if (!shown) {
    return null;
  }

  // domain.com trial; replicated in domain.ts
  const last = analytics.getClientID().slice(-1);
  let firstSlot;
  if (last === '6' || last === '7' || last === '8' || last === '9') {
    firstSlot = (
      <li>
        <strong>Make a website</strong>
        <Link
          eventID="hosting"
          eventInfo="domain-com"
          eventType="convert"
          href={'https://www.tkqlhce.com/click-8955823-13685453'}
          rel="sponsored noopener noreferrer"
          target="_blank">
          <img alt="Domain.com Logo" src={domainLogo} />
          <span>Domain.com</span>
        </Link>
      </li>
    );
  } else {
    firstSlot = (
      <li>
        <strong>Make a website</strong>
        <Link
          eventID="hosting"
          eventInfo="godaddy"
          eventType="convert"
          href={'https://www.dpbolvw.net/click-8955823-13379824'}
          rel="sponsored noopener noreferrer"
          target="_blank">
          <img alt="Go Daddy Logo" src={godaddyLogo} />
          <span>Go Daddy</span>
        </Link>
      </li>
    );
  }

  return (
    <div className={styles.parent}>
      <Link
        eventID="hosting"
        eventInfo="close_icon"
        eventType="interact"
        href="##"
        onClick={actions.dismissHostingChooser}>
        <Icon className={styles.clearButton} name="Clear" />
      </Link>
      <div className={styles.contentBox}>
        <ul className="hosting">
          {firstSlot}
          <li>
            <strong>Start a store</strong>
            <Link
              eventID="hosting"
              eventInfo="shopify"
              eventType="convert"
              href={
                'https://www.shopify.com/free-trial?ref=instant-domain-search&utm_campaign=free-trial&utm_content=hosting'
              }
              rel="sponsored noopener noreferrer"
              target="_blank">
              <img alt="Shopify Logo" src={shopifyLogo} />
              <span>Shopify</span>
            </Link>
          </li>
          <li>
            <strong>Make a logo</strong>
            <Link
              eventID="hosting"
              eventInfo="tailor"
              eventType="convert"
              href={'https://tailorbrands.go2cloud.org/aff_c?offer_id=1&aff_id=1197&aff_sub=ids25'}
              rel="sponsored"
              target="_blank">
              <img src={tailorLogo} />
              <span>Tailor Brands</span>
            </Link>
          </li>
        </ul>
        <div className={styles.footer}>
          <Link
            className={styles.grayLink}
            eventID="hosting"
            eventInfo="more"
            eventType="interact"
            href="/hosting/"
            target="_self">
            More options
          </Link>{' '}
          &nbsp;{' '}
          <Link
            eventID="hosting"
            eventInfo="close_link"
            eventType="interact"
            href="#"
            onClick={actions.dismissHostingChooser}>
            Close
          </Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(HostingChooser);
