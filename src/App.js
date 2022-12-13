import { IntlProvider, FormattedMessage } from "react-intl";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const messages = {
  en: {
    demo: "This demo app was internationalized by react-intl",
  },
  ar: {
    demo: "تم تدويل هذا التطبيق التجريبي بواسطة رياكت إنتل",
  },
};

function App() {
  const [locale, setLocale] = useState("en");

  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
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
            <FormattedMessage id="demo" />
          </p>
        </main>
      </div>
    </IntlProvider>
  );
}

export default App;
