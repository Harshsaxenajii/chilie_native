import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import hi from "./locales/hi.json";
import te from "./locales/te.json";

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  te: { translation: te },
};

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    if (typeof navigator !== "undefined" && navigator.language) {
      const userLang = navigator.language || navigator.userLanguage;
      const bestLanguage = userLang.startsWith("hi") ? "hi" : "en";
      callback(bestLanguage);
    } else {
      // Default language if navigator is not available
      callback("en");
    }
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
