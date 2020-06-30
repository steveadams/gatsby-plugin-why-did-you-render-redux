/* Copyright 2005-present Instant Domain Search, Inc. */

import {css} from 'linaria';
import * as React from 'react';
import isEqual from 'react-fast-compare';
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
import Icon from './Icon';
import Link from './Link';
import Text from './Text';

const styles = {
  handle: css`
    width: 24px;
  `,
  menu: css`
    margin: 0;
    padding: 12px 0;
    text-align: left;
  `,
};

const linkStyles = {
  link: css`
    display: block;
    margin: 0;
    padding: 6px 16px;
    color: ${colors.darkGray};
    font-weight: ${font.regular};
    cursor: pointer;

    &:hover {
      text-decoration: none;
      background: ${colors.lightGray};
    }
  `,
  available: css`
    float: right;
    color: ${colors.green};
  `,
  taken: css`
    float: right;
    color: ${colors.red};
  `,
  checking: css`
    float: right;
    color: ${colors.lightGray};
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

  const Handle = () => (
    <Icon
      background={colors.extraLightGray}
      className={styles.handle}
      name="ChevronSmall"
      round
      stroke={colors.darkGray}
    />
  );

  const ExpandedHandle = () => (
    <Icon background={colors.darkGray} className={styles.handle} name="ChevronSmall" round stroke={colors.white} />
  );

  return (
    <Flyout
      collapsedHandle={<Handle />}
      expandedHandle={<ExpandedHandle />}
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

export default React.memo(DomainMenu, isEqual);
