/* Copyright 2005-present Instant Domain Search, Inc. */

import * as tlds from './tlds';

// TODO: review

const formatRegExp = /{\d+}/g;

export const formatp = (formatString: string, ...args: string[]) => {
  // positional format: {0} ... {n} in formatString to substitute for subsequent parameters
  // {n} in the formatString is distinct from the percent-encoded chars in our typical strings

  return formatString.replace(formatRegExp, match => args[parseInt(match.substr(1, match.length - 2), 10)]);
};

const leadingDots = /^\.*/;
const dotAnything = /\..*/;
const trailingHyphens = /-+$/;
const leadingHyphens = /^-+/;
const nonAlphanumericOrHyphen = /[^-A-Za-z0-9\u0080-\uFFFF]+/g;

// match algoritm in server/go/src/common/validator.go
export const sanitize = (str: string) => {
  return str
    .replace(leadingDots, '')
    .replace(dotAnything, '')
    .replace(trailingHyphens, '')
    .replace(leadingHyphens, '')
    .replace(nonAlphanumericOrHyphen, '')
    .substr(0, 63)
    .toLowerCase();
};

// typed search -> 'www.' (optional) + searchSansTld + '.' + searchedTld(optional)
export function normalizeSearch(typedSearch: string) {
  const match = tlds.regex.exec(typedSearch);
  if (!match) {
    return [sanitize(typedSearch), ''] as [string, string];
  }

  return [sanitize(match[2]), (match[4] || '').toLowerCase()] as [string, string];
}

export function debounce<Args extends unknown[], Result>(
  fun: (...args: Args) => Result,
  delay = 200,
): (...args: Args) => void {
  let timeout: number;
  return (...args) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => {
      fun(...args);
    }, delay);
  };
}

// Just like debounce, but lets the first event in a series through
export function debounceImmediate<Args extends unknown[], Result>(
  fun: (...args: Args) => Result,
  delay = 200,
): (...args: Args) => void {
  let timeout: number | null = null;
  let called = false;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
      called = true;
    } else {
      fun(...args);
      called = false;
    }
    timeout = window.setTimeout(() => {
      timeout = null;
      if (called) {
        fun(...args);
      }
    }, delay);
  };
}

export function throttle<Args extends unknown[], Result>(
  fun: (...args: Args) => Result,
  delay = 200,
): (...args: Args) => void {
  let timeout: number | null = null;
  let callAgain = false;
  return (...args) => {
    if (timeout) {
      callAgain = true;
      return;
    }
    fun(...args);
    timeout = window.setTimeout(() => {
      timeout = null;
      if (callAgain) {
        callAgain = false;
        fun(...args);
      }
    }, delay);
  };
}

// Like throttle, but collects the data passed to each call and concatenates it
// into one list, which is passed forward the next time the deadline expires.
export function batch<Item>(fun: (items: Item[]) => void, delay = 200): {(items: Item[]): void; flush: () => void} {
  let batch: Item[] = [];

  const flush = throttle(() => {
    if (batch.length === 0) return;
    fun(batch);
    batch = [];
  }, delay);

  const res = (items: Item[]) => {
    batch.push(...items);
    flush();
  };

  res.flush = () => {
    if (batch.length === 0) return;
    fun(batch);
    batch = [];
  };

  return res;
}

// inspired by: http://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
// match algoritm in server/go/src/common/hash_code.go
export function hashCode(str: string, seed = 0): number {
  let hash = seed;
  const len = str.length;
  for (let i = 0; i < len; i += 1) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash &= hash; // convert to 32bit integer
  }
  return hash;
}
