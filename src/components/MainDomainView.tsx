/* Copyright 2005-present Instant Domain Search, Inc. */

import {css, cx} from 'linaria';
import * as React from 'react';
import {useSelector} from 'react-redux';

import * as analytics from '../analytics';
import * as colors from '../colors';
import {
  acquireURL,
  appraiseURL,
  defaultActionURL,
  directURL,
  domainName,
  DomainStatus,
  googleAnalyticsLabel,
  status,
  statusName,
  whoisURL,
} from '../domain';
import * as font from '../font';
import * as selectors from '../selectors';
import * as statusColors from '../statusColors';
import {desktop, mobile} from '../styles';
import Button from './Button';
import DomainButton from './DomainButton';
import DomainMenu from './DomainMenu';
import DomainStar from './DomainStar';
import Flyout from './Flyout';
import Link from './Link';
import Text from './Text';

const styles = {
  default: css`
    font-weight: ${font.bold};
    font-size: ${font.xxl}px;
    padding-bottom: 16px;
    padding-top: 16px;
    position: relative;
    border-radius: 4px;
    margin-left: auto;
    margin-right: auto;
    max-width: 556px;
    padding-left: 12px;
    padding-right: 12px;
    ${mobile} {
      font-size: ${font.l}px;
    }
  `,
  searching: css`
    color: ${colors.lightGray};
    max-width: 556px;
    padding-left: 12px;
    padding-right: 12px;
    margin-top: 8px;
    margin-bottom: 24px;
    ${mobile} {
      margin-top: 6px;
      text-align: center;
      margin-bottom: 78px;
    }
  `,
  row: css`
    display: flex;
    align-items: center;
    ${mobile} {
      flex-direction: column;
    }
  `,
  domain: css`
    display: flex;
    align-items: center;
  `,
  actions: css`
    display: flex;
    align-items: center;
    ${desktop} {
      margin-left: auto;
    }
  `,
  link: css`
    color: inherit;
    margin-top: 6px;
    margin-bottom: 10px;
    position: relative; /* To make the visit site link intercept area clicks */
  `,
  noUnderline: css`
    &:hover {
      text-decoration: none;
    }
  `,
  button: css`
    margin: 8px 0;
    position: relative;
    display: block;
  `,
  secondaryButton: css`
    margin: 8px 16px 8px 0;
    position: relative;
  `,
  grayButton: css`
    background: ${colors.mediumDarkGray};
    &:hover {
      color: ${colors.white};
      background: ${colors.mediumDarkGrayHover};
    }
  `,
  area: css`
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    margin: 0;
  `,
  flyout: css`
    text-align: center;
    margin-left: 16px;
  `,
  questionMark: css`
    font-weight: ${font.regular};
    color: #fff;
    background: ${colors.red};
    font-size: ${font.xxs}px;
    width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 8px;
  `,
  notice: css`
    padding: 16px;
    font-weight: ${font.regular};
  `,
};

