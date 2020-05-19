/* Copyright 2005-present Instant Domain Search, Inc. */

import * as log from './log';

export const get = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    log.warn('Unable to read from localStorage', e);
    return null;
  }
};

export const set = (key: string, value: string) => {
  try {
    return localStorage.setItem(key, value);
  } catch (e) {
    log.warn('Unable to write to localStorage', e);
  }
};

export const getOrCreate = (key: string, create: () => string) => {
  const value = get(key);
  if (value !== null) return value;
  const newValue = create();
  set(key, newValue);
  return newValue;
};

export const getEphemeral = (key: string) => {
  try {
    return sessionStorage.getItem(key);
  } catch (e) {
    log.warn('Unable to read from sessionStorage', e);
    return null;
  }
};

export const setEphemeral = (key: string, value: string) => {
  try {
    return sessionStorage.setItem(key, value);
  } catch (e) {
    log.warn('Unable to write to sessionStorage', e);
  }
};

export const getOrCreateEphemeral = (key: string, create: () => string) => {
  const value = getEphemeral(key);
  if (value !== null) return value;
  const newValue = create();
  setEphemeral(key, newValue);
  return newValue;
};
