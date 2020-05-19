/* Copyright 2005-present Instant Domain Search, Inc. */

import {Location} from '@reach/router';
import {Link} from 'gatsby';
import {cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as analytics from '../analytics';
import * as selectors from '../selectors';

interface SearchSelectorLinkProps {
  to?: string;
  eventID?: string;
  className?: string;
  children?: React.ReactNode;
}

function SearchSelectorLink({children, to, className}: SearchSelectorLinkProps) {
  const canonicalUrl = useSelector(selectors.canonicalUrl);

  const onClick = React.useCallback(() => {
    analytics.event('interact', 'search_results_switcher', to);
  }, [to]);

  return (
    <Location>
      {({location}) => (
        <Link
          to={to ? `${to}${canonicalUrl}` : '#'}
          className={cx(className, location.pathname === to && 'current')}
          onClick={onClick}>
          {children}
        </Link>
      )}
    </Location>
  );
}

export default React.memo(SearchSelectorLink);
