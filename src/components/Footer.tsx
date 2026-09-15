import type { TranslationKey } from '../i18n/translations';

interface FooterProps {
  t: (key: TranslationKey) => string;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="mt-auto border-t border-white/5 bg-[#07070e]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold text-white">NightPulse</p>
            <p className="mt-1 text-xs text-zinc-500">18+ · Official links directory</p>
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-xs leading-relaxed text-zinc-500">
          {t('footerDisclaimer')}
        </p>
        <p className="mt-4 text-xs text-zinc-600">{t('footerRights')}</p>
      </div>
    </footer>
  );
}
