import { init } from 'fbt-easy-setup';
import translations from '../translatedFbts.json';
import locales from './locales';

init({ translations, locales, defaultLocale: navigator.language });
