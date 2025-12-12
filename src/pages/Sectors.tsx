import { Helmet } from 'react-helmet-async';
import { SectorCard } from '../components/SectorCard';
import { sectors } from '../data/sectors';

export default function Sectors() {
  return (
    <>
      <Helmet>
        <title>Sectors & Applications - Eurotex Nastri | Industry Solutions</title>
        <meta
          name="description"
          content="Discover Eurotex webbings and tapes for fashion, automotive, medical, military, sports, and industrial applications. Sector-specific solutions with certified quality."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <h1 className="section-title mb-6 animate-slide-up">
              Sectors & Applications
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
              Specialized webbings and tapes for every industry. 
              Click on a sector to explore applications and products.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="pb-12 md:pb-20">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <SectorCard
                key={sector.id}
                title={sector.title}
                image={sector.image}
                slug={sector.slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
