import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en/translation.json';
import translationHE from './he/translation.json';

export const resources = {
  en: {
    translation: translationEN,
  },
  he: {
    translation: translationHE,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'he',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
