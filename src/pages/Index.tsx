import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import webbings1 from '@/assets/home/webbings-1.jpg';
import webbings2 from '@/assets/home/webbings-2.jpg';
import webbings3 from '@/assets/home/webbings-3.jpg';
import webbings4 from '@/assets/home/webbings-4.jpg';
import factory1 from '@/assets/home/factory-1.jpg';
import factory2 from '@/assets/home/factory-2.jpg';
import factory3 from '@/assets/home/factory-3.jpg';
import factory4 from '@/assets/home/factory-4.jpg';
import factory5 from '@/assets/home/factory-5.jpg';

const heroImages = [
  { src: webbings1, alt: 'Colorful industrial webbings in blue, black, red, grey and yellow' },
  { src: webbings2, alt: 'Striped webbings with various color combinations' },
  { src: webbings3, alt: 'Camouflage pattern webbings for military applications' },
  { src: webbings4, alt: 'Neutral tone webbings in grey, white and brown' },
];

const factoryImages = [
  { src: factory1, alt: 'Eurotex weaving factory floor with industrial looms' },
  { src: factory2, alt: 'Precision weaving machinery in operation' },
  { src: factory3, alt: 'Thread spools and weaving equipment' },
  { src: factory4, alt: 'Eurotex facility exterior' },
  { src: factory5, alt: 'Eurotex modern building facade' },
];

export default function Index() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const [factoryEmblaRef, factoryEmblaApi] = useEmblaCarousel({ loop: true });
  const [factorySelectedIndex, setFactorySelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const onFactorySelect = useCallback(() => {
    if (!factoryEmblaApi) return;
    setFactorySelectedIndex(factoryEmblaApi.selectedScrollSnap());
  }, [factoryEmblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(autoplay);
    };
  }, [emblaApi, onSelect]);

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

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const scrollFactoryTo = useCallback((index: number) => {
    if (factoryEmblaApi) factoryEmblaApi.scrollTo(index);
  }, [factoryEmblaApi]);

  return (
    <>
      <Helmet>
        <title>Eurotex - Technical Webbing | 100% Made in Italy Since 1974</title>
        <meta
          name="description"
          content="Eurotex SRL - Technical webbing manufacturer. 100% Made in Italy. Expertise and technology since 1974. Premium textile webbings for industrial, fashion, safety, and technical applications."
        />
        <meta
          name="keywords"
          content="technical webbing, textile webbings, narrow fabrics, industrial tapes, fashion webbings, safety belts, lifting straps, Italian manufacturer, made in Italy"
        />
        <link rel="canonical" href="https://www.eurotexnastri.it" />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center relative py-16">
        <div className="section-container w-full">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 animate-fade-in">
              100% Made in Italy
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-6 animate-slide-up">
              Technical Webbing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: '100ms' }}>
              Expertise and Technology Since 1974
            </p>
          </div>

          {/* Hero Carousel */}
          <div className="max-w-4xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="overflow-hidden rounded-sm shadow-card" ref={emblaRef}>
              <div className="flex">
                {heroImages.map((image, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full aspect-[21/9] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? 'bg-foreground w-6' 
                      : 'bg-foreground/30 hover:bg-foreground/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <Link to="/sectors" className="btn-primary">
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-outline">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title mb-10">
              Over 50 Years of Excellence
            </h2>

            {/* Factory Carousel */}
            <div className="mb-10">
              <div className="overflow-hidden rounded-sm shadow-card" ref={factoryEmblaRef}>
                <div className="flex">
                  {factoryImages.map((image, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full aspect-[21/9] object-cover"
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

            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 1974, Eurotex has been a leading Italian manufacturer of high-quality technical webbings and narrow fabrics. 
              Our products serve diverse industries including automotive, fashion, medical, military, and sports. 
              With state-of-the-art machinery and rigorous quality control, we deliver solutions that meet the 
              most demanding specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Sectors Preview */}
      <section className="py-20 bg-secondary/30">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Our Sectors</h2>
            <p className="section-subtitle mx-auto">
              Specialized solutions for every industry
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {['Fashion', 'Industrial', 'Medical', 'Military', 'Sports'].map((sector, index) => (
              <div
                key={sector}
                className="bg-card p-6 text-center rounded-sm shadow-subtle animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-medium text-foreground text-sm">{sector}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/sectors" className="btn-outline">
              View All Sectors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="section-container text-center">
          <h2 className="section-title mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="section-subtitle mx-auto mb-8">
            Contact us to discuss your requirements and receive a personalized quote.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
