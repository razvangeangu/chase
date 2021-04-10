import locale from '@flyskywhy/react-native-locale-detector';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en/translation.json';
import ro from './ro/translation.json';
import { convertLanguageJsonToObject } from './translations';

export const translationsJson = {
  en: {
    translation: en,
  },
  ro: {
    translation: ro,
  },
};

// Create the 'translations' object to provide full intellisense support for the static json files.
convertLanguageJsonToObject(en);

export const i18n = i18next
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  .use({
    init: Function.prototype,
    type: 'languageDetector',
    detect: () => locale || 'en',
    cacheUserLanguage: Function.prototype,
  })
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: translationsJson,
    fallbackLng: 'en',
    debug:
      process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
