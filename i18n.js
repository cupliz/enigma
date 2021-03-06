import i18n from 'i18next'
// import Backend from 'i18next-xhr-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import en from './locales/en'
import id from './locales/id'

i18n
  // .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
    },
    fallbackLng: 'en',
    debug: false,
    // keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
