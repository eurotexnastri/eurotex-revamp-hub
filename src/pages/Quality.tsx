import { Helmet } from 'react-helmet-async';
import { Award, ShieldCheck, Star, Cpu } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function Quality() {
  const { t, language } = useLanguage();

  const qualityItems = [
    { icon: Award, title: t.quality.iso.title, desc: t.quality.iso.desc },
    { icon: ShieldCheck, title: t.quality.oeko.title, desc: t.quality.oeko.desc },
    { icon: Star, title: t.quality.excellence.title, desc: t.quality.excellence.desc },
    { icon: Cpu, title: t.quality.innovation.title, desc: t.quality.innovation.desc },
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

      {/* CTA Section */}
      <section className="py-20 md:py-28">
        <div className="section-container text-center">
          <p className="text-xl md:text-2xl font-medium text-foreground max-w-3xl mx-auto">
            {t.quality.cta}
          </p>
        </div>
      </section>
    </>
  );
}
