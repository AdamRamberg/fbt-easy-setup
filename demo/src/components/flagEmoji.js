import React from 'react';
import { LocaleConsumer } from 'fbt-easy-setup';

const FlagEmoji = () => {
  const getEmoji = locale => {
    switch (locale) {
      case 'sv_SE':
        return '🇸🇪';
      case 'it_IT':
        return '🇮🇹';
      case 'de_DE':
        return '🇩🇪';
      case 'es_ES':
        return '🇪🇸';
      default:
        return '🇺🇸';
    }
  };
  return (
    <LocaleConsumer>
      {({ locale }) => (
        <span className="flag-emoji" role="img" aria-label="locale">
          {' '}
          {getEmoji(locale)}
        </span>
      )}
    </LocaleConsumer>
  );
};

export default FlagEmoji;
