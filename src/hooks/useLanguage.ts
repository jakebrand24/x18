import { useCallback, useEffect, useState } from 'react';
import { translations, type Lang, type TranslationKey } from '../i18n/translations';

const STORAGE_KEY = 'nightpulse-lang';

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'vi') return saved;
    } catch {
      /* ignore */
    }
    return 'vi';
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'vi' ? 'en' : 'vi'));
  }, []);

  const t = useCallback(
    (key: TranslationKey) => {
      const value = translations[lang][key];
      if (key === 'footerRights') {
        return value.replace('{year}', String(new Date().getFullYear()));
      }
      return value;
    },
    [lang],
  );

  return { lang, setLang, toggleLang, t };
}
