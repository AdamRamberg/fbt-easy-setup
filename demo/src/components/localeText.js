import React from 'react';
import { string } from 'prop-types';
import fbt from 'fbt';

// NOTE: The fbt babel plugin (collectFBT) requires enums to be required (not imported) and using none relative paths (therefore the aliases in the webpack config)
// eslint-disable-next-line import/no-unresolved
const LocaleEnum = require('Locale$FbtEnum');

const LocaleText = ({ locale }) => (
  <fbt desc="Locale translations">
    <fbt:enum enum-range={LocaleEnum} value={locale} />
  </fbt>
);

LocaleText.propTypes = {
  locale: string.isRequired,
};

export default LocaleText;
