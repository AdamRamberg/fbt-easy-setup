import { init } from 'fbt';
import { setLocales } from './locales';
import { setLocale } from './localeUtils';
import { getLocaleFromStorage } from './storage';

export default ({ translations, locales, defaultLocale }) => {
  init({ translations });
  setLocales(locales);
  setLocale(getLocaleFromStorage() || defaultLocale);
};
