/* Copyright 2005-present Instant Domain Search, Inc. */

import * as analytics from './analytics';
import config from './config';
import {store} from './store';
import * as util from './util';

export enum DomainStatus {
  auction,
  available,
  expiring,
  recentlyDropped,
  recentlyRegistered,
  sale,
  taken,
}

export const equal = (a: Domain, b: Domain) => {
  return a.search === b.search && a.tld === b.tld && name(a) === name(b);
};

export const goDaddyURL = (name: string, tld: string): string => {
  const m = store.getState().browser.isMobile;
  const registrar = config.registrars[0];
  const format = (m && registrar.mobile_URL) || registrar.URL;
  const sid = analytics.getClientID();
  return util.formatp(format, name, tld, `${sid}`);
};

export const status = (result: Domain): DomainStatus => {
  const {isBid, isRegistered, aftermarketProvider} = result;

  // expiring names
  if (result.search === 'expiring') {
    // TODO: double-check these, and see if name is ready to register instead of backorder
    return DomainStatus.expiring;
  }

  // aftermarket
  if (isBid) {
    return DomainStatus.auction;
  } else if (aftermarketProvider) {
    return DomainStatus.sale;
  } else if (isRegistered) {
    return DomainStatus.taken;
  }

  // double-check
  if (result.actuallyRegistered) {
    return DomainStatus.taken;
  } else {
    return DomainStatus.available;
  }
};

export const statusName = (domain: Domain): keyof typeof DomainStatus => {
  return DomainStatus[status(domain)] as keyof typeof DomainStatus;
};

export const domainName = (result: Domain): string => {
  return `${name(result)}.${result.tld}`;
};

export const rank = (result: Domain): number => {
  return result.search === 'name' ? result.rank : 0;
};

export const name = (result: Domain): string => {
  return result.label;
};

export const price = (result: Domain): string | null => {
  switch (status(result)) {
    case DomainStatus.sale:
      return salePrice(result);
    case DomainStatus.auction:
    case DomainStatus.available:
    case DomainStatus.expiring:
    case DomainStatus.recentlyDropped:
    case DomainStatus.recentlyRegistered:
    case DomainStatus.taken:
    default:
      return null;
  }
};

export const isTldResult = (result: Domain): boolean => {
  return result.search === 'name' && !nameIsHacked(result);
};

export const isSuggestion = (result: Domain): boolean => {
  return result.search === 'fix';
};

export const isForSale = (result: Domain): boolean => {
  return status(result) === DomainStatus.auction || status(result) === DomainStatus.sale;
};

export const isExpiring = (result: Domain): boolean => {
  return status(result) === DomainStatus.expiring;
};

export const localStorageKey = (result: Domain): string => {
  return domainName(result);
};

export const searchResultKey = (result: Domain): string => {
  return `${result.search}/${localStorageKey(result)}`;
};

export const googleAnalyticsLabel = (result: Domain): string => {
  return `${statusName(result)}_${result.tld}`;
};

export const defaultActionURL = (result: Domain) => {
  const url = getURLFormat(result);
  const sid = analytics.getClientID();

  if (url === '' || name(result) === void 0 || result.isLoading) {
    return null;
  }

  // domain.com trial (about 500 clicks per day); replicated in HostingChooser.tsx
  if (result.isRegistered === false && result.tld === 'com') {
    const last = sid.slice(-1);
    if (last === '6' || last === '7' || last === '8' || last === '9') {
      return util.formatp(
        'https://www.dpbolvw.net/click-8818764-10796751?sid={2}&url=https%3A%2F%2Fwww.domain.com%2Fregistration%3Fcoupon%3Dinstantdomain%26flow%3DdomainDFEMO365%26search={0}.{1}%23%2FdomainDFEMO365%2F1',
        name(result),
        result.tld,
        `${sid}`,
      );
    } else if (last === '0' || last === '1' || last === '2' || last === '3' || last === '4' || last === '5') {
      // godaddy "automated tester"
      return util.formatp(
        'https://www.anrdoezrs.net/click-8818764-11751890?sid={2}&url=https%3A%2F%2Fwww.godaddy.com%2Fdomainsearch%2Ffind%3FcheckAvail%3D1%26tmskey%3D%26domainToCheck%3D{0}.{1}',
        name(result),
        result.tld,
        `${sid}`,
      );
    }
  }

  return util.formatp(url, name(result), result.tld, `${sid}`);
};

export const acquireURL = (result: Domain) => {
  if (name(result) === void 0) {
    return '';
  }

  return util.formatp(config.acquire.URL, name(result), result.tld, `${analytics.getClientID()}`);
};

export const directURL = (result: Domain) => {
  return `http://${domainName(result)}`;
};

export const whoisURL = (result: Domain) => {
  return util.formatp(whoisURLFormat(), name(result), result.tld, `${analytics.getClientID()}`);
};

export const appraiseURL = (result: Domain) => {
  return util.formatp(appraiseURLFormat(), name(result), result.tld, `${analytics.getClientID()}`);
};

/* whether name domain is hacked or not (wth does that mean?) */
const nameIsHacked = (result: Domain): boolean => {
  return result.search === 'name' && name(result) + result.tld === result.label;
};

const salePrice = (result: Domain): string => {
  // if isBid is true, and there is a price, then we are showing GoDaddy's estimated price
  if (!result.aftermarketProvider || result.price === undefined || result.price === 0) {
    return '';
  }

  // http://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  return `${result.isBid ? '~' : ''}$${result.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
};

const getURLFormat = (result: Domain): string => {
  const m = store.getState().browser.isMobile;
  const registrar = config.registrars[0];

  switch (status(result)) {
    case DomainStatus.available:
    case DomainStatus.recentlyRegistered:
    case DomainStatus.recentlyDropped:
      return (m && registrar.mobile_URL) || registrar.URL;

    case DomainStatus.taken:
      return whoisURLFormat();

    case DomainStatus.sale:
    case DomainStatus.auction:
      return getAfterMarketURLFormat(result);

    case DomainStatus.expiring:
      return getExpiringURLFormat(result);

    default:
      return '';
  }
};

const whoisURLFormat = (): string => {
  const m = store.getState().browser.isMobile;
  return (m && config.whois.mobile_URL) || config.whois.URL;
};

const appraiseURLFormat = (): string => {
  const m = store.getState().browser.isMobile;
  return (m && config.appraise.mobile_URL) || config.appraise.URL;
};

const getExpiringURLFormat = (result: Domain): string => {
  if (!result.aftermarketProvider) {
    return '';
  }

  const expiringResult = config.expiring.find(a => a.name === result.aftermarketProvider);
  if (!expiringResult) {
    return '';
  }

  const m = store.getState().browser.isMobile;
  return (m && expiringResult.mobile_URL) || expiringResult.URL;
};

// split test
const getAfterMarketURLFormat = (result: Domain): string => {
  if (!result.aftermarketProvider) {
    return '';
  }

  const aftermarketResult = config.aftermarket.find(a => a.name === result.aftermarketProvider);
  if (!aftermarketResult) {
    return '';
  }

  const m = store.getState().browser.isMobile;

  return (m && aftermarketResult.mobile_URL) || aftermarketResult.URL;
};
