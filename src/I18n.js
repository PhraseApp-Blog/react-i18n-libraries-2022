import { useEffect, useState } from "react";
import { I18nProvider } from "@lingui/react";
import { i18n } from "@lingui/core";
import { en as enPlurals, ar as arPlurals } from "make-plural/plurals";
import { messages as enMessages } from "./locales/en-US/messages";
import { messages as arMessages } from "./locales/ar-EG/messages";

const localeConfig = {
  "en-US": { messages: enMessages, plurals: enPlurals },
  "ar-EG": { messages: arMessages, plurals: arPlurals },
};

const defaultLocale = "en-US";

function loadLocale(locale) {
  const { plurals, messages } = localeConfig[locale];

  i18n.loadLocaleData(locale, { plurals });
  i18n.load(locale, messages);
  i18n.activate(locale);
}

loadLocale(defaultLocale);

function I18n({ render }) {
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => loadLocale(locale), [locale]);

  return <I18nProvider i18n={i18n}>{render(setLocale)}</I18nProvider>;
}

export default I18n;
