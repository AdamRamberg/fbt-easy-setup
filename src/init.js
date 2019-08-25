import { init } from 'fbt';
import { setLocales } from './locales';
import { setLocale } from './localeUtils';
import { setStorage, getLocaleFromStorage } from './storage';

export default ({ translations, locales, defaultLocale, storage }) => {
  if (storage) setStorage(storage);
  init({ translations });
  setLocales(locales);
  setLocale(getLocaleFromStorage() || defaultLocale);
};
