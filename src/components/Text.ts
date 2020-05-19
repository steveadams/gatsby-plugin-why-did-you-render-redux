/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import * as en from '../locales/en.json';

const context = React.createContext('en');
export const Provider = context.Provider;

export function useLanguage() {
  return React.useContext(context);
}

function Text({id}: {id: keyof typeof en}) {
  const lang = useLanguage();
  const strings = React.useMemo(() => require(`../locales/${lang}`), [lang]);
  return strings[id] || en[id];
}

export default Text;
