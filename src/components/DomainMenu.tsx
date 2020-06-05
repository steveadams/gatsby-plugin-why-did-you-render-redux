/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as actions from '../actions';
import {SocialService} from '../actionTypes';
import * as colors from '../colors';
import {appraiseURL, domainName, googleAnalyticsLabel, name} from '../domain';
import * as font from '../font';
import {State} from '../reducers';
import * as selectors from '../selectors';
import {debounceImmediate} from '../util';
import Flyout from './Flyout';
import {ChevronIcon} from './icons';
import Link from './Link';
import Text from './Text';

const styles = {
  handle: css`
    background-color: ${colors.extraLightGray};
    border-radius: 100%;
    padding: 10px 6px;
    width: 16px;
    height: 8px;
    fill: none;
    color: ${colors.darkGray};

    &:hover {
      color: black;
    }
  `,
  expandedHandle: css`
    color: black;
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
      className={linkStyles.link}
      eventID={`advanced_${linkID}`}
      eventInfo={googleAnalyticsLabel(domain)}
      eventType="interact"
      eventValue={domain.price || 0}
      href={href}
      rel={rel}>
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
    {available === true && <span className={linkStyles.available}>Available</span>}
    {available === false && <span className={linkStyles.taken}>Taken</span>}
    {available === void 0 && <span className={linkStyles.checking}>Checking</span>}
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

  const handle = (className?: string) => <ChevronIcon className={cx(styles.handle, className)} />;

  return (
    <Flyout
      collapsedHandle={handle()}
      expandedHandle={handle(styles.expandedHandle)}
      onCollapse={() => {
        setIsOpen(false);
      }}
      onExpand={() => {
        setIsOpen(true);
      }}
      width={220}>
      <ul className={styles.menu}>
        <AdvancedLink domain={domain} href={`http://${fullName}`} linkID="visit">
          Visit site
        </AdvancedLink>
        <AdvancedLink domain={domain} href={appraiseURL(domain)} linkID="appraise" rel="sponsored">
          <Text id="appraise" />
        </AdvancedLink>
        <hr />
        <AdvancedLink
          domain={domain}
          href={`https://www.uspto.gov/trademarks-application-process/search-trademark-database`}
          linkID="trademark">
          Trademark Search
        </AdvancedLink>
        <AdvancedLink
          domain={domain}
          href={`https://www.google.com/?q=${encodeURIComponent(shortName)}`}
          linkID="google">
          Google Search
        </AdvancedLink>
        <AdvancedLink
          domain={domain}
          href={`https://web.archive.org/web/*/${encodeURIComponent(fullName)}`}
          linkID="wayback">
          Wayback Machine
        </AdvancedLink>
        <hr />
        <UsernameLink
          available={social[SocialService.instagram]}
          domain={domain}
          href={`https://www.instagram.com/${encodeURIComponent(shortName)}/`}
          linkID="instagram"
          service="Instagram"
        />
        <UsernameLink
          available={social[SocialService.twitter]}
          domain={domain}
          href={`https://twitter.com/${encodeURIComponent(shortName)}`}
          linkID="twitter"
          service="Twitter"
        />
        <UsernameLink
          available={social[SocialService.facebook]}
          domain={domain}
          href={`https://www.facebook.com/${encodeURIComponent(shortName)}`}
          linkID="facebook"
          service="Facebook"
        />
      </ul>
    </Flyout>
  );
}

export default React.memo(DomainMenu);
