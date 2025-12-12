import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const productCategories = [
  {
    title: 'Webbings',
    description: 'Flat woven tapes in various materials and widths',
    features: ['Polyester', 'Nylon', 'Cotton', 'Polypropylene'],
  },
  {
    title: 'Elastic Tapes',
    description: 'Stretchable bands for comfort and flexibility',
    features: ['Woven elastic', 'Knitted elastic', 'Custom designs'],
  },
  {
    title: 'Safety Belts',
    description: 'High-strength webbings for safety applications',
    features: ['Automotive certified', 'Industrial rated', 'Custom specs'],
  },
  {
    title: 'Technical Fabrics',
    description: 'Specialized materials for demanding applications',
    features: ['Fire resistant', 'High visibility', 'Anti-bacterial'],
  },
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

      {/* Product Categories */}
      <section className="py-12 md:py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-card p-8 rounded-sm shadow-subtle animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h2 className="text-xl font-medium text-foreground mb-3">
                  {category.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {category.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-xs px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="section-container text-center">
          <h2 className="text-2xl font-light text-foreground mb-4">
            Looking for a Specific Application?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Explore our sector-specific solutions to find products tailored for your industry.
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
