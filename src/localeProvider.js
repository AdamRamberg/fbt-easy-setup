import React, { useState } from 'react';
import { func, node } from 'prop-types';
import { IntlViewerContext } from 'fbt';
import { setLocale } from './localeUtils';
import LocaleContext from './localeContext';

const LocaleProvider = ({ children, rerender }) => {
  const [localeState, setLocaleState] = useState(IntlViewerContext.locale);

  const setLocaleAndRerender = input => {
    const providedLocale = setLocale(input);
    setLocaleState(providedLocale);
    rerender();
  };

  return (
    <LocaleContext.Provider
      value={{ locale: localeState, setLocale: setLocaleAndRerender }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

LocaleProvider.propTypes = {
  children: node.isRequired,
  rerender: func,
};

LocaleProvider.defaultProps = {
  rerender: () => window.location.reload(),
};

export default LocaleProvider;
