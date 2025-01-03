// packages/hooks/src/useI18N.ts
// A hook that uses next/router to detect locale and returns a translation function.

import { useRouter } from 'next/router';
// Example local reference to locale JSON, or could be replaced with i18n
import localeFileEN from '../config/locales/en.json';
import localeFileES from '../config/locales/es.json';

// Enumerated possible locales
enum Locale {
  EN = 'en',
  ES = 'es',
}

// Mapping from locale to the JSON data
const LOCALE_FILES: Record<Locale, any> = {
  [Locale.EN]: localeFileEN,
  [Locale.ES]: localeFileES,
};

export const getTranslation = (stringKey: string, locale: Locale): string => {
  const localeFile = LOCALE_FILES[locale];
  if (!localeFile) {
    // fallback to English if locale is missing
    return localeFileEN?.[stringKey] ?? stringKey;
  }
  return localeFile?.[stringKey] ?? localeFileEN?.[stringKey] ?? stringKey;
};

interface I18NReturnProps {
  t: (stringKey: string) => string;
}

const useI18N = (): I18NReturnProps => {
  const { locale } = useRouter();
  // Basic fallback if locale is unrecognized
  const selectedLocale = (locale as Locale) || Locale.EN;

  const t = (str: string): string => getTranslation(str, selectedLocale);

  return { t };
};

export default useI18N;
