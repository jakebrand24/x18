import { Moon } from 'lucide-react';
import type { Lang } from '../i18n/translations';
import type { TranslationKey } from '../i18n/translations';

interface HeaderProps {
  t: (key: TranslationKey) => string;
  lang: Lang;
  onToggleLang: () => void;
}

export function Header({ t, lang, onToggleLang }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0a0a12]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="group flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-violet-600 shadow-md shadow-pink-500/30 transition group-hover:shadow-pink-500/50">
            <Moon className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
          </div>
          <div className="leading-tight">
            <span className="font-display text-lg font-bold tracking-tight text-white">
              {t('brand')}
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-widest text-zinc-500 sm:block">
              {t('tagline')}
            </span>
          </div>
        </a>

        <button
          type="button"
          onClick={onToggleLang}
          className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold text-zinc-300 transition hover:border-pink-500/40 hover:bg-pink-500/10 hover:text-pink-300"
          aria-label={t('langLabel')}
        >
          <span className={lang === 'vi' ? 'text-pink-400' : 'text-zinc-500'}>VI</span>
          <span className="text-zinc-600">/</span>
          <span className={lang === 'en' ? 'text-pink-400' : 'text-zinc-500'}>EN</span>
        </button>
      </div>
    </header>
  );
}
