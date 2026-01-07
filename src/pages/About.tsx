import { Helmet } from 'react-helmet-async';
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SEOHead } from '@/components/SEOHead';
import factory1 from '@/assets/home/factory-1.jpg';
import factory2 from '@/assets/home/factory-2.jpg';
import factory3 from '@/assets/home/factory-3.jpg';
import factory4 from '@/assets/home/factory-4.jpg';
import factory5 from '@/assets/home/factory-5.jpg';

const factoryImages = [
  { src: factory1, alt: 'Eurotex weaving factory floor with industrial looms' },
  { src: factory2, alt: 'Precision weaving machinery in operation' },
  { src: factory3, alt: 'Thread spools and weaving equipment' },
  { src: factory4, alt: 'Eurotex facility exterior' },
  { src: factory5, alt: 'Eurotex modern building facade' },
];

export default function About() {
  const { t, language } = useLanguage();
  const [factoryEmblaRef, factoryEmblaApi] = useEmblaCarousel({ loop: true });
  const [factorySelectedIndex, setFactorySelectedIndex] = useState(0);

  const onFactorySelect = useCallback(() => {
    if (!factoryEmblaApi) return;
    setFactorySelectedIndex(factoryEmblaApi.selectedScrollSnap());
  }, [factoryEmblaApi]);

  useEffect(() => {
    if (!factoryEmblaApi) return;
    onFactorySelect();
    factoryEmblaApi.on('select', onFactorySelect);
    
    const autoplay = setInterval(() => {
      factoryEmblaApi.scrollNext();
    }, 4000);

    return () => {
      factoryEmblaApi.off('select', onFactorySelect);
      clearInterval(autoplay);
    };
  }, [factoryEmblaApi, onFactorySelect]);

  const scrollFactoryTo = useCallback((index: number) => {
    if (factoryEmblaApi) factoryEmblaApi.scrollTo(index);
  }, [factoryEmblaApi]);

  const values = [
    t.about.values.quality,
    t.about.values.innovation,
    t.about.values.reliability,
    t.about.values.sustainability,
  ];

  const strengths = [
    t.about.strengths.experience,
    t.about.strengths.technology,
    t.about.strengths.personnel,
    t.about.strengths.facility,
    t.about.strengths.certification,
    t.about.strengths.madeInItaly,
  ];

  // About page structured data
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: language === 'it' ? 'Chi Siamo - Eurotex' : 'About Us - Eurotex',
    description: language === 'it'
      ? 'Scopri Eurotex SRL, un produttore tessile italiano con oltre 50 anni di esperienza'
      : 'Learn about Eurotex SRL, an Italian textile manufacturer with over 50 years of experience',
    mainEntity: {
      '@id': 'https://www.eurotexnastri.it/#organization',
    },
  };

  return (
    <>
      <Helmet>
        <title>{language === 'it' ? 'Chi Siamo - Eurotex Nastri | Produttore Tessile Italiano' : 'Who Are We - Eurotex Nastri | Italian Textile Manufacturer'}</title>
        <meta
          name="description"
          content={language === 'it'
            ? 'Scopri Eurotex SRL, un produttore tessile italiano con oltre 50 anni di esperienza nella produzione di nastri e tessuti stretti di alta qualità.'
            : 'Learn about Eurotex SRL, an Italian textile manufacturer with over 50 years of experience in producing premium webbings and narrow fabrics.'
          }
        />
        <SEOHead path="/about" />
        <script type="application/ld+json">
          {JSON.stringify(aboutSchema)}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <Breadcrumbs currentPage={t.nav.whoAreWe} />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title mb-6 animate-slide-up">
              {t.about.title}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
              {t.about.subtitle}
            </p>

            {/* Factory Carousel */}
            <div className="mt-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="overflow-hidden rounded-sm shadow-card" ref={factoryEmblaRef}>
                <div className="flex">
                  {factoryImages.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full aspect-[16/9] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {factoryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollFactoryTo(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === factorySelectedIndex 
                        ? 'bg-foreground w-6' 
                        : 'bg-foreground/30 hover:bg-foreground/50'
                    }`}
                    aria-label={`Go to factory slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pt-4 pb-12 md:pt-6 md:pb-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-6">
              <h2 className="text-2xl font-light text-foreground">{t.about.ourStory}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.storyP1}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.storyP2}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.storyP3}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.storyP4}
              </p>
            </div>
            
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-2xl font-light text-foreground">{t.about.ourValues}</h2>
                <ul className="space-y-4">
                  {values.map((item) => (
                    <li key={item.title} className="border-l-2 border-foreground/20 pl-4">
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-light text-foreground">{t.about.ourStrengths}</h2>
                <ul className="space-y-4">
                  {strengths.map((item) => (
                    <li key={item.title} className="border-l-2 border-foreground/20 pl-4">
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}