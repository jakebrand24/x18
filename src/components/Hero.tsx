import { motion } from 'framer-motion';
import type { TranslationKey } from '../i18n/translations';

interface HeroProps {
  t: (key: TranslationKey) => string;
}

export function Hero({ t }: HeroProps) {
  return (
    <section className="relative overflow-hidden pb-10 pt-12 sm:pb-14 sm:pt-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-fuchsia-600/15 blur-[100px]" />
        <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-violet-600/20 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-pink-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-pink-400" />
            {t('tagline')}
          </p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-white via-pink-100 to-violet-200 bg-clip-text text-transparent">
              {t('heroTitle')}
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base">
            {t('heroSubtitle')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
