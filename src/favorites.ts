/* Copyright 2005-present Instant Domain Search, Inc. */

export const enabled = () => {
  try {
    return !!window.localStorage;
  } catch (e) {
    // localStorage is disabled; private browsing probably enabled
    // see: http://caniuse.com/#search=localStorage -> Known Issues
    return false;
  }
};

export const load = (): Set<string> => {
  if (!enabled()) {
    return new Set<string>();
  }
  let list = JSON.parse(localStorage.getItem('favorites') || '[]') as string[];
  // Ignore old data
  list = list.filter(item => typeof item === 'string');
  return new Set(list);
};

export const save = (favorites: Set<string>) => {
  if (!enabled()) {
    return;
  }
  localStorage.setItem('favorites', JSON.stringify(Array.from(favorites)));
};
