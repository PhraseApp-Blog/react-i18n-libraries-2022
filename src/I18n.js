import { useState } from "react";
import { IntlProvider } from "react-intl";

const messages = {
  "en-US": {
    logo: "logo",
    demo: "This demo app was internationalized by react-intl",
    now: "Current date and time are {currentDateTime, date, ::EEE, MMM d, yyyy h:mm a}",
  },
  "ar-EG": {
    logo: "رمز التطبيق",
    demo: "تم تدويل هذا التطبيق التجريبي بواسطة رياكت إنتل",
    now: "التاريخ والوقت الحاليان هما {currentDateTime, date, ::EEE, MMM d, yyyy h:mm a}",
  },
};

function I18n({ render }) {
  const [locale, setLocale] = useState("en-US");

  return (
    <IntlProvider messages={messages[locale]} locale={locale} key={locale}>
      {render(setLocale)}
    </IntlProvider>
  );
}

export default I18n;
