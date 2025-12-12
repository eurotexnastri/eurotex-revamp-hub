import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import products1 from '@/assets/products/products-1.jpg';
import products2 from '@/assets/products/products-2.jpg';
import products3 from '@/assets/products/products-3.jpg';
import products4 from '@/assets/products/products-4.jpg';
import products5 from '@/assets/products/products-5.jpg';
import products6 from '@/assets/products/products-6.jpg';
import products7 from '@/assets/products/products-7.jpg';
import products8 from '@/assets/products/products-8.jpg';

const productImages = [
  products1,
  products2,
  products3,
  products4,
  products5,
  products6,
  products7,
  products8,
];

const weavingTypes = [
  'Plain woven, including grosgrain and binding tapes',
  'Twill and herringbone twill',
  'Bound tubular and plain tubular tapes',
  'Jacquard, meaning tapes woven with lettering or logos',
];

const finishingTreatments = [
  'Heat-setting: to give sheen and greater elasticity',
  'Piece dyeing: to dye woven tapes in the desired color, with significant production efficiencies',
  'Starching/finishing: to achieve full, soft, or slippery hand',
  'Antistatic',
  'Antibacterial',
  'Oil- and water-repellent',
  'Flame-retardant',
  'Anti-abrasion',
  'IR invisibility',
  'Combination of different treatments',
];

export default function Products() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Products - Eurotex Nastri | Webbings, Tapes & Narrow Fabrics</title>
        <meta
          name="description"
          content="Explore our range of textile webbings, elastic tapes, safety belts, and technical fabrics. Custom solutions for industrial, fashion, and safety applications."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <h1 className="section-title mb-6 animate-slide-up">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
              A comprehensive range of textile webbings and narrow fabrics, 
              engineered for performance and manufactured with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Carousel */}
      <section className="pb-16 md:pb-24">
        <div className="section-container">
          <div className="relative w-full overflow-hidden rounded-sm shadow-subtle">
            <div className="aspect-[16/9] md:aspect-[21/9] relative">
              {productImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Eurotex webbing product ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain bg-white transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            {/* Carousel indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-primary w-6'
                      : 'bg-primary/40 hover:bg-primary/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weaving Section */}
      <section className="py-12 md:py-20">
        <div className="section-container">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">
              Weaving
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Eurotex's production offers a very wide range of tapes with heights between 10 and 200 millimeters, 
              and thicknesses between 0.6 and 4 millimeters. The following categories are available:
            </p>
            <ul className="space-y-3 mb-6">
              {weavingTypes.map((type) => (
                <li key={type} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {type}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Eurotex uses different raw materials, the main and best known being polyester, polyamide, 
              polypropylene, cotton, linen, and aramid fibers.
            </p>
          </div>
        </div>
      </section>

      {/* Finishing Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="section-container">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">
              Finishing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Thanks to its in-house dyeing and finishing equipment, Eurotex can offer specific 
              enhancement treatments for woven tapes, such as:
            </p>
            <ul className="space-y-3">
              {finishingTreatments.map((treatment) => (
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
      <section className="py-12 md:py-20">
        <div className="section-container">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">
              Design
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Eurotex offers customized tapes with text, logos, or designs, either woven into 
              the tape using the Jacquard system or printed.
            </p>
          </div>
        </div>
      </section>

      {/* Cutting and Packaging Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="section-container">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-light text-foreground mb-6">
              Cutting and Packaging
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Eurotex has equipment for cutting and punching tapes—both hot and ultrasonic—according 
              to the sizes and shapes required by the customer.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="section-container text-center">
          <h2 className="text-2xl font-light text-foreground mb-4">
            Looking for a Specific Application?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Explore Eurotex's sector-specific solutions to find products tailored for your industry.
          </p>
          <Link to="/sectors" className="btn-primary">
            View Sectors & Applications
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
