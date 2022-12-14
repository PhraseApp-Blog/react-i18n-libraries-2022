import { FormattedMessage, useIntl } from "react-intl";
import logo from "./logo.svg";
import "./App.css";

function App({ onLocaleChanged }) {
  const intl = useIntl();

  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt={intl.$t({ id: "logo" })} />
        <button className="app__link" onClick={() => onLocaleChanged("en")}>
          English
        </button>
        <button className="app__link" onClick={() => onLocaleChanged("ar")}>
          Arabic
        </button>
      </header>

      <main className="app__main">
        <p>
          <FormattedMessage id="demo" />
        </p>
      </main>
    </div>
  );
}

export default App;
