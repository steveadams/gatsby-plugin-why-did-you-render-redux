import {Location} from '@reach/router';
import {Link} from 'gatsby';
import {cx} from 'linaria';
import React from 'react';
import {useSelector} from 'react-redux';

import * as analytics from '../../analytics';
import * as selectors from '../../selectors';
import {useLanguage} from '../Text';
import {createSearchSelectorPath, SearchType} from '.';

type SearchSelectorLinkProps = {
  eventID?: string;
  type: SearchType;
} & React.HTMLAttributes<HTMLElement>;

const SearchSelectorLink = ({children, type, className}: SearchSelectorLinkProps) => {
  const lang = useLanguage();
  const canonicalUrl = useSelector(selectors.canonicalUrl);
  const path = createSearchSelectorPath(type, lang);

  const onClick = React.useCallback(() => {
    analytics.event('interact', 'search_results_switcher_list', path);
  }, [path]);

  return (
    <Location>
      {({location}) => (
        <Link
          className={cx(className, path === location.pathname ? 'current' : '')}
          onClick={onClick}
          to={`${path}${canonicalUrl}`}>
          {children}
        </Link>
      )}
    </Location>
  );
};

export default SearchSelectorLink;
