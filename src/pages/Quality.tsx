import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/i18n/LanguageContext';
import isoLogo from '@/assets/quality/iso-logo.png';
import oekotexLogo from '@/assets/quality/oekotex-logo.png';


export default function Quality() {
  const { t, language } = useLanguage();

  const qualityItems = [
    { image: isoLogo, title: t.quality.iso.title, desc: t.quality.iso.desc },
    { image: oekotexLogo, title: t.quality.oeko.title, desc: t.quality.oeko.desc },
  ];

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
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6 animate-slide-up">
            {t.quality.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '100ms' }}>
            {t.quality.subtitle}
          </p>
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
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
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

    </>
  );
}
