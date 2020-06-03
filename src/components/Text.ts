/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import * as en from '../locales/en.json';

export type LanguageCode = 'en' | 'es' | 'fr' | 'pt' | 'ru' | 'zh';

export enum LocalizedLanguage {
  English = 'English',
  Spanish = 'Español',
  French = 'Français',
  Portuguese = 'Português',
  Russian = 'Русский',
  Chinese = '中文',
}

export type LocaleKey = keyof typeof en;

const context = React.createContext('en');
export const Provider = context.Provider;
export const languageMap: {[key in LanguageCode]: LocalizedLanguage} = {
  en: LocalizedLanguage.English,
  es: LocalizedLanguage.Spanish,
  fr: LocalizedLanguage.French,
  pt: LocalizedLanguage.Portuguese,
  ru: LocalizedLanguage.Russian,
  zh: LocalizedLanguage.Chinese,
};

export function useLanguage() {
  return React.useContext(context) as LanguageCode;
}

function Text({id}: {id: LocaleKey}) {
  const lang = useLanguage();
  const strings = React.useMemo(() => require(`../locales/${lang}`), [lang]);
  return strings[id] || en[id];
}

export default Text;
