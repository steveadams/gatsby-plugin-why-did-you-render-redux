/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as analytics from '../analytics';
import * as colors from '../colors';
import {
  defaultActionURL,
  domainName,
  DomainStatus,
  equal,
  googleAnalyticsLabel,
  name,
  price,
  status,
  statusName,
} from '../domain';
import * as font from '../font';
import * as selectors from '../selectors';
import * as statusColors from '../statusColors';
import {desktop, mobile} from '../styles';
import Button from './Button';
import DomainStar from './DomainStar';
import Text from './Text';

const titleStyle = {
  title: css`
    color: ${colors.mediumDarkGray};
    display: inline-block;
    overflow: hidden;
    position: relative;
    text-overflow: ellipsis;
  `,
  highlight: css`
    font-weight: ${font.regular};
    color: ${colors.darkGray};
  `,
};

const styles = {
  root: css`
    display: block;
    line-height: 20px;
    position: relative;
  `,
  domain: css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    min-width: 100%;
    user-select: none;
    white-space: nowrap;
    &:focus {
      color: ${colors.white};
    }
    &:focus .${titleStyle.title} {
      color: ${colors.white};
    }
    &:focus .${titleStyle.highlight} {
      color: ${colors.white};
    }
    ${desktop} {
      &:hover {
        color: ${colors.white};
        display: inline-flex;
        position: relative;
        z-index: 1;
      }
      &:hover .${titleStyle.title} {
        color: ${colors.white};
        overflow: visible;
      }
      &:hover .${titleStyle.highlight} {
        color: ${colors.white};
      }
    }
    ${mobile} {
      border-radius: 0;
      &.tapped {
        color: ${colors.white};
      }
      &.tapped .${titleStyle.title} {
        color: ${colors.white};
      }
      &.tapped .${titleStyle.highlight} {
        color: ${colors.white};
      }
    }
  `,
  domainLoading: css`
    cursor: default;
    .${titleStyle.title} {
      color: ${colors.mediumGray};
    }
    .${titleStyle.highlight} {
      color: ${colors.mediumGray};
    }
    ${desktop} {
      &:hover .${titleStyle.title} {
        color: ${colors.mediumGray};
      }
      &:hover .${titleStyle.highlight} {
        color: ${colors.mediumGray};
      }
    }
  `,
  search: css`
    color: ${colors.darkGray};
    white-space: nowrap;
  `,
  right: css`
    padding-left: 16px;
    display: inline-block;
  `,
  selectedButton: css`
    color: ${colors.white};
    .${titleStyle.title} {
      color: ${colors.white};
    }
    .${titleStyle.highlight} {
      color: ${colors.white};
    }
  `,
};

function getButtonText(status: DomainStatus) {
  return {
    [DomainStatus.auction]: <Text id="auction" />,
    [DomainStatus.available]: <Text id="buy" />,
    [DomainStatus.expiring]: <Text id="backorder" />,
    [DomainStatus.recentlyDropped]: <Text id="buy" />,
    [DomainStatus.recentlyRegistered]: <Text id="buy" />,
    [DomainStatus.sale]: <Text id="buy" />,
    [DomainStatus.taken]: <Text id="whois" />,
  }[status];
}

const highlightedTitle = (domain: Domain, searchPhrase: string, category: Category) => {
  switch (category) {
    case 'tlds':
      return highlight(domainName(domain), `.${domain.tld}`);
    case 'suggestions':
    case 'generator':
      return [highlightExcept(name(domain), searchPhrase), `.${domain.tld}`];
    case 'forSale':
    case 'expiring':
      return highlight(domainName(domain), searchPhrase);
    case 'favorites':
      return highlightExcept(domainName(domain), `.${domain.tld}`);
  }
};

const highlight = (name: string, highlight: string) => {
  const re = new RegExp(`^(.*)(${highlight})(.*)$`);
  const match = re.exec(name);
  if (!match) return name;
  const [, prefix, mid, suffix] = match;
  return [
    prefix,
    <b key="0" className={titleStyle.highlight}>
      {mid}
    </b>,
    suffix,
  ];
};

const highlightExcept = (name: string, except: string) => {
  const re = new RegExp(`^(.*)(${except})(.*)$`);
  const match = re.exec(name);
  if (!match) return name;
  const [, prefix, mid, suffix] = match;
  return [
    <b key="0" className={titleStyle.highlight}>
      {prefix}
    </b>,
    mid,
    <b key="1" className={titleStyle.highlight}>
      {suffix}
    </b>,
  ];
};

type Category = 'expiring' | 'favorites' | 'forSale' | 'generator' | 'suggestions' | 'tlds';

interface DomainViewProps {
  domain: Domain;
  compact?: boolean;
  category: Category;
  location: analytics.ClickLocation;
  position: number;
}

function DomainView({domain, category, location, position}: DomainViewProps) {
  const onClick = React.useCallback(() => {
    analytics.click(domain, location, position);
  }, [domain, location, position]);

  const selectedDomain = useSelector(selectors.selectedDomain);
  const searchPhrase = useSelector(selectors.searchPhrase);
  const isMobile = useSelector(selectors.isMobile);

  const selected = (selectedDomain && equal(domain, selectedDomain)) || false;
  const buttonText = domain.isLoading ? '' : getButtonText(status(domain));
  const domainPrice = price(domain);

  return (
    <div className={cx(styles.root)}>
      <DomainStar domain={domain} />
      <Button
        className={cx(
          styles.domain,
          domain.isLoading && styles.domainLoading,
          !domain.isLoading && statusColors.hoverBackground[statusName(domain)],
          !domain.isLoading && statusColors.focusBackground[statusName(domain)],
          !domain.isLoading && statusColors.color[statusName(domain)],
          selected && !isMobile && statusColors.background[statusName(domain)],
          selected && !isMobile && styles.selectedButton,
        )}
        defaultColor={false}
        eventID={`click_${category}`}
        eventInfo={googleAnalyticsLabel(domain)}
        eventType="convert"
        eventValue={domain.price || 0}
        hoverStyle
        href={defaultActionURL(domain) || void 0}
        tag="a"
        rel="sponsored"
        target="_blank"
        onClick={onClick}>
        <div className={titleStyle.title}>{highlightedTitle(domain, searchPhrase, category)}</div>
        <div className={styles.right}>
          <span>{buttonText}</span>
          {buttonText && domainPrice && '\xa0'}
          {/* This span appears to work around a Preact bug with removing text */}
          {domainPrice && <span>{domainPrice}</span>}
        </div>
      </Button>
    </div>
  );
}

export default React.memo(DomainView);
