import React from 'react';
import { LocaleConsumer } from 'fbt-easy-setup';
import Select from 'react-select';
import LocaleText from './localeText';

// NOTE: The fbt babel plugin (collectFBT) requires enums to be required (not imported) and using none relative paths (therefore the aliases in the webpack config)
// eslint-disable-next-line import/no-unresolved
const LocaleEnum = require('Locale$FbtEnum');

const LOCALE_OPTS = Object.keys(LocaleEnum).map(locale => ({
  value: locale,
  label: <LocaleText locale={locale} />,
}));

const SelectLocale = () => (
  <LocaleConsumer>
    {({ locale, setLocale }) => (
      <Select
        className="select"
        value={{
          value: locale,
          label: <LocaleText locale={locale} />,
        }}
        options={LOCALE_OPTS}
        onChange={selectedLocale => setLocale(selectedLocale.value)}
      />
    )}
  </LocaleConsumer>
);

export default SelectLocale;
