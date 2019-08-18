let locales = {
  en_US: {
    bcp47: 'en-US',
    displayName: 'English (US)\u200e',
    englishName: 'English (US)',
    rtl: false,
  },
};

export const setLocales = newLocales => {
  locales = newLocales;
};

export const getLocales = () => locales;
