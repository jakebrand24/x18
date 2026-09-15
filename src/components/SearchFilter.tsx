import { Search, X } from 'lucide-react';
import { CATEGORIES, type Category } from '../data/sites';
import type { Lang } from '../i18n/translations';
import type { TranslationKey } from '../i18n/translations';

interface SearchFilterProps {
  query: string;
  onQueryChange: (q: string) => void;
  category: Category;
  onCategoryChange: (c: Category) => void;
  resultCount: number;
  lang: Lang;
  t: (key: TranslationKey) => string;
}

export function SearchFilter({
  query,
  onQueryChange,
  category,
  onCategoryChange,
  resultCount,
  lang,
  t,
}: SearchFilterProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder={t('searchPlaceholder')}
          className="w-full rounded-2xl border border-white/10 bg-white/5 py-3.5 pl-11 pr-11 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-pink-500/40 focus:bg-white/[0.07] focus:ring-2 focus:ring-pink-500/20"
          aria-label={t('searchPlaceholder')}
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-zinc-500 transition hover:bg-white/10 hover:text-white"
            aria-label={t('clearSearch')}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {CATEGORIES.map((cat) => {
          const active = category === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => onCategoryChange(cat.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                active
                  ? 'bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-md shadow-pink-500/25'
                  : 'border border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:text-white'
              }`}
            >
              {lang === 'vi' ? cat.labelVi : cat.labelEn}
            </button>
          );
        })}
        <span className="ml-auto text-xs text-zinc-500">
          {resultCount} {t('results')}
        </span>
      </div>
    </div>
  );
}
