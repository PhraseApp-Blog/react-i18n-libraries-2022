import { Trans, t } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import logo from "./logo.svg";
import "./App.css";

function App({ onLocaleChanged }) {
  const { i18n } = useLingui();

  return (
    <div className="app">
      <header className="app__header">
        <img
          src={logo}
          className="app__logo"
          alt={t({ id: "logo", message: "logo" })}
        />
        <button className="app__link" onClick={() => onLocaleChanged("en-US")}>
          English
        </button>
        <button className="app__link" onClick={() => onLocaleChanged("ar-EG")}>
          Arabic
        </button>
      </header>

      <main className="app__main">
        <p>
          <Trans>This demo app was internationalized using LinguiJS</Trans>
        </p>

        <p>
          <Trans>
            Current date and time are{" "}
            {i18n.date(Date.now(), {
              dateStyle: "medium",
              timeStyle: "medium",
            })}
          </Trans>
        </p>
      </main>
    </div>
  );
}

export default App;
