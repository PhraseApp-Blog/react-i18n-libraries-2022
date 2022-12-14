import { useEffect, useState } from "react";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { messages as enMessages } from "./locales/en-US/messages";
import { messages as arMessages } from "./locales/ar-EG/messages";

const messages = {
  "en-US": enMessages,
  "ar-EG": arMessages,
};

const defaultLocale = "en-US";

function loadLocale(locale) {
  i18n.load(locale, messages[locale]);
  i18n.activate(locale);
}

loadLocale(defaultLocale);

function I18n({ render }) {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => loadLocale(locale), [locale]);

  return <I18nProvider i18n={i18n}>{render(setLocale)}</I18nProvider>;
}

export default I18n;