function MainDomainView() {
  const domain = useSelector(selectors.mainDomain);
  const isMobile = useSelector(selectors.isMobile);
  const searchPhrase = useSelector(selectors.searchPhrase);
  const mainTld = useSelector(selectors.mainTld);

  const renderAvailabilityNotice = () => {
    if (!domain) return null;

    const info = (
      <span>
        {' '}
        Check{' '}
        <Link
          rel="sponsored"
          href={whoisURL(domain)}
          eventType="convert"
          eventID="flyout_whois"
          eventInfo={googleAnalyticsLabel(domain)}
          eventValue={domain.price || 0}>
          WHOIS
        </Link>{' '}
        for more information.
      </span>
    );

    if (domain.actuallyRegistered) {
      const handle = <div className={styles.questionMark}>?</div>;
      return (
        <Flyout collapsedHandle={handle} expandedHandle={handle} className={styles.flyout} width={300}>
          <div className={styles.notice}>
            This domain is not in use, or it may be about to expire.
            {info}
          </div>
        </Flyout>
      );
    } else {
      return null;
    }
  };

  const renderSecondaryButton = () => {
    if (!domain) return null;

    switch (status(domain)) {
      case DomainStatus.recentlyRegistered:
      case DomainStatus.recentlyDropped:
      case DomainStatus.expiring:
        return (
          <Button
            className={cx(styles.secondaryButton, styles.grayButton)}
            defaultColor={false}
            eventID="whois"
            eventInfo={googleAnalyticsLabel(domain)}
            eventValue={domain.price || 0}
            eventType="convert"
            href={whoisURL(domain)}
            tag="a"
            rel="sponsored"
            target="_blank">
            <Text id="whois" />
          </Button>
        );
      case DomainStatus.taken:
        return (
          <Button
            className={styles.secondaryButton}
            eventID="acquire"
            eventInfo={googleAnalyticsLabel(domain)}
            eventValue={domain.price || 0}
            eventType="convert"
            href={acquireURL(domain)}
            tag="a"
            rel="sponsored"
            target="_blank"
            title={`Acquire ${domainName(domain)} with an agent`}>
            <Text id="makeOffer" />
          </Button>
        );
      case DomainStatus.sale:
        return (
          <Button
            className={cx(styles.secondaryButton, styles.grayButton)}
            defaultColor={false}
            eventID="appraise"
            eventInfo={googleAnalyticsLabel(domain)}
            eventValue={domain.price || 0}
            eventType="convert"
            href={appraiseURL(domain)}
            tag="a"
            rel="sponsored"
            target="_blank">
            <Text id="appraise" />
          </Button>
        );
      default:
        return null;
    }
  };

  if (!domain) {
    return (
      <div className={cx(styles.default, styles.searching)}>
        {searchPhrase}.{mainTld || 'com'}
      </div>
    );
  }

  return (
    <div
      className={cx(
        styles.default,
        statusColors.color[statusName(domain)],
        status(domain) !== DomainStatus.taken &&
          status(domain) !== DomainStatus.recentlyRegistered &&
          status(domain) !== DomainStatus.recentlyDropped &&
          statusColors.hoverBackground[statusName(domain)],
      )}>
      <Link
        className={styles.area}
        eventID="click_main_area"
        eventInfo={googleAnalyticsLabel(domain)}
        eventType="convert"
        eventValue={domain.price || 0}
        href={defaultActionURL(domain) || undefined}
        rel="sponsored"
      />
      <div className={styles.row}>
        <DomainStar domain={domain} large statusColor />
        <div className={styles.domain}>
          <Link
            href={status(domain) === DomainStatus.taken ? directURL(domain) : defaultActionURL(domain) || undefined}
            title={status(domain) === DomainStatus.taken ? `Visit ${domainName(domain)}` : undefined}
            eventType={status(domain) === DomainStatus.taken ? 'interact' : 'convert'}
            eventID={status(domain) === DomainStatus.taken ? 'visit_site' : 'click_main_link'}
            eventInfo={googleAnalyticsLabel(domain)}
            eventValue={domain.price || 0}
            className={cx(
              styles.link,
              status(domain) !== DomainStatus.taken &&
                status(domain) !== DomainStatus.recentlyRegistered &&
                status(domain) !== DomainStatus.recentlyDropped &&
                styles.noUnderline,
            )}>
            {domainName(domain)}
          </Link>
          {renderAvailabilityNotice()}
        </div>
        <div className={styles.actions}>
          {renderSecondaryButton()}
          <DomainButton
            domain={domain}
            location={analytics.ClickLocation.MainResult}
            eventType="convert"
            eventID={status(domain) === DomainStatus.taken ? 'whois' : 'click_main_button'}
            eventInfo={googleAnalyticsLabel(domain)}
            eventValue={domain.price || 0}
            className={styles.button}
          />
          {!isMobile && <DomainMenu domain={domain} />}
        </div>
      </div>
    </div>
  );
}

export default React.memo(MainDomainView);
