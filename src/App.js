import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import logo from "./logo.svg";
import "./App.css";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        logo: "logo",
        demo: "This demo app was internationalized by i18next",
      },
    },
    ar: {
      translation: {
        logo: "رمز التطبيق",
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
        <img src={logo} className="app__logo" alt={t("logo")} />
        <button className="app__link" onClick={() => setLocale("en")}>
          English
        </button>
        <button className="app__link" onClick={() => setLocale("ar")}>
          Arabic
        </button>
      </header>

      <main className="app__main">
        <p>{t("demo")}</p>
      </main>
    </div>
  );
}

export default App;
