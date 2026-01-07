import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/i18n/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SEOHead } from '@/components/SEOHead';

export default function Privacy() {
  const { t, language } = useLanguage();
  const p = t.privacy;

  return (
    <>
      <Helmet>
        <title>{p.title} | Eurotex</title>
        <meta name="description" content={language === 'it' 
          ? 'Informativa sulla Privacy - Eurotex SRL conformità GDPR'
          : 'Privacy Policy - Eurotex SRL GDPR compliance information'
        } />
        <SEOHead path="/privacy" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="section-container">
          <Breadcrumbs currentPage={p.title} />
          <h1 className="heading-1 text-center mb-4">{p.title}</h1>
          <p className="text-muted-foreground text-center">
            {p.lastUpdated}: December 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="section-container max-w-4xl">
          <div className="prose prose-slate dark:prose-invert max-w-none space-y-10">
            
            {/* Introduction */}
            <p className="body-text text-lg">{p.intro}</p>

            {/* Data Controller */}
            <div>
              <h2 className="heading-3 mb-4">{p.dataController.title}</h2>
              <p className="body-text mb-2">{p.dataController.content}</p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-1">
                <p className="font-semibold text-foreground">{p.dataController.company}</p>
                <p className="text-muted-foreground">{p.dataController.address}</p>
                <p className="text-muted-foreground">{p.dataController.vatNumber}</p>
                <p className="text-muted-foreground">Email: info@eurotexnastri.it</p>
              </div>
            </div>

            {/* Data Collected */}
            <div>
              <h2 className="heading-3 mb-4">{p.dataCollected.title}</h2>
              <p className="body-text mb-3">{p.dataCollected.intro}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {p.dataCollected.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Purpose */}
            <div>
              <h2 className="heading-3 mb-4">{p.purpose.title}</h2>
              <p className="body-text mb-3">{p.purpose.intro}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {p.purpose.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Legal Basis */}
            <div>
              <h2 className="heading-3 mb-4">{p.legalBasis.title}</h2>
              <p className="body-text mb-3">{p.legalBasis.intro}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {p.legalBasis.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="heading-3 mb-4">{p.cookies.title}</h2>
              <p className="body-text mb-4">{p.cookies.intro}</p>
              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">{p.cookies.necessary.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.cookies.necessary.desc}</p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">{p.cookies.analytics.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.cookies.analytics.desc}</p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">{p.cookies.marketing.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.cookies.marketing.desc}</p>
                </div>
              </div>
              <p className="body-text mt-4">{p.cookies.manage}</p>
            </div>

            {/* Rights */}
            <div>
              <h2 className="heading-3 mb-4">{p.rights.title}</h2>
              <p className="body-text mb-3">{p.rights.intro}</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {p.rights.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="body-text mt-4">{p.rights.exercise}</p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="heading-3 mb-4">{p.retention.title}</h2>
              <p className="body-text">{p.retention.content}</p>
            </div>

            {/* Security */}
            <div>
              <h2 className="heading-3 mb-4">{p.security.title}</h2>
              <p className="body-text">{p.security.content}</p>
            </div>

            {/* Third Party */}
            <div>
              <h2 className="heading-3 mb-4">{p.thirdParty.title}</h2>
              <p className="body-text">{p.thirdParty.content}</p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="heading-3 mb-4">{p.contact.title}</h2>
              <p className="body-text mb-2">{p.contact.content}</p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-1">
                <p className="font-semibold text-foreground">Eurotex SRL</p>
                <p className="text-muted-foreground">Via Enrico Fermi 10, 20854 Vedano al Lambro (MB), Italy</p>
                <p className="text-muted-foreground">Email: info@eurotexnastri.it</p>
                <p className="text-muted-foreground">Tel: +39 039 2497447</p>
              </div>
            </div>

            {/* Changes */}
            <div>
              <h2 className="heading-3 mb-4">{p.changes.title}</h2>
              <p className="body-text">{p.changes.content}</p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
