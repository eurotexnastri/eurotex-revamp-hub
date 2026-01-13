import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

import products1 from '@/assets/products/products-1.jpg';
import products2 from '@/assets/products/products-2.jpg';
import products3 from '@/assets/products/products-3.jpg';
import products4 from '@/assets/products/products-4.jpg';
import products5 from '@/assets/products/products-5.jpg';
import products6 from '@/assets/products/products-6.jpg';
import products7 from '@/assets/products/products-7.jpg';
import products8 from '@/assets/products/products-8.jpg';

const productImages = [
  { src: products1, alt: 'Eurotex woven webbing samples in various colors' },
  { src: products2, alt: 'Industrial grade textile straps and tapes' },
  { src: products3, alt: 'Colorful narrow fabric webbings' },
  { src: products4, alt: 'Technical webbings for safety applications' },
  { src: products5, alt: 'Premium quality textile bands' },
  { src: products6, alt: 'Custom designed webbings and ribbons' },
  { src: products7, alt: 'Heavy-duty industrial webbings' },
  { src: products8, alt: 'Specialized textile tapes and straps' },
];

export default function Products() {
  const { t, language } = useLanguage();
  const baseUrl = 'https://www.eurotexnastri.com';

  const processSteps = [
    { number: '01', title: t.products.steps.weaving, id: 'weaving' },
    { number: '02', title: t.products.steps.finishing, id: 'finishing' },
    { number: '03', title: t.products.steps.design, id: 'design' },
    { number: '04', title: t.products.steps.cutting, id: 'cutting' },
  ];

  // HowTo structured data for manufacturing process
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: language === 'it' ? 'Processo di Produzione Nastri' : 'Webbing Manufacturing Process',
    description: language === 'it' 
      ? 'Il nostro processo di produzione nastri tecnici in 4 fasi'
      : 'Our 4-step technical webbing production process',
    step: processSteps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      url: `${baseUrl}/products#${step.id}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>{language === 'it' ? 'Prodotti - Eurotex Nastri | Nastri, Fettucce e Tessuti Stretti' : 'Products - Eurotex Nastri | Webbings, Tapes & Narrow Fabrics'}</title>
        <meta
          name="description"
          content={language === 'it'
            ? 'Esplora la nostra gamma di nastri tessili, nastri elastici, cinture di sicurezza e tessuti tecnici. Soluzioni personalizzate per applicazioni industriali, moda e sicurezza.'
            : 'Explore our range of textile webbings, elastic tapes, safety belts, and technical fabrics. Custom solutions for industrial, fashion, and safety applications.'
          }
        />
        <link rel="canonical" href={`${baseUrl}/products`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/products`} />
        <link rel="alternate" hrefLang="it" href={`${baseUrl}/products`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/products`} />
        <meta property="og:locale" content={language === 'it' ? 'it_IT' : 'en_US'} />
        <meta property="og:url" content={`${baseUrl}/products`} />
        <script type="application/ld+json">
          {JSON.stringify(howToSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <Breadcrumbs currentPage={t.nav.products} />
          <div className="max-w-4xl">
            <h1 className="section-title mb-6 animate-slide-up">
              {t.products.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
              {t.products.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Image Mosaic */}
      <section className="pb-16 md:pb-24">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {productImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-sm bg-white shadow-subtle animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Indicator */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-light text-foreground text-center mb-10">
            {t.products.process}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <a
                  href={`#${step.id}`}
                  className="flex items-center gap-3 px-4 py-3 rounded-sm hover:bg-background/50 transition-colors group"
                >
                  <span className="text-3xl md:text-4xl font-light text-primary/40 group-hover:text-primary transition-colors">
                    {step.number}
                  </span>
                  <span className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {step.title}
                  </span>
                </a>
                {index < processSteps.length - 1 && (
                  <ChevronRight className="hidden md:block h-6 w-6 text-primary/40 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weaving Section */}
      <section id="weaving" className="py-12 md:py-20 scroll-mt-20">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-light text-primary/20">01</span>
              <h2 className="text-2xl md:text-3xl font-light text-foreground">
                {t.products.weavingTitle}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.products.weavingIntro}
            </p>
            <ul className="space-y-3 mb-6">
              {t.products.weavingTypes.map((type) => (
                <li key={type} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {type}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              {t.products.weavingMaterials}
            </p>
          </div>
        </div>
      </section>

      {/* Finishing Section */}
      <section id="finishing" className="py-12 md:py-20 bg-secondary/30 scroll-mt-20">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-light text-primary/20">02</span>
              <h2 className="text-2xl md:text-3xl font-light text-foreground">
                {t.products.finishingTitle}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t.products.finishingIntro}
            </p>
            <ul className="space-y-3">
              {t.products.finishingTreatments.map((treatment) => (
                <li key={treatment} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {treatment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section id="design" className="py-12 md:py-20 scroll-mt-20">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-light text-primary/20">03</span>
              <h2 className="text-2xl md:text-3xl font-light text-foreground">
                {t.products.designTitle}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.products.designDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Cutting and Packaging Section */}
      <section id="cutting" className="py-12 md:py-20 bg-secondary/30 scroll-mt-20">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-light text-primary/20">04</span>
              <h2 className="text-2xl md:text-3xl font-light text-foreground">
                {t.products.steps.cutting}
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {t.products.cuttingDesc}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <h2 className="text-2xl font-light text-foreground mb-4">
            {t.products.lookingFor}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {t.products.exploreSectors}
          </p>
          <Link to="/sectors" className="btn-primary">
            {t.products.viewSectors}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}