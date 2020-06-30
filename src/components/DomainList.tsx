/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import isEqual from 'react-fast-compare';
import {useSelector} from 'react-redux';

import {ClickLocation} from '../analytics';
import * as colors from '../colors';
import * as font from '../font';
import * as selectors from '../selectors';
import {desktop, mobile} from '../styles';
import DomainView from './DomainView';
import ExtensionsSortMenu from './ExtensionsSortMenu';
import Icon from './Icon';
import {SearchSelectorLink, SearchType} from './SearchSelector';

const topLinkStyles = {
  topLink: css`
    float: right;
    color: ${colors.blue};
    font-weight: ${font.medium};
    font-size: ${font.xxs}px;
  `,
  icon: css`
    width: 8px;
    height: 8px;
    margin-left: 4px;
    stroke: ${colors.blue};
  `,
};

const styles = {
  title: css`
    color: ${colors.darkGray};
    font-weight: ${font.bold};
  `,
  buttonSize: css`
    display: block;

    margin-right: -12px;
    margin-left: -12px;
    padding-top: 12px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;

    &:hover {
      text-decoration: none;
    }

    ${mobile} {
      margin-right: -16px;
      margin-left: -16px;
      padding-right: 16px;
      padding-left: 16px;
    }
  `,
  linkedButton: css`
    border-radius: 4px;
    cursor: pointer;
    ${desktop} {
      &:hover {
        color: ${colors.white};
        background: ${colors.hoverBlue};

        & .${topLinkStyles.topLink} {
          color: ${colors.white};
        }

        & .${topLinkStyles.icon} {
          stroke: ${colors.white};
        }
      }
    }
    ${mobile} {
      border-radius: 0;
      &:active {
        color: ${colors.white};
        background: ${colors.hoverBlue};

        & .${topLinkStyles.topLink} {
          color: ${colors.white};
        }

        & .${topLinkStyles.icon} {
          stroke: ${colors.white};
        }
      }
    }
  `,
  auxText: css`
    padding-top: 10px;
    padding-bottom: 10px;
    color: ${colors.mediumGray};
    font-weight: ${font.regular};
    font-style: normal;
    line-height: 20px;

    ${mobile} {
      margin-right: -16px;
      margin-left: -16px;
      padding-right: 16px;
      padding-left: 16px;
    }
  `,
  bottomLink: css`
    clear: both;
    color: ${colors.mediumGray};
    font-weight: ${font.regular};
    font-style: normal;
  `,
  buyLinks: css`
    margin-right: -12px;
    margin-left: -12px;

    ${mobile} {
      margin-right: -16px;
      margin-left: -16px;
      overflow: hidden;
      transition: height 0.3s;
    }
  `,
};

interface DomainListProps {
  className?: string;
  compact?: boolean;
  category: 'tlds' | 'suggestions' | 'forSale' | 'favorites' | 'expiring';
  location: ClickLocation;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  searchSelectorType?: SearchType;
}

function DomainList({
  category,
  location,
  className,
  compact = false,
  searchSelectorType,
  style,
  title,
}: DomainListProps) {
  const isMobile = useSelector(selectors.isMobile);
  const domains = useSelector(selectors.forResultCategory[category]);
  const isSearchInProgress = useSelector(selectors.isSearchInProgress);

  const [expanded, setExpanded] = React.useState(false);
  const onSeeMoreClick = () => {
    setExpanded(true);
  };

  // Keep in sync with CSS
  const rowHeight = compact ? 42 : 40;
  const domainsPerRow = 1;
  const rows = Math.ceil(domains.length / domainsPerRow);
  const collapsedRows = isMobile ? 3 : 6;
  const height = (expanded ? rows : collapsedRows) * rowHeight;

  return (
    <div className={className} style={{...style, position: 'relative'}}>
      {category === 'tlds' && !isMobile && <ExtensionsSortMenu />}
      {title && searchSelectorType && (
        <SearchSelectorLink
          className={cx(styles.title, styles.buttonSize, !!searchSelectorType && styles.linkedButton)}
          eventID="domain_list_top_link"
          type={searchSelectorType}>
          {title}
          {searchSelectorType && (
            <span className={topLinkStyles.topLink}>
              See all
              <Icon className={topLinkStyles.icon} name="ChevronRight" />
            </span>
          )}
        </SearchSelectorLink>
      )}
      {domains.length === 0 && isSearchInProgress && (
        <div className={styles.auxText} style={{height}}>
          Searching...
        </div>
      )}
      {domains.length === 0 && !isSearchInProgress && <div className={styles.auxText}>Nothing found.</div>}
      {domains.length > 0 && (
        <div className={cx(styles.buyLinks)} style={{height: !expanded && !isMobile ? undefined : height}}>
          {domains.map((domain, i) => (
            <DomainView
              category={category}
              compact={compact}
              domain={domain}
              key={`${i}`}
              location={location}
              position={i}
            />
          ))}
        </div>
      )}
      {domains.length > 0 && !expanded && isMobile && rows > 4 && (
        <div className={cx(styles.auxText, styles.linkedButton, styles.buttonSize)} onClick={onSeeMoreClick}>
          See {domains.length - collapsedRows * domainsPerRow} more...
        </div>
      )}
      {!isSearchInProgress && domains && (expanded || !isMobile) && searchSelectorType && domains.length > 0 && (
        <SearchSelectorLink
          className={cx(styles.bottomLink, styles.buttonSize, styles.linkedButton)}
          eventID="domain_list_bottom_link"
          type={searchSelectorType}>
          See all...
        </SearchSelectorLink>
      )}
    </div>
  );
}

export default React.memo(DomainList, isEqual);
