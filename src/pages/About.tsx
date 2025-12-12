import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>Who Are We - Eurotex Nastri | Italian Textile Manufacturer</title>
        <meta
          name="description"
          content="Learn about Eurotex SRL, an Italian textile manufacturer with over 35 years of experience in producing premium webbings and narrow fabrics."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="section-container">
          <div className="max-w-4xl">
            <h1 className="section-title mb-6 animate-slide-up">
              Who Are We
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
              A legacy of Italian craftsmanship in textile manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <div className="space-y-6">
              <h2 className="text-2xl font-light text-foreground">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1985, Eurotex SRL has grown from a small workshop to a leading manufacturer 
                of textile webbings and narrow fabrics. Based in Vedano al Lambro, in the heart of 
                Italy's industrial region, we combine traditional craftsmanship with modern technology.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to quality has earned us certifications and partnerships with major 
                brands across automotive, fashion, medical, and industrial sectors worldwide.
              </p>
            </div>
            
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
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary/30">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '35+', label: 'Years Experience' },
              { number: '500+', label: 'Products' },
              { number: '50+', label: 'Countries Served' },
              { number: '100%', label: 'Made in Italy' },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl md:text-4xl font-light text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
