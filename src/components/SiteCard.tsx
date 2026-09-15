import { ExternalLink, Radio } from 'lucide-react';
import { motion } from 'framer-motion';
import type { SiteEntry } from '../data/sites';
import type { Lang } from '../i18n/translations';
import type { TranslationKey } from '../i18n/translations';

interface SiteCardProps {
  site: SiteEntry;
  lang: Lang;
  t: (key: TranslationKey) => string;
  index?: number;
}

export function SiteCard({ site, lang, t, index = 0 }: SiteCardProps) {
  const desc = lang === 'vi' ? site.descriptionVi : site.descriptionEn;

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.35), ease: [0.22, 1, 0.36, 1] }}
      className="group glass-card neon-border-hover relative flex flex-col overflow-hidden rounded-2xl p-5 transition duration-300 hover:-translate-y-1"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${site.gradient} font-display text-sm font-bold text-white shadow-lg`}
          >
            {site.initial}
          </div>
          <div>
            <h3 className="font-display text-base font-bold text-white">{site.name}</h3>
            <div className="mt-1 flex flex-wrap gap-1">
              {site.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
          <Radio className="h-2.5 w-2.5 animate-pulse" />
          {t('liveBadge')}
        </span>
      </div>

      <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-400">{desc}</p>

      <a
        href={site.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white"
      >
        {t('visit')}
        <ExternalLink className="h-3.5 w-3.5 opacity-80" />
      </a>
    </motion.article>
  );
}
