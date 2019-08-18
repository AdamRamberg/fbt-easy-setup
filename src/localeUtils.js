import { IntlViewerContext } from 'fbt';
import { getLocales } from './locales';
import { setLocaleToStorage } from './storage';

export const getBcp47ByLocale = loc =>
  getLocales()[loc] && getLocales()[loc].bcp47;

export const getLocaleByBcp47 = bcp47 => {
  let toRet;
  const localeKeys = Object.keys(getLocales());
  localeKeys.forEach(key => {
    if (getBcp47ByLocale(key) === bcp47) {
      toRet = key;
    }
  });
  return toRet;
};

export const isRtl = loc => !(getLocales()[loc] && !getLocales()[loc].rtl);

export const setLocale = input => {
  const localeExists =
    input && (getLocaleByBcp47(input) || getBcp47ByLocale(input));
  const providedLocale = localeExists
    ? getLocaleByBcp47(input) || input
    : 'en_US';
  const providedBcp47 = localeExists
    ? getBcp47ByLocale(input) || input
    : 'en-US';

  IntlViewerContext.locale = providedLocale;
  document.documentElement.lang = providedBcp47;
  document.body.className = isRtl(providedLocale) ? 'rtl' : 'ltr';
  setLocaleToStorage(providedLocale);
  return providedLocale;
};
