/* Copyright 2005-present Instant Domain Search, Inc. */

import * as analytics from './analytics';
import {country} from './selectors';
import {store} from './store';
import * as streamingAsync from './streamingAsync';
import {bestGeography, popularTldsWithPreferred} from './tlds';
import * as util from './util';

const NOMINL_HASH_SEED = 42; // should match client/app/actions.jsx -- TODO: why the copypasta?

let hasSearched = false;

export const search = (
  path: string,
  phrase: string,
  tldTags: 'popular' | 'all' | null,
  preferredTlds: string[],
  onResults: (domains: Domain[]) => void,
  onDone: () => void,
  onError: (badStatus: number | null) => void,
  limit = 1000,
) => {
  // The user has searched for at least one thing
  if (!hasSearched) {
    analytics.event('search', 'first');
    hasSearched = true;
  }

  if (!phrase) {
    onResults([]);
    onDone();
    return;
  }

  // Single-character domains are all taken
  if (/^\w$/.test(phrase)) {
    onDone();
    return;
  }

  let startTime: number;
  if (Math.random() < 0.01) {
    // only track start time 1% of the time
    startTime = new Date().getTime();
  }

  const timedSearches = new Set();

  const params: {[key: string]: string | number} = {
    hash: util.hashCode(phrase, NOMINL_HASH_SEED).toString(),
    limit,
  };

  if (tldTags === 'popular') {
    params.tlds = [
      ...popularTldsWithPreferred(preferredTlds, undefined, 'popular'),
      ...bestGeography(
        country(store.getState())
          .toString()
          .toLowerCase(),
      ),
    ].join(',');
  } else if (tldTags) {
    params.tldTags = tldTags;
  }

  streamingAsync.request<Domain>(
    `${path}${encodeURIComponent(phrase)}`,
    params,
    results => {
      if (limit <= 0) return;
      for (const result of results) {
        const {search} = result;

        // log timing data for first result in each search category
        if (startTime && !timedSearches.has(search)) {
          const finishTime = new Date().getTime();
          if ((window as any).ga) {
            ga('send', 'timing', 'first result', search, finishTime - startTime);
          }

          timedSearches.add(search);
        }
      }

      onResults(results.slice(0, limit));
      limit -= results.length;
    },
    onDone,
    onError,
  );
};
