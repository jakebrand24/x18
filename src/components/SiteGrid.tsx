import type { SiteEntry } from '../data/sites';
import type { Lang } from '../i18n/translations';
import type { TranslationKey } from '../i18n/translations';
import { SiteCard } from './SiteCard';

interface SiteGridProps {
  sites: SiteEntry[];
  lang: Lang;
  t: (key: TranslationKey) => string;
  title: string;
  emptyMessage: string;
}

export function SiteGrid({ sites, lang, t, title, emptyMessage }: SiteGridProps) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h2 className="mb-6 font-display text-xl font-bold text-white sm:text-2xl">{title}</h2>
      {sites.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center text-sm text-zinc-500">
          {emptyMessage}
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sites.map((site, i) => (
            <SiteCard key={site.id} site={site} lang={lang} t={t} index={i} />
          ))}
        </div>
      )}
    </section>
  );
}
