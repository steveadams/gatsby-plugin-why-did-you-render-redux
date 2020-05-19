/* Copyright 2005-present Instant Domain Search, Inc. */

import * as tlds from './tlds-data.json';

type Gtld = typeof tlds['gtlds'][0];

const defaultCategory = 'Other';

export const list = tlds.gtlds;

const categories: {[id: number]: string} = {};

export const byName: {[key: string]: Gtld} = {};
export const byCategory: {[key: string]: Gtld[]} = {};

for (const category of tlds.categories) {
  categories[category.id] = category.name;
  byCategory[category.name] = [];
}

byCategory[defaultCategory] = [];

for (const tld of tlds.gtlds) {
  byName[tld.name] = tld;
  for (const id of tld.c || []) {
    byCategory[categories[id]].push(tld);
  }
  if (!tld.c) {
    byCategory[defaultCategory].push(tld);
  }
}

const names = tlds.gtlds.map(tld => tld.name);
export const regex = new RegExp(`^\\s*(www\\.)?(.*?)(\\.(${names.join('|')}))?\\s*$`, 'i');

// this is pretty inefficient, and runs on every keystroke. hacky memoize for now.
// TODO: revisit sorting, unclown
let popularTldsWithPreferredLen: number = 0;
let popularTldsWithPreferredMemoized: string[] = [];
let lastExtensionSimilarity: object | undefined;
let lastExtensionSort: string | undefined;
export const popularTldsWithPreferred = (
  preferred: string[],
  extensionSimilarity: {[Tld: string]: number | undefined} | undefined,
  extensionSort: 'popular' | 'relevant',
): string[] => {
  if (
    popularTldsWithPreferredLen === preferred.length &&
    popularTldsWithPreferredMemoized.length > 0 &&
    extensionSimilarity === lastExtensionSimilarity &&
    extensionSort === lastExtensionSort
  ) {
    return popularTldsWithPreferredMemoized;
  }

  const featured = byCategory.Featured.map(tld => tld.name);
  const popular = byCategory.Popular.map(tld => tld.name);
  const preferredSet = new Set(preferred);
  const popularSet = new Set(popular);
  const tldSet = new Set([...preferred, ...popular, ...featured]);

  const tlds = Array.from(tldSet);

  tlds.sort((a, b) => {
    // preferred
    if (preferredSet.has(a) && !preferredSet.has(b)) return -1;
    if (!preferredSet.has(a) && preferredSet.has(b)) return 1;

    // then similarity
    if (extensionSort === 'relevant' && extensionSimilarity && extensionSimilarity[a] && extensionSimilarity[b]) {
      return extensionSimilarity[b]! - extensionSimilarity[a]!;
    }

    // then popular
    if (popularSet.has(a) && !popularSet.has(b)) return -1;
    if (!popularSet.has(a) && popularSet.has(b)) return 1;

    return 0;
  });

  popularTldsWithPreferredLen = preferred.length;
  popularTldsWithPreferredMemoized = tlds;
  lastExtensionSimilarity = extensionSimilarity;
  lastExtensionSort = extensionSort;
  return popularTldsWithPreferredMemoized;
};

// TODO: generate this automatically; unclown
export const bestGeography = (country: string): string[] => {
  if (country.length === 0) {
    return [];
  }

  switch (country) {
    case 'au':
      return ['com.au', 'net.au', 'org.au'];
    case 'br':
      return ['com.br'];
    case 'cn':
      return ['cn', 'com.cn', 'org.cn'];
    case 'co':
      return ['co', 'net.co'];
    case 'in':
      return ['co.in', 'ind.in', 'net.in', 'org.in'];
    case 'kr':
      return ['co.kr'];
    case 'mx':
      return ['mx', 'com.mx'];
    case 'nz':
      return ['co.nz', 'net.nz', 'org.nz'];
    case 'pe':
      return ['pe', 'com.pe', 'org.pe'];
    case 'ph':
      return ['ph', 'com.ph', 'net.ph', 'org.ph'];
    case 'pl':
      return ['pl', 'org.pl'];
    case 'so':
      return ['so', 'org.so'];
    case 'tw':
      return ['tw', 'com.tw', 'org.tw'];
    case 'uk':
      return ['uk', 'co.uk', 'org.uk', 'me.uk'];
    case 'gb':
      return ['gb', 'co.uk', 'org.uk', 'me.uk'];
    case 'za':
      return ['co.za'];
    default:
      return [country];
  }
};
