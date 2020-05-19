/* Copyright 2005-present Instant Domain Search, Inc. */

import {event} from './analytics';

export const cookieMonster = () => {
  // https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage
  const cookieWhitelist = {
    __utma: true, // Google Analytics: Users and sessions
    __utmv: true, // Google Analytics: Custom variables
    __utmx: true, // Google Analytics: Experiments
    __utmxx: true, // Google Analytics: Experiments
    __utmz: true, // Google Analytics: Traffic source
    _fbp: true, // Facebook
    _ga: true, // Google Analytics
    _gaexp: true, // Google Analytics: Experiments
    _gat: true, // Google Analytics
    _gid: true, // Google Analytics
    AMP_TOKEN: true, // Google Analytics
  };

  for (const cookie of document.cookie.split(';')) {
    const cookieMatch = cookie.match(/^\s*([^=]*)=(.*)/);
    if (cookieMatch) {
      const cookieName = cookieMatch[1];
      if (cookieName in cookieWhitelist) {
        continue;
      }

      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.${document.domain}; path=/;`;
      event('debug', 'cookie', `deleted: ${cookieName}`);
    }
  }
};
