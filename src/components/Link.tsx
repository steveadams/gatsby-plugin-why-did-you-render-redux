/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import * as analytics from '../analytics';

type LinkProps = {
  eventType: string;
  eventID: string;
  eventInfo: string;
  eventValue?: number;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

function Link({onClick: onClickProp, eventType, eventID, eventInfo, eventValue, children, ...props}: LinkProps) {
  const onClick = React.useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      if (eventType && eventID) {
        analytics.event(eventType, eventID, eventInfo, eventValue);
        analytics.firstConvert();
      }
      if (onClickProp) {
        onClickProp(event);
      }
    },
    [eventType, eventID, eventInfo, eventValue, onClickProp],
  );

  return (
    <a role="link" target="_blank" {...props} onClick={onClick}>
      {children}
    </a>
  );
}

export default React.memo(Link);
