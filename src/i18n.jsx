import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { resorce } from "./locales";

const supportedLngs = ["en", "uz", "ru"];
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    supportedLngs,
    interpolation: {
      escapeValue: false,
    },
    resources: resorce,
  });

export default i18n;