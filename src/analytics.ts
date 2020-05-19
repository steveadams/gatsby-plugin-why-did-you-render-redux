/* Copyright 2005-present Instant Domain Search, Inc. */

import {v4 as uuid} from 'uuid';

import * as actions from './actions';
import * as async from './async';
import config from './config';
import {name} from './domain';
import * as experiments from './experiments';
import * as log from './log';
import * as storage from './storage';
import {store} from './store';

type Event = {id: string; deviceID: string; sessionID: string; buildTime: string} & (
  | {
      type: 'pageview';
      path: string;
      userAgent: string;
      referrer: string;
      windowSize: [number, number];
      timezoneOffset: number;
      language: string;
      experiments: string;
      navigationTiming: PerformanceNavigationTiming | undefined;
    }
  | {
      type: 'click';
      path: string;
      search: string;
      location: ClickLocation;
      position: number | undefined;
      tld: string;
      length: number;
      hasNumbers: boolean;
      hasHyphens: boolean;
    }
);

let eventQueue: Event[] = [];

const flushQueue = () => {
  if (eventQueue.length === 0) return;
  const eventsBatch = [...eventQueue];
  async.request<{}>({
    url: `${config.appURL}log/`,
    requestType: 'json',
    responseType: 'empty',
    body: eventsBatch,
    success() {
      eventQueue = eventQueue.filter(event => !eventsBatch.includes(event));
      storage.set('eventQueue', JSON.stringify(eventQueue));
    },
  });
};

export const restoreQueue = () => {
  eventQueue = JSON.parse(storage.get('eventQueue') || '[]');
  flushQueue();
};

const enqueueEvent = (event: Event) => {
  if (process.env.NODE_ENV !== 'production') {
    console.groupCollapsed(event.type);
    for (const key in event) {
      console.info(key, event[key as keyof typeof event]);
    }
    console.groupEnd();
  }

  eventQueue.push(event);
  storage.set('eventQueue', JSON.stringify(eventQueue));
  flushQueue();
};

export const pageview = () => {
  enqueueEvent({
    id: uuid(),
    type: 'pageview',
    path: window.location.pathname,
    deviceID: getDeviceID(),
    buildTime: getBuildTime(),
    sessionID: getSessionID(),
    userAgent: navigator.userAgent,
    referrer: document.referrer,
    windowSize: [document.body.clientWidth, window.innerHeight],
    timezoneOffset: new Date().getTimezoneOffset() / 60,
    language: navigator.languages ? navigator.languages[0] : navigator.language,
    experiments: Object.entries(experiments.getAllExperiments())
      .map(([name, group]) => `${name}=${group}`)
      .join(','),
    navigationTiming: getNavigationTiming(),
  });
};

const getNavigationTiming = () => {
  try {
    const [entry] = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    return entry.toJSON();
  } catch (err) {
    return undefined;
  }
};

export enum ClickLocation {
  SearchBox = 'searchBox',
  MainResult = 'mainResult',
  TldsColumn = 'tldsColumn',
  GeneratorColumn = 'generatorColumn',
  ForSaleColumn = 'forSaleColumn',
  ForSaleList = 'forSaleList',
  ExpiredList = 'expiredList',
  GeneratorList = 'generatorList',
  TldGrid = 'tldGrid',
  Favorites = 'favorites',
}

export const click = (domain: Domain, location: ClickLocation, position?: number) => {
  enqueueEvent({
    id: uuid(),
    type: 'click',
    path: window.location.pathname,
    search: store.getState().search,
    deviceID: getDeviceID(),
    buildTime: getBuildTime(),
    sessionID: getSessionID(),
    location,
    position,
    tld: domain.tld,
    length: name(domain).length,
    hasNumbers: /[0-9]/.test(name(domain)),
    hasHyphens: /-/.test(name(domain)),
  });
};

export const event = (eventType: string, eventID: string, eventInfo?: string, eventValue?: number) => {
  log.info('event', eventType, eventID, eventInfo, eventValue);

  if ((window as any).ga) {
    ga('send', 'event', eventType, eventID, eventInfo, eventValue);
  }

  const requestBody = {
    clientID: getClientID(),
    buildTime: getBuildTime(),
    eventID,
    eventInfo,
    eventType,
    eventValue,
    experiments: experiments.getGroups(),
    guid: getDeviceID(),
  };

  async.requestWithRetries<{}>({
    url: `${config.appURL}event/`,
    requestType: 'json',
    responseType: 'empty',
    body: requestBody,
    success() {},
    error(status) {
      log.error(log.Module.Analytics, 'Failed to log event after 3 tries', status);
    },
  });
};

let gaHasConverted = false;
export const firstConvert = () => {
  if (!gaHasConverted) {
    event('convert', 'first');
    gaHasConverted = true;
    actions.showHostingChooser();
  }
};

export const hasConvertedAtLeastOnce = () => gaHasConverted;

let hasUsedKeyboardShortcut = false;
export const firstKeyboardShortcut = () => {
  if (!hasUsedKeyboardShortcut) {
    event('interact', 'shortcut', 'first');
    hasUsedKeyboardShortcut = true;
  }
};

export let sawHostingChooser = () => {
  // Only run once
  sawHostingChooser = () => {};
  event('interact', 'hosting', 'show');
};

const deviceID: string | null = null;

export const getDeviceID = () => {
  if (deviceID) return deviceID;
  return storage.getOrCreate('deviceID', uuid);
};

const sessionID: string | null = null;

export const getSessionID = () => {
  if (sessionID) return sessionID;
  return storage.getOrCreateEphemeral('sessionID', uuid);
};

// don't send the data till after the controller has mounted. we shouldn't waste resources sending
// XHRs or whatever till the main controller is fully mounted.
let gaClientID = 0;
export const getClientID = () => {
  return gaClientID.toString();
};

export const getBuildTime = () => {
  return process.env.GATSBY_BUILD_TIME || 'development';
};

export const setup = (callback: (geography: {Country: string; City: string}) => void) => {
  // ga should always be defined in production (it's defined in a <head> script
  // block), but this occasionally breaks hot reload in development, so skip it.
  if (!(window as any).ga) {
    async.request({
      url: `${config.appURL}analytics/`,
      body: {},
      requestType: 'form',
      success: callback,
    });
  } else {
    ga(tracker => {
      // https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
      gaClientID = (tracker && tracker.get('clientId')) || 0;

      const query = {
        client_id: gaClientID.toString(),
      };

      async.request({
        url: `${config.appURL}analytics/`,
        body: query,
        requestType: 'form',
        success: callback,
      });
    });
  }
};
