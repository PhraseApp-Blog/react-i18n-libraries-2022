import { useEffect, useState } from "react";
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";
import { Trans } from "@lingui/macro";
import { messages as enMessages } from "./locales/en/messages";
import { messages as arMessages } from "./locales/ar/messages";
import logo from "./logo.svg";
import "./App.css";

const messages = {
  en: enMessages,
  ar: arMessages,
};

function App() {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    i18n.load(locale, messages[locale]);
    i18n.activate(locale);
  }, [locale]);

  return (
    <I18nProvider i18n={i18n}>
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
          <p>
            <Trans>This demo app was internationalized using lingui</Trans>
          </p>
        </main>
      </div>
    </I18nProvider>
  );
}

export default App;
