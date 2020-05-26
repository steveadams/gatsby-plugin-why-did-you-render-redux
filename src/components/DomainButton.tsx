/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as analytics from '../analytics';
import * as colors from '../colors';
import {defaultActionURL, DomainStatus, price, status, statusName} from '../domain';
import * as font from '../font';
import * as selectors from '../selectors';
import * as statusColors from '../statusColors';
import Button from './Button';
import Text from './Text';

const styles = {
  button: css`
    display: inline-block;
    vertical-align: middle;
    border-radius: 4px;
  `,
  selectedButton: css`
    color: ${colors.white};
  `,
  price: css`
    font-weight: ${font.extraLight};
  `,
};

interface DomainButtonProps {
  location: analytics.ClickLocation;
  className?: string;
  domain: Domain;
  eventID?: string;
  eventInfo?: string;
  eventType?: string;
  eventValue?: number;
  focused?: boolean;
  hidePrice?: boolean;
  hideText?: boolean;
  hoverStyle?: boolean;
  onClick?: (event: MouseEvent) => void;
  selected?: boolean;
}

function DomainButton({
  className,
  domain,
  eventID,
  eventInfo,
  eventType,
  eventValue,
  focused,
  hidePrice = false,
  hideText = false,
  hoverStyle = false,
  location,
  selected = false,
}: DomainButtonProps) {
  const isMobile = useSelector(selectors.isMobile);

  const onClick = React.useCallback(() => {
    analytics.firstConvert();
    analytics.click(domain, location);
  }, [domain, location]);

  let buttonText: React.ReactNode = {
    [DomainStatus.auction]: <Text id="auction" />,
    [DomainStatus.available]: <Text id="buy" />,
    [DomainStatus.expiring]: <Text id="backorder" />,
    [DomainStatus.recentlyDropped]: <Text id="buy" />,
    [DomainStatus.recentlyRegistered]: <Text id="buy" />,
    [DomainStatus.sale]: <Text id="buy" />,
    [DomainStatus.taken]: <Text id="whois" />,
  }[status(domain)];

  if (!buttonText) return null;

  const domainPrice = hidePrice ? null : price(domain);
  if (hideText && domainPrice) {
    buttonText = null;
  }

  return (
    <Button
      className={cx(
        className,
        styles.button,
        statusColors.hoverBackground[statusName(domain)],
        statusColors.focusBackground[statusName(domain)],
        (!hoverStyle || (selected && !isMobile)) && statusColors.background[statusName(domain)],
        hoverStyle && statusColors.color[statusName(domain)],
        selected && !isMobile && styles.selectedButton,
      )}
      defaultColor={false}
      eventID={eventID}
      eventInfo={eventInfo}
      eventType={eventType}
      eventValue={eventValue}
      focused={focused}
      hoverStyle={hoverStyle}
      href={defaultActionURL(domain) || void 0}
      onClick={onClick}
      tag="a"
      rel="sponsored"
      target="_blank">
      {buttonText}
      {buttonText && domainPrice && '\xa0'}
      <span className={cx(!hoverStyle && styles.price)}>{domainPrice}</span>
    </Button>
  );
}

export default React.memo(DomainButton);
