/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as actions from '../actions';
import {SocialService} from '../actionTypes';
import * as colors from '../colors';
import {appraiseURL, domainName, googleAnalyticsLabel, name, statusName} from '../domain';
import {debounceImmediate} from '../util';
import * as font from '../font';
import {State} from '../reducers';
import * as selectors from '../selectors';
import * as statusColors from '../statusColors';

import Flyout from './Flyout';
import {EllipsisIcon} from './icons';
import Link from './Link';
import Text from './Text';

const styles = {
  flyout: css`
    margin-right: -42px;
    margin-left: 18px;
  `,
  handle: css`
    display: block;
    border-radius: 12px;
    &:hover {
      fill: #fff;
    }
  `,
  expandedHandle: css`
    fill: #fff;
  `,
  menu: css`
    margin: 0;
    padding: 12px 0;
    text-align: left;
  `,
};

const linkStyles = {
  link: css`
    color: ${colors.darkGray};
    font-weight: ${font.regular};
    cursor: pointer;
    display: block;
    margin: 0;
    padding: 6px 16px;
    &:hover {
      text-decoration: none;
      background: ${colors.lightGray};
    }
  `,
  available: css`
    color: ${colors.green};
    float: right;
  `,
  taken: css`
    color: ${colors.red};
    float: right;
  `,
  checking: css`
    color: ${colors.lightGray};
    float: right;
  `,
};

interface AdvancedLinkProps {
  href?: string;
  domain: Domain;
  linkID?: string;
  children?: React.ReactNode;
  rel?: string;
}

const AdvancedLink = ({href, domain, linkID, children, rel}: AdvancedLinkProps) => (
  <li>
    <Link
      href={href}
      eventType="interact"
      eventID={`advanced_${linkID}`}
      eventInfo={googleAnalyticsLabel(domain)}
      eventValue={domain.price || 0}
      rel={rel}
      className={linkStyles.link}>
      {children}
    </Link>
  </li>
);

type UsernameLinkProps = {
  service: 'Twitter' | 'Facebook' | 'Instagram';
  available: boolean | undefined;
} & AdvancedLinkProps;

const UsernameLink = ({service, available, ...props}: UsernameLinkProps) => (
  <AdvancedLink {...props}>
    {service} username
    {available === true && <span className={cx(linkStyles.available)}>Available</span>}
    {available === false && <span className={cx(linkStyles.taken)}>Taken</span>}
    {available === void 0 && <span className={cx(linkStyles.checking)}>Checking</span>}
  </AdvancedLink>
);

interface DomainMenuProps {
  domain: Domain;
}

function DomainMenu({domain}: DomainMenuProps) {
  const shortName = name(domain);
  const fullName = domainName(domain);

  const [isOpen, setIsOpen] = React.useState(false);

  // only load username availability if the Flyout is visible
  React.useEffect(() => {
    if (isOpen) {
      debounceImmediate(() => {
        actions.loadVanity();
      }, 500)();
    }
  }, [shortName, isOpen]); // only run this on updates where shortName has changed

  const social = useSelector((state: State) => selectors.socialUsernameAvailability(state, domain));

  const collapsedHandle = (
    <EllipsisIcon
      className={cx(
        styles.handle,
        statusColors.fill[statusName(domain)],
        statusColors.hoverBackground[statusName(domain)],
      )}
    />
  );
  const expandedHandle = (
    <EllipsisIcon className={cx(styles.handle, styles.expandedHandle, statusColors.background[statusName(domain)])} />
  );

  return (
    <Flyout
      collapsedHandle={collapsedHandle}
      expandedHandle={expandedHandle}
      className={styles.flyout}
      width={220}
      onCollapse={() => {
        setIsOpen(false);
      }}
      onExpand={() => {
        setIsOpen(true);
      }}>
      <ul className={styles.menu}>
        <AdvancedLink domain={domain} linkID="visit" href={`http://${fullName}`}>
          Visit site
        </AdvancedLink>
        <AdvancedLink domain={domain} linkID="appraise" rel="sponsored" href={appraiseURL(domain)}>
          <Text id="appraise" />
        </AdvancedLink>
        <hr />
        <AdvancedLink
          domain={domain}
          linkID="trademark"
          href={`https://www.uspto.gov/trademarks-application-process/search-trademark-database`}>
          Trademark Search
        </AdvancedLink>
        <AdvancedLink
          domain={domain}
          linkID="google"
          href={`https://www.google.com/?q=${encodeURIComponent(shortName)}`}>
          Google Search
        </AdvancedLink>
        <AdvancedLink
          domain={domain}
          linkID="wayback"
          href={`https://web.archive.org/web/*/${encodeURIComponent(fullName)}`}>
          Wayback Machine
        </AdvancedLink>
        <hr />
        <UsernameLink
          domain={domain}
          linkID="instagram"
          href={`https://www.instagram.com/${encodeURIComponent(shortName)}/`}
          service="Instagram"
          available={social[SocialService.instagram]}
        />
        <UsernameLink
          domain={domain}
          linkID="twitter"
          href={`https://twitter.com/${encodeURIComponent(shortName)}`}
          service="Twitter"
          available={social[SocialService.twitter]}
        />
        <UsernameLink
          domain={domain}
          linkID="facebook"
          href={`https://www.facebook.com/${encodeURIComponent(shortName)}`}
          service="Facebook"
          available={social[SocialService.facebook]}
        />
      </ul>
    </Flyout>
  );
}

export default React.memo(DomainMenu);
