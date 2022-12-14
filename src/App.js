import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import logo from "./logo.svg";
import "./App.css";

i18next.use(initReactI18next).init({
  resources: {
    "en-US": {
      translation: {
        logo: "logo",
        demo: "This demo app was internationalized by i18next",
        now: "Current date and time are {{currentDateTime, datetime}}",
      },
    },
    "ar-EG": {
      translation: {
        logo: "رمز التطبيق",
        demo: "تم تدويل هذا التطبيق التجريبي بواسطة آي ايتين نكست",
        now: "التاريخ والوقت الحاليان هما {{currentDateTime, datetime}}",
      },
    },
  },
  lng: "en-US",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt={t("logo")} />
        <button
          className="app__link"
          onClick={() => i18n.changeLanguage("en-US")}
        >
          English
        </button>
        <button
          className="app__link"
          onClick={() => i18n.changeLanguage("ar-EG")}
        >
          Arabic
        </button>
      </header>

      <main className="app__main">
        <p>{t("demo")}</p>

        <p>
          {t("now", {
            currentDateTime: Date.now(),
            formatParams: {
              currentDateTime: { dateStyle: "full", timeStyle: "long" },
            },
          })}
        </p>
      </main>
    </div>
  );
}

export default App;
