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
import {LongRightArrowIcon} from './icons';
import Link from './Link';
import Text, {LocaleKey} from './Text';

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
    max-width: 648px;
    padding-left: 12px;
    padding-right: 12px;
    ${mobile} {
      font-size: ${font.l}px;
    }
  `,
  searching: css`
    color: ${colors.lightGray};
    max-width: 648px;
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

    a {
      margin-right: 8px;
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
  secondaryButton: css`
    position: relative;
    background: ${colors.blue};

    &:hover {
      background: ${colors.hoverBlue};
    }
  `,
  arrowIcon: css`
    margin-left: 8px;
  `,
  flyout: css`
    text-align: center;
    margin-left: 0;
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
          eventID="flyout_whois"
          eventInfo={googleAnalyticsLabel(domain)}
          eventType="convert"
          eventValue={domain.price || 0}
          href={whoisURL(domain)}
          rel="sponsored">
          WHOIS
        </Link>{' '}
        for more information.
      </span>
    );

    if (domain.actuallyRegistered) {
      const handle = <div className={styles.questionMark}>?</div>;
      return (
        <Flyout collapsedHandle={handle} expandedHandle={handle} width={300}>
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

    const secondaryButton = (
      mainDomain: Domain,
      urlFunction: (d: Domain) => string,
      eventId: string,
      textId: LocaleKey,
      title?: string,
    ) => (
      <Button
        className={cx(styles.secondaryButton, styles.secondaryButton)}
        defaultColor={false}
        eventID={eventId}
        eventInfo={googleAnalyticsLabel(mainDomain)}
        eventType="convert"
        eventValue={mainDomain.price || 0}
        href={urlFunction(mainDomain)}
        rel="sponsored"
        tag="a"
        target="_blank"
        title={title}>
        <Text id={textId} />
        <LongRightArrowIcon className={styles.arrowIcon} />
      </Button>
    );

    switch (status(domain)) {
      case DomainStatus.recentlyRegistered:
      case DomainStatus.recentlyDropped:
      case DomainStatus.expiring:
        return secondaryButton(domain, whoisURL, 'whois', 'whois');
      case DomainStatus.taken:
        return secondaryButton(
          domain,
          acquireURL,
          'acquire',
          'makeOffer',
          `Acquire ${domainName(domain)} with an agent`,
        );
      case DomainStatus.sale:
        return secondaryButton(domain, appraiseURL, 'appraise', 'appraise');
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
            className={cx(
              styles.link,
              status(domain) !== DomainStatus.taken &&
                status(domain) !== DomainStatus.recentlyRegistered &&
                status(domain) !== DomainStatus.recentlyDropped &&
                styles.noUnderline,
            )}
            eventID={status(domain) === DomainStatus.taken ? 'visit_site' : 'click_main_link'}
            eventInfo={googleAnalyticsLabel(domain)}
            eventType={status(domain) === DomainStatus.taken ? 'interact' : 'convert'}
            eventValue={domain.price || 0}
            href={status(domain) === DomainStatus.taken ? directURL(domain) : defaultActionURL(domain) || undefined}
            title={status(domain) === DomainStatus.taken ? `Visit ${domainName(domain)}` : undefined}>
            {domainName(domain)}
          </Link>
          {renderAvailabilityNotice()}
        </div>
        <div className={styles.actions}>
          {renderSecondaryButton()}
          <DomainButton
            domain={domain}
            eventID={status(domain) === DomainStatus.taken ? 'whois' : 'click_main_button'}
            eventInfo={googleAnalyticsLabel(domain)}
            eventType="convert"
            eventValue={domain.price || 0}
            location={analytics.ClickLocation.MainResult}>
            <LongRightArrowIcon className={styles.arrowIcon} />
          </DomainButton>
          {!isMobile && <DomainMenu domain={domain} />}
        </div>
      </div>
    </div>
  );
}

export default React.memo(MainDomainView);
