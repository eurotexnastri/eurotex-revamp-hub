import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { generateLocalBusinessSchema } from '@/components/SEOHead';
import buildingImage from '@/assets/contact/building.jpg';

// Contact form validation schema
const createContactSchema = (validation: {
  nameRequired: string;
  nameMax: string;
  emailRequired: string;
  emailInvalid: string;
  emailMax: string;
  subjectRequired: string;
  subjectMax: string;
  messageRequired: string;
  messageMax: string;
}) => z.object({
  name: z.string()
    .trim()
    .min(1, validation.nameRequired)
    .max(100, validation.nameMax),
  email: z.string()
    .trim()
    .min(1, validation.emailRequired)
    .email(validation.emailInvalid)
    .max(255, validation.emailMax),
  subject: z.string()
    .trim()
    .min(1, validation.subjectRequired)
    .max(200, validation.subjectMax),
  message: z.string()
    .trim()
    .min(1, validation.messageRequired)
    .max(2000, validation.messageMax),
});

type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;

export default function Contact() {
  const { t, language } = useLanguage();
  const baseUrl = 'https://www.eurotexnastri.it';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactSchema = createContactSchema(t.contact.validation);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Create mailto link with validated and encoded data
      const mailtoLink = `mailto:info@eurotexnastri.it?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      )}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success and reset form
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact page structured data
  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: language === 'it' ? 'Contatti - Eurotex' : 'Contact - Eurotex',
    description: language === 'it'
      ? 'Contatta Eurotex SRL per informazioni su nastri tessili'
      : 'Contact Eurotex SRL for inquiries about textile webbings',
    mainEntity: generateLocalBusinessSchema(),
  };

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
        <link rel="canonical" href={`${baseUrl}/contact`} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/contact`} />
        <link rel="alternate" hrefLang="it" href={`${baseUrl}/contact`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/contact`} />
        <meta property="og:locale" content={language === 'it' ? 'it_IT' : 'en_US'} />
        <meta property="og:url" content={`${baseUrl}/contact`} />
        <script type="application/ld+json">
          {JSON.stringify(contactPageSchema)}
        </script>
      </Helmet>

      {/* Hero with Building Image */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <Breadcrumbs currentPage={t.nav.contact} />
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
                alt="Eurotex building headquarters in Vedano al Lambro, Italy"
                loading="lazy"
                decoding="async"
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
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-sm flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-700 text-sm">{t.contact.successMessage}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-700 text-sm">{t.contact.errorMessage}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={`w-full px-4 py-2 bg-background border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring ${
                      errors.name ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder={t.contact.namePlaceholder}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`w-full px-4 py-2 bg-background border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring ${
                      errors.email ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder={t.contact.emailPlaceholder}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                    {t.contact.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className={`w-full px-4 py-2 bg-background border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring ${
                      errors.subject ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder={t.contact.subjectPlaceholder}
                    aria-invalid={errors.subject ? 'true' : 'false'}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register('message')}
                    className={`w-full px-4 py-2 bg-background border rounded-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none ${
                      errors.message ? 'border-red-500' : 'border-border'
                    }`}
                    placeholder={t.contact.messagePlaceholder}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button 
                  type="submit" 
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.contact.sending : t.contact.send}
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
