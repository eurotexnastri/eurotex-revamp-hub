import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { getSectorBySlug } from '../data/sectors';
import { useLanguage } from '@/i18n/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { generateProductSchema } from '@/components/SEOHead';

export default function SectorDetail() {
  const { slug } = useParams<{ slug: string }>();
  const sector = slug ? getSectorBySlug(slug) : null;
  const { t, language } = useLanguage();
  const baseUrl = 'https://www.eurotexnastri.com';

  if (!sector) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-foreground mb-4">{t.sectorNotFound.title}</h1>
          <Link to="/sectors" className="btn-outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.sectors.backToSectors}
          </Link>
        </div>
      </div>
    );
  }

  const sectorTitle = language === 'it' ? sector.titleIt : sector.title;
  const sectorDescription = language === 'it' ? sector.descriptionIt : sector.description;
  const pageUrl = `${baseUrl}/sectors/${sector.slug}`;

  const productSchema = generateProductSchema({
    title: sectorTitle,
    description: sectorDescription,
    slug: sector.slug,
    image: sector.image,
  });

  return (
    <>
      <Helmet>
        <title>{sectorTitle} - Eurotex Nastri | {language === 'it' ? 'Nastri e Applicazioni' : 'Webbings & Applications'}</title>
        <meta
          name="description"
          content={`${sectorDescription} ${language === 'it' ? 'Nastri tessili italiani di alta qualità per applicazioni' : 'High-quality Italian textile webbings for'} ${sectorTitle.toLowerCase()}.`}
        />
        <link rel="canonical" href={pageUrl} />
        <link rel="alternate" hrefLang="en" href={pageUrl} />
        <link rel="alternate" hrefLang="it" href={pageUrl} />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />
        <meta property="og:locale" content={language === 'it' ? 'it_IT' : 'en_US'} />
        <meta property="og:url" content={pageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>

      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <Breadcrumbs 
            items={[{ label: t.nav.sectors, href: '/sectors' }]} 
            currentPage={sectorTitle} 
          />
          
          <div className="max-w-4xl">
            <h1 className="section-title mb-4 animate-slide-up">
              {sectorTitle}
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '100ms' }}>
              {sectorDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="section-container">
          <h2 className="text-2xl font-light text-foreground mb-8">
            {t.sectors.applications}
          </h2>
          
          {/* Applications Image */}
          <div className="mb-6">
            <img
              src={sector.applicationsImage}
              alt={`${sectorTitle} applications`}
              className="w-full rounded-sm"
            />
          </div>
          
          {/* Applications Text */}
          {sector.applicationsText && (
            <p className="text-lg text-muted-foreground">
              {language === 'it' ? sector.applicationsTextIt : sector.applicationsText}
            </p>
          )}
          
          {sector.applications.length > 0 && (
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              {sector.applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-sm shadow-subtle"
                >
                  {app.image && (
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full aspect-video object-cover rounded-sm mb-4"
                    />
                  )}
                  <h3 className="font-medium text-foreground mb-2">{app.title}</h3>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Webbings Section */}
      <section className="py-12 md:py-20">
        <div className="section-container">
          <h2 className="text-2xl font-light text-foreground mb-8">
            {t.sectors.webs}
          </h2>
          
          {sector.webbings.length > 0 ? (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {sector.webbings.map((webbing, index) => (
                <div key={index} className="group overflow-hidden rounded-sm bg-card shadow-subtle">
                  <img
                    src={webbing.image}
                    alt={webbing.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-card p-8 rounded-sm text-center">
              <p className="text-muted-foreground">
                {language === 'it' 
                  ? 'Le immagini dei prodotti nastri saranno visualizzate qui. Si prega di fornire le immagini per questo settore.'
                  : 'Webbing product images will be displayed here. Please provide the images for this sector.'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border/50">
        <div className="section-container text-center">
          <h2 className="text-2xl font-light text-foreground mb-4">
            {t.sectors.interested}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {t.sectors.interestedDesc}
          </p>
          <Link to="/contact" className="btn-primary">
            {t.sectors.requestInfo}
          </Link>
        </div>
      </section>
    </>
  );
}