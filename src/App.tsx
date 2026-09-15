import { useMemo, useState } from 'react';
import { AgeGate } from './components/AgeGate';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchFilter } from './components/SearchFilter';
import { SiteGrid } from './components/SiteGrid';
import { SITES, type Category } from './data/sites';
import { useAgeGate } from './hooks/useAgeGate';
import { useLanguage } from './hooks/useLanguage';

export default function App() {
  const { lang, toggleLang, t } = useLanguage();
  const { verified, enter, leave } = useAgeGate();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SITES.filter((site) => {
      const matchesCategory =
        category === 'all' || site.categories.includes(category);
      if (!matchesCategory) return false;
      if (!q) return true;
      const haystack = [
        site.name,
        site.descriptionVi,
        site.descriptionEn,
        ...site.tags,
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, category]);

  const featured = useMemo(
    () => filtered.filter((s) => s.featured),
    [filtered],
  );

  if (!verified) {
    return (
      <AgeGate
        t={t}
        lang={lang}
        onEnter={enter}
        onLeave={leave}
        onToggleLang={toggleLang}
      />
    );
  }

  return (
    <div className="flex min-h-dvh flex-col">
      <Header t={t} lang={lang} onToggleLang={toggleLang} />
      <main className="flex-1">
        <Hero t={t} />
        <SearchFilter
          query={query}
          onQueryChange={setQuery}
          category={category}
          onCategoryChange={setCategory}
          resultCount={filtered.length}
          lang={lang}
          t={t}
        />
        {featured.length > 0 && (
          <SiteGrid
            sites={featured}
            lang={lang}
            t={t}
            title={t('featured')}
            emptyMessage={t('noResults')}
          />
        )}
        <SiteGrid
          sites={filtered}
          lang={lang}
          t={t}
          title={t('allSites')}
          emptyMessage={t('noResults')}
        />
      </main>
      <Footer t={t} />
    </div>
  );
}
