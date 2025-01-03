// packages/hooks/src/useTranslation.ts
// An example of hooking into react-i18next for translation.
// Typically used in web or mobile if i18next is configured.

import { useTranslation as useI18nTranslation } from 'react-i18next';

const useTranslation = () => {
  const { t, i18n } = useI18nTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return {
    t,
    currentLanguage: i18n.language,
    changeLanguage,
  };
};

export default useTranslation;
