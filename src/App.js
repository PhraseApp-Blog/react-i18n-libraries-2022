import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import logo from "./logo.svg";
import "./App.css";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        demo: "This demo app was internationalized by i18next",
      },
    },
    ar: {
      translation: {
        demo: "تم تدويل هذا التطبيق التجريبي بواسطة آي ايتين نكست",
      },
    },
  },
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const { t, i18n } = useTranslation();

  function setLocale(newLocale) {
    i18n.changeLanguage(newLocale);
  }

  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
        <a href="#" className="app__link" onClick={() => setLocale("en")}>
          English
        </a>
        <a href="#" className="app__link" onClick={() => setLocale("ar")}>
          Arabic
        </a>
      </header>

      <main className="app__main">
        <p>{t("demo")}</p>
      </main>
    </div>
  );
}

export default App;
