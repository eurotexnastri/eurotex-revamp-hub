import { Helmet } from 'react-helmet-async';
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
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

  return (
    <>
      <Helmet>
        <title>Who Are We - Eurotex Nastri | Italian Textile Manufacturer</title>
        <meta
          name="description"
          content="Learn about Eurotex SRL, an Italian textile manufacturer with over 50 years of experience in producing premium webbings and narrow fabrics."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="section-title mb-6 animate-slide-up">
              Who Are We
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
              A legacy of Italian craftsmanship in textile manufacturing.
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
              <h2 className="text-2xl font-light text-foreground">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1974, Eurotex SRL has grown from a small workshop to a leading manufacturer 
                of textile webbings and narrow fabrics. Mr. Crippa Gian Claudio, after gaining years of 
                experience in a traditional textile company, decided to follow his own path and founded 
                EUROTEX—a strongly family-oriented company specializing in the production of woven tapes 
                for various technical sectors. He did so with the clear idea that only a young, modern, 
                and flexible company could remain competitive over time.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                EUROTEX's vision proved successful: the company grew, and the second generation of the 
                Crippa family began to take an active role—both practical and managerial—with the entry 
                of the two sons. Toward the end of the 1980s, a dyeing and finishing line for woven tapes 
                was introduced, expanding and improving the range of products offered. In 1992, the company, 
                now well established, moved to the modern facility where it still operates today.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The constant belief that technology, professionalism, experience, and special attention 
                to market dynamics—as well as to customer needs—were the winning tools has made EUROTEX 
                a well-known and valued company for the production of high-quality products and a reliable 
                partner for its clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Thanks to its strengths, Eurotex is able to provide quick responses and fast deliveries to 
                meet any need, even in the creation of new and exclusive products. The company's commitment to 
                quality has earned certifications and partnerships with major brands across personal 
                protection, furniture, military, and industrial sectors worldwide.
              </p>
            </div>
            
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-2xl font-light text-foreground">Our Values</h2>
                <ul className="space-y-4">
                  {[
                    { title: 'Quality', desc: 'Rigorous standards at every step of production' },
                    { title: 'Innovation', desc: 'Continuous improvement and R&D investment' },
                    { title: 'Reliability', desc: 'Consistent delivery and customer support' },
                    { title: 'Sustainability', desc: 'Eco-conscious materials and processes' },
                  ].map((item) => (
                    <li key={item.title} className="border-l-2 border-foreground/20 pl-4">
                      <h3 className="font-medium text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-light text-foreground">Our Strengths</h2>
                <ul className="space-y-4">
                  {[
                    { title: 'Experience', desc: 'Over 50 years of expertise in woven tape production' },
                    { title: 'Technology', desc: 'Technologically advanced machinery and equipment' },
                    { title: 'Personnel', desc: 'Qualified and experienced team' },
                    { title: 'Facility', desc: 'Over 3,000 m² of covered production space' },
                    { title: 'Certification', desc: 'ISO-certified quality management system' },
                    { title: '100% Made in Italy', desc: 'All products designed and manufactured entirely in Italy' },
                  ].map((item) => (
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
