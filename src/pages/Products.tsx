import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

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

const processSteps = [
  { number: '01', title: 'Weaving', id: 'weaving' },
  { number: '02', title: 'Finishing', id: 'finishing' },
  { number: '03', title: 'Design', id: 'design' },
  { number: '04', title: 'Cutting & Packaging', id: 'cutting' },
];

export default function Products() {
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
                  src={image}
                  alt={`Eurotex webbing product ${index + 1}`}
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
            Our Production Process
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
                Weaving
              </h2>
            </div>
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
      <section id="finishing" className="py-12 md:py-20 bg-secondary/30 scroll-mt-20">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-light text-primary/20">02</span>
              <h2 className="text-2xl md:text-3xl font-light text-foreground">
                Finishing
              </h2>
            </div>
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
      <section id="design" className="py-12 md:py-20 scroll-mt-20">
        <div className="section-container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl font-light text-primary/20">03</span>
              <h2 className="text-2xl md:text-3xl font-light text-foreground">
                Design
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Eurotex offers customized tapes with text, logos, or designs, either woven into 
              the tape using the Jacquard system or printed.
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
                Cutting & Packaging
              </h2>
            </div>
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
