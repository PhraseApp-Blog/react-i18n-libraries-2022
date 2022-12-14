import { useState } from "react";
import { IntlProvider } from "react-intl";

const messages = {
  en: {
    logo: "logo",
    demo: "This demo app was internationalized by react-intl",
  },
  ar: {
    logo: "رمز التطبيق",
    demo: "تم تدويل هذا التطبيق التجريبي بواسطة رياكت إنتل",
  },
};

function I18n({ render }) {
  const [locale, setLocale] = useState("en");

  return (
    <IntlProvider messages={messages[locale]} locale={locale} key={locale}>
      {render(setLocale)}
    </IntlProvider>
  );
}

export default I18n;
