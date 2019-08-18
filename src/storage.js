const storage = window && window.localStorage;

const LOCALE_STORAGE_KEY = '___locale___';

export const getLocaleFromStorage = () => storage.getItem(LOCALE_STORAGE_KEY);

export const setLocaleToStorage = locale =>
  storage.setItem(LOCALE_STORAGE_KEY, locale);
