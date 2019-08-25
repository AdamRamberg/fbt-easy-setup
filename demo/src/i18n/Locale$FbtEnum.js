const LOCALES = require('./locales');

const LocaleEnums = Object.keys(LOCALES).reduce(
  (acc, locale) => ({ ...acc, [locale]: LOCALES[locale].englishName }),
  {},
);

module.exports = LocaleEnums;
