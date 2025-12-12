import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Printer } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import buildingImage from '@/assets/contact/building.jpg';

export default function Contact() {
  const { t, language } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{language === 'it' ? 'Contatti - Eurotex Nastri | Contattaci' : 'Contact - Eurotex Nastri | Get in Touch'}</title>
        <meta
          name="description"
          content={language === 'it'
            ? 'Contatta Eurotex SRL per informazioni su nastri tessili, fettucce e tessuti stretti. Situati a Vedano al Lambro, Italia. Richiedi un preventivo o supporto tecnico.'
            : 'Contact Eurotex SRL for inquiries about textile webbings, tapes, and narrow fabrics. Located in Vedano al Lambro, Italy. Request a quote or technical support.'
          }
        />
      </Helmet>

      {/* Hero with Building Image */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="section-title mb-6 animate-slide-up">
                {t.contact.title}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '100ms' }}>
                {t.contact.subtitle}
              </p>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
              <img
                src={buildingImage}
                alt="Eurotex building"
                className="w-full rounded-sm shadow-subtle"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-2xl font-light text-foreground">{t.contact.getInTouch}</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">{t.contact.address}</h3>
                    <p className="text-muted-foreground">
                      Via E. Fermi 10<br />
                      20854 Vedano al Lambro<br />
                      Italy
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">{t.contact.phone}</h3>
                    <p className="text-muted-foreground">
                      <a href="tel:+390392496615" className="hover:text-foreground transition-colors">
                        +39 039 2496615
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Printer className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">{t.contact.fax}</h3>
                    <p className="text-muted-foreground">
                      +39 039 2496616
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-muted-foreground mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground">{t.contact.email}</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@eurotexnastri.it" className="hover:text-foreground transition-colors">
                        info@eurotexnastri.it
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">P. IVA:</strong> 09835600157
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-sm shadow-subtle">
              <h2 className="text-xl font-medium text-foreground mb-6">{t.contact.sendMessage}</h2>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                    {t.contact.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder={t.contact.subjectPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-background border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-12 md:py-20">
        <div className="section-container">
          <h2 className="text-2xl font-light text-foreground mb-8">{t.contact.findUs}</h2>
          <div className="aspect-video rounded-sm overflow-hidden shadow-subtle">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.8892847244635!2d9.267191200000001!3d45.617635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786bbcf47e87543%3A0x6d78965bbdcd7c46!2sEurotex%20Srl!5e0!3m2!1sen!2sit!4v1702400000000!5m2!1sen!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eurotex location"
            />
          </div>
        </div>
      </section>
    </>
  );
}