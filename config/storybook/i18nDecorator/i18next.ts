/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const ns = ['translations', 'main', 'about'];
const supportedLngs = <const>['en', 'ru'];
const resources = ns.reduce((acc, n) => {
  supportedLngs.forEach(lng => {
    if (!acc[lng]) acc[lng] = {};
    acc[lng] = {
      ...acc[lng],
      [n]: require(`../../../public/locales/${lng}/${n}.json`),
    };
  });
  return acc;
}, {} as Record<string, Record<string, NodeRequire>>);

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    defaultNS: 'translations',
    ns,
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs,
    resources,
  });

export default i18n;
