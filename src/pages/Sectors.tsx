import { Helmet } from 'react-helmet-async';
import { SectorCard } from '../components/SectorCard';
import { sectors } from '../data/sectors';
import { useLanguage } from '@/i18n/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SEOHead } from '@/components/SEOHead';

export default function Sectors() {
  const { t, language } = useLanguage();

  // Generate ItemList structured data for sectors
  const sectorsListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: language === 'it' ? 'Settori Eurotex' : 'Eurotex Sectors',
    description: language === 'it' 
      ? 'Settori industriali serviti da Eurotex Nastri' 
      : 'Industrial sectors served by Eurotex Nastri',
    numberOfItems: sectors.length,
    itemListElement: sectors.map((sector, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: language === 'it' ? sector.titleIt : sector.title,
      url: `https://www.eurotexnastri.it/sectors/${sector.slug}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>{language === 'it' ? 'Settori e Applicazioni - Eurotex Nastri | Soluzioni Industriali' : 'Sectors & Applications - Eurotex Nastri | Industry Solutions'}</title>
        <meta
          name="description"
          content={language === 'it'
            ? 'Scopri i nastri e le fettucce Eurotex per moda, automotive, medicale, militare, sport e applicazioni industriali. Soluzioni specifiche per settore con qualità certificata.'
            : 'Discover Eurotex webbings and tapes for fashion, automotive, medical, military, sports, and industrial applications. Sector-specific solutions with certified quality.'
          }
        />
        <SEOHead path="/sectors" />
        <script type="application/ld+json">
          {JSON.stringify(sectorsListSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <Breadcrumbs currentPage={t.nav.sectors} />
          <div className="max-w-4xl">
            <h1 className="section-title mb-6 animate-slide-up">
              {t.sectors.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
              {t.sectors.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="pb-12 md:pb-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <SectorCard
                key={sector.id}
                title={language === 'it' ? sector.titleIt : sector.title}
                image={sector.image}
                slug={sector.slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}