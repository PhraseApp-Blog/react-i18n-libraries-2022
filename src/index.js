import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import I18n from "./I18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18n render={(setLocale) => <App onLocaleChanged={setLocale} />} />
  </React.StrictMode>
);
