/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import {ClickLocation} from '../analytics';
import * as colors from '../colors';
import * as font from '../font';
import * as selectors from '../selectors';
import {desktop, mobile} from '../styles';
import DomainView from './DomainView';
import ExtensionsSortMenu from './ExtensionsSortMenu';
import {RightArrowIcon} from './icons';
import SearchSelectorLink from './SearchSelectorLink';

const topLinkStyles = {
  topLink: css`
    float: right;
    font-weight: ${font.medium};
    color: ${colors.blue};
    font-size: ${font.xxs}px;
    margin-top: 3px;
  `,
  icon: css`
    stroke: ${colors.blue};
    vertical-align: text-bottom;
  `,
};

const styles = {
  title: css`
    font-weight: ${font.bold};
    color: ${colors.darkGray};
  `,
  buttonSize: css`
    padding-bottom: 12px;
    padding-top: 12px;
    padding-left: 12px;
    padding-right: 12px;
    margin-left: -12px;
    margin-right: -12px;
    display: block;
    &:hover {
      text-decoration: none;
    }
    ${mobile} {
      margin-left: -16px;
      margin-right: -16px;
      padding-left: 16px;
      padding-right: 16px;
    }
  `,
  linkedButton: css`
    border-radius: 4px;
    cursor: pointer;
    ${desktop} {
      &:hover {
        background: ${colors.hoverBlue};
        color: ${colors.white};
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
        background: ${colors.hoverBlue};
        color: ${colors.white};
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
    font-weight: ${font.regular};
    color: ${colors.mediumGray};
    font-style: normal;
    padding-bottom: 10px;
    padding-top: 10px;
    line-height: 20px;
    ${mobile} {
      margin-left: -16px;
      margin-right: -16px;
      padding-left: 16px;
      padding-right: 16px;
    }
  `,
  bottomLink: css`
    font-weight: ${font.regular};
    color: ${colors.mediumGray};
    font-style: normal;
    clear: both;
  `,
  buyLinks: css`
    margin-left: -12px;
    margin-right: -12px;
    ${mobile} {
      overflow: hidden;
      transition: height 0.3s;
      margin-left: -16px;
      margin-right: -16px;
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
  link?: string;
}

function DomainList({category, location, className, compact = false, link, style, title}: DomainListProps) {
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
      {title && (
        <SearchSelectorLink
          className={cx(styles.title, styles.buttonSize, !!link && styles.linkedButton)}
          eventID="domain_list_top_link"
          to={link}>
          {title}
          {link && (
            <span className={topLinkStyles.topLink}>
              See all
              <RightArrowIcon className={topLinkStyles.icon} />
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
              key={`${i}`}
              location={location}
              position={i}
              domain={domain}
              compact={compact}
              category={category}
            />
          ))}
        </div>
      )}
      {domains.length > 0 && !expanded && isMobile && rows > 4 && (
        <div className={cx(styles.auxText, styles.linkedButton, styles.buttonSize)} onClick={onSeeMoreClick}>
          See {domains.length - collapsedRows * domainsPerRow} more...
        </div>
      )}
      {!isSearchInProgress && domains && (expanded || !isMobile) && link && domains.length > 0 && (
        <SearchSelectorLink
          className={cx(styles.bottomLink, styles.buttonSize, styles.linkedButton)}
          eventID="domain_list_bottom_link"
          to={link}>
          See all...
        </SearchSelectorLink>
      )}
    </div>
  );
}

export default React.memo(DomainList);
