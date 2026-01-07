import { Helmet } from 'react-helmet-async';
import { Award, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SEOHead } from '@/components/SEOHead';
import dasaLogo from '@/assets/quality/dasa-logo.png';
import oekotexLogo from '@/assets/quality/oekotex-logo.png';


export default function Quality() {
  const { t, language } = useLanguage();

  const qualityItems = [
    { icon: Award, title: t.quality.iso.title, desc: t.quality.iso.desc },
    { icon: ShieldCheck, title: t.quality.oeko.title, desc: t.quality.oeko.desc },
  ];

  // Certifications structured data
  const certificationsSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: language === 'it' ? 'Qualità Certificata' : 'Certified Quality',
    description: language === 'it'
      ? 'Eurotex: qualità certificata ISO 9001 e Oeko-Tex'
      : 'Eurotex: ISO 9001 and Oeko-Tex certified quality',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'Certification',
            name: 'UNI EN ISO 9001:2015',
            issuedBy: 'Dasa-Rägister',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'Certification',
            name: 'OEKO-TEX Standard 100',
            issuedBy: 'OEKO-TEX',
          },
        },
      ],
    },
  };

  return (
    <>
      <Helmet>
        <title>{language === 'it' ? 'Qualità Certificata | Eurotex Nastri' : 'Certified Quality | Eurotex Nastri'}</title>
        <meta
          name="description"
          content={language === 'it'
            ? 'Eurotex: qualità certificata ISO 9001 e Oeko-Tex. Nastri tecnici sicuri, sostenibili e innovativi, 100% Made in Italy.'
            : 'Eurotex: ISO 9001 and Oeko-Tex certified quality. Safe, sustainable and innovative technical webbings, 100% Made in Italy.'
          }
        />
        <SEOHead path="/quality" />
        <script type="application/ld+json">
          {JSON.stringify(certificationsSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <Breadcrumbs currentPage={t.nav.quality} />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6 animate-slide-up">
              {t.quality.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
              {t.quality.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Quality Cards */}
      <section className="py-16 bg-secondary/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {qualityItems.map((item, index) => (
              <div
                key={item.title}
                className="bg-card p-8 rounded-sm shadow-subtle animate-fade-in flex gap-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <item.icon className="w-12 h-12 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold text-foreground text-lg mb-3">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Logos */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
            <img 
              src={dasaLogo} 
              alt="Dasa-Rägister - UNI EN ISO 9001:2015" 
              className="h-24 md:h-28 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
            <img 
              src={oekotexLogo} 
              alt="OEKO-TEX Standard 100" 
              className="h-28 md:h-32 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

    </>
  );
}
