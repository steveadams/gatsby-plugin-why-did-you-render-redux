/* Copyright 2005-present Instant Domain Search, Inc. */

import * as React from 'react';

import * as en from '../locales/en.json';

export const languageCodes: Record<Language, LanguageCode> = {
  english: 'en',
  spanish: 'es',
  french: 'fr',
  portuguese: 'pt',
  russian: 'ru',
  chinese: 'zh',
};

export const localizedLanguageNames: Record<LanguageCode, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
  ru: 'Русский',
  zh: '中文',
};

export type LocaleKey = keyof typeof en;

const context = React.createContext(languageCodes.english);
export const Provider = context.Provider;

export function useLanguage() {
  return React.useContext(context) as LanguageCode;
}

function Text({id}: {id: LocaleKey}) {
  const lang = useLanguage();
  const strings = React.useMemo(() => require(`../locales/${lang}`), [lang]);
  return strings[id] || en[id];
}

export default Text;
