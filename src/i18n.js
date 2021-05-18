import i18n from "i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // we init with resources
    resources: {
      en: {
        translations: {
          Accueil:"Home",
          Projets:"Work",
          Graphisme:"Design",
          Web: "Web",
          Contact:"Contact",
          // "Projets":"Work",
          "Bienvenue sur notre Blog":"Welcome to our Blog"
          
        }
      },
      fr: {
        translations: {
          Accueil:"Accueil",
          Projets:"Projets",
          Graphisme:"Graphisme",
          Web: "Web",
          Contact:"Contact",
          // "Projets":"Projets",
          "Bienvenue sur notre Blog":"Bienvenue sur notre Blog"
        }
      }
    },
    fallbackLng: "fr",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;