import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { getSectorBySlug } from '../data/sectors';

export default function SectorDetail() {
  const { slug } = useParams<{ slug: string }>();
  const sector = slug ? getSectorBySlug(slug) : null;

  if (!sector) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-foreground mb-4">Sector Not Found</h1>
          <Link to="/sectors" className="btn-outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Sectors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{sector.title} - Eurotex Nastri | Webbings & Applications</title>
        <meta
          name="description"
          content={`${sector.description} High-quality Italian textile webbings for ${sector.title.toLowerCase()} applications.`}
        />
      </Helmet>

      {/* Header */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <Link
            to="/sectors"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Sectors
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="section-title mb-4 animate-slide-up">
              {sector.title}
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '100ms' }}>
              {sector.description}
            </p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="section-container">
          <h2 className="text-2xl font-light text-foreground mb-8">
            Applications
          </h2>
          
          {/* Applications Image */}
          <div className="mb-8">
            <img
              src={sector.applicationsImage}
              alt={`${sector.title} applications`}
              className="w-full rounded-sm"
            />
          </div>
          
          {sector.applications.length > 0 && (
            <div className="grid md:grid-cols-2 gap-8">
              {sector.applications.map((app, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-sm shadow-subtle"
                >
                  {app.image && (
                    <img
                      src={app.image}
                      alt={app.title}
                      className="w-full aspect-video object-cover rounded-sm mb-4"
                    />
                  )}
                  <h3 className="font-medium text-foreground mb-2">{app.title}</h3>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Webbings Section */}
      <section className="py-12 md:py-20">
        <div className="section-container">
          <h2 className="text-2xl font-light text-foreground mb-8">
            Webs
          </h2>
          
          {sector.webbings.length > 0 ? (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {sector.webbings.map((webbing, index) => (
                <div key={index} className="group overflow-hidden rounded-sm bg-card shadow-subtle">
                  <img
                    src={webbing.image}
                    alt={webbing.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-card p-8 rounded-sm text-center">
              <p className="text-muted-foreground">
                Webbing product images will be displayed here. Please provide the images for this sector.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 border-t border-border/50">
        <div className="section-container text-center">
          <h2 className="text-2xl font-light text-foreground mb-4">
            Interested in These Products?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contact us for technical specifications, samples, or a custom quote.
          </p>
          <Link to="/contact" className="btn-primary">
            Request Information
          </Link>
        </div>
      </section>
    </>
  );
}
