import { motion } from 'framer-motion';
import type { Lang } from '../i18n/translations';
import type { TranslationKey } from '../i18n/translations';

interface AgeGateProps {
  t: (key: TranslationKey) => string;
  lang: Lang;
  onEnter: () => void;
  onLeave: () => void;
  onToggleLang: () => void;
}

export function AgeGate({ t, lang, onEnter, onLeave, onToggleLang }: AgeGateProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#06060c]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-violet-600/25 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-4 w-full max-w-md"
      >
        <div className="glass-card neon-border rounded-3xl p-8 text-center shadow-2xl shadow-fuchsia-500/10">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-violet-600 shadow-lg shadow-pink-500/40">
            <span className="font-display text-2xl font-extrabold text-white">18+</span>
          </div>

          <h1 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {t('ageTitle')}
          </h1>
          <p className="mt-1 bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-sm font-semibold text-transparent">
            NightPulse
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">{t('ageBody')}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={onEnter}
              className="btn-primary flex-1 rounded-xl px-5 py-3 text-sm font-semibold text-white"
            >
              {t('enter')}
            </button>
            <button
              type="button"
              onClick={onLeave}
              className="flex-1 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/10 hover:text-white"
            >
              {t('leave')}
            </button>
          </div>

          <button
            type="button"
            onClick={onToggleLang}
            className="mt-6 text-xs font-medium text-zinc-500 transition hover:text-pink-400"
            aria-label={t('langLabel')}
          >
            {lang === 'vi' ? 'English' : 'Tiếng Việt'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
