/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';

import {ClickLocation} from '../analytics';
import * as colors from '../colors';
import {defaultActionURL, DomainStatus, googleAnalyticsLabel, price, status, statusName} from '../domain';
import * as font from '../font';
import * as statusColors from '../statusColors';
import {mobile} from '../styles';
import Button from './Button';
import Text from './Text';

const actionStyles = {
  action: css`
    right: 8px;
    margin-left: 4px;
    color: ${colors.white};
    white-space: nowrap;
    text-transform: uppercase;
    visibility: hidden;
  `,
};

const styles = {
  loadingColor: css`
    color: ${colors.lightGray};
    &:hover {
      color: ${colors.lightGray};
    }
  `,
  defaultColor: css`
    color: ${colors.mediumDarkGray};
    &:hover {
      color: ${colors.mediumDarkGray};
    }
  `,
  root: css`
    position: relative;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    min-width: 100%;
    margin-top: 8px;
    margin-bottom: 8px;
    font-size: ${font.xs}px;
    user-select: none;

    &:hover {
      z-index: 1;
      display: inline-flex;
      color: ${colors.white};

      & .${actionStyles.action} {
        visibility: visible;
      }
    }

    ${mobile} {
      padding: 10px 8px;
    }
  `,
};

interface TldViewProps {
  tld: string;
  domain: Domain | null;
  className?: string;
  position: ClickLocation;
}

function TldView({domain, tld, className}: TldViewProps) {
  const getAction = (domain: Domain) => {
    switch (status(domain)) {
      case DomainStatus.available:
      case DomainStatus.recentlyDropped:
      case DomainStatus.recentlyRegistered:
        return <Text id="buy" />;
      case DomainStatus.taken:
        return <Text id="whois" />;
      case DomainStatus.auction:
        return <Text id="makeOffer" />;
      case DomainStatus.expiring:
        return <Text id="backorder" />;
      case DomainStatus.sale:
        return price(domain);
    }
  };

  const s = domain ? statusName(domain) : null;
  const free = domain && status(domain) === DomainStatus.available;
  const available = domain && (free || status(domain) === DomainStatus.sale || status(domain) === DomainStatus.auction);
  const taken = domain && status(domain) === DomainStatus.taken;

  return (
    <Button
      className={cx(
        className,
        styles.root,
        !s && styles.loadingColor,
        taken && styles.defaultColor,
        s && !taken && !available && s && statusColors.color[s],
        s && statusColors.focusBackground[s],
        available && s && statusColors.background[s],
        s && statusColors.hoverBackground[s],
      )}
      defaultColor={false}
      eventID="click_extended"
      eventInfo={domain ? googleAnalyticsLabel(domain) : void 0}
      eventType="convert"
      hoverStyle
      href={(domain && defaultActionURL(domain)) || void 0}
      rel="sponsored"
      tag="a"
      target="_blank">
      .{tld}
      {domain && <span className={actionStyles.action}>{getAction(domain)}</span>}
    </Button>
  );
}

export default React.memo(TldView);