import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Eurotex Nastri - Premium Textile Webbings & Tapes Manufacturer</title>
        <meta
          name="description"
          content="Eurotex SRL specializes in manufacturing high-quality textile webbings, tapes, and narrow fabrics for industrial, fashion, safety, and technical applications. Based in Vedano al Lambro, Italy."
        />
        <meta
          name="keywords"
          content="textile webbings, narrow fabrics, industrial tapes, fashion webbings, safety belts, lifting straps, Italian manufacturer"
        />
        <link rel="canonical" href="https://www.eurotexnastri.it" />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center relative">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-6 animate-slide-up">
            Premium Textile Webbings
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '100ms' }}>
            Crafting excellence in narrow fabrics since 1985. Italian quality for global industries.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Link to="/sectors" className="btn-primary">
              Explore Our Products
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
            <h2 className="section-title mb-6">
              Over 35 Years of Excellence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Eurotex SRL is a leading Italian manufacturer of high-quality textile webbings and narrow fabrics. 
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {['Fashion', 'Industrial', 'Medical', 'Sports'].map((sector, index) => (
              <div
                key={sector}
                className="bg-card p-6 text-center rounded-sm shadow-subtle animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-medium text-foreground">{sector}</h3>
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
