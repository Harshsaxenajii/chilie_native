import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./locales/en-US.json";
import enCL from "./locales/es-CL.json";

const resources = {
  "en-US": { translation: enUS },
  "en-CL": { translation: enCL },
};

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (callback) => {
    if (typeof navigator !== "undefined" && navigator.language) {
      const userLang = navigator.language || navigator.userLanguage;
      const bestLanguage = userLang === "en-CL" ? "en-CL" : "en-US";
      callback(bestLanguage);
    } else {
      // Default language if navigator is not available
      callback("en-US");
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
    fallbackLng: "en-US",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
