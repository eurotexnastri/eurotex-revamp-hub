import { useLanguage } from '@/i18n/LanguageContext';

interface SEOHeadProps {
  path: string;
}

export function SEOHead({ path }: SEOHeadProps) {
  const { language } = useLanguage();
  const baseUrl = 'https://www.eurotexnastri.com';

  return (
    <>
      {/* Hreflang Tags */}
      <link rel="alternate" hrefLang="en" href={`${baseUrl}${path}`} />
      <link rel="alternate" hrefLang="it" href={`${baseUrl}${path}`} />
      <link rel="alternate" hrefLang="x-default" href={`${baseUrl}${path}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={`${baseUrl}${path}`} />
      
      {/* Open Graph Locale */}
      <meta property="og:locale" content={language === 'it' ? 'it_IT' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'it' ? 'en_US' : 'it_IT'} />
      <meta property="og:url" content={`${baseUrl}${path}`} />
    </>
  );
}

// Structured data generators
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.eurotexnastri.com/#organization',
    name: 'Eurotex SRL',
    alternateName: 'Eurotex Nastri',
    url: 'https://www.eurotexnastri.com',
    logo: 'https://www.eurotexnastri.com/logo.png',
    description: 'Italian manufacturer of premium textile webbings and narrow fabrics for industrial, fashion, safety, and technical applications.',
    foundingDate: '1973',
    vatID: 'IT09835600157',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Enrico Fermi 10',
      addressLocality: 'Vedano al Lambro',
      addressRegion: 'MB',
      postalCode: '20854',
      addressCountry: 'IT',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+39-039-2496615',
      contactType: 'customer service',
      email: 'info@eurotexnastri.it',
      availableLanguage: ['Italian', 'English'],
    },
    sameAs: [],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.eurotexnastri.com/#website',
    url: 'https://www.eurotexnastri.com',
    name: 'Eurotex Nastri',
    description: 'Premium textile webbings and narrow fabrics manufacturer',
    publisher: {
      '@id': 'https://www.eurotexnastri.com/#organization',
    },
    inLanguage: ['en', 'it'],
  };
}

export function generateProductSchema(sector: {
  title: string;
  description: string;
  slug: string;
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${sector.title} Webbings`,
    description: sector.description,
    url: `https://www.eurotexnastri.com/sectors/${sector.slug}`,
    image: sector.image,
    brand: {
      '@type': 'Brand',
      name: 'Eurotex',
    },
    manufacturer: {
      '@id': 'https://www.eurotexnastri.com/#organization',
    },
    category: 'Textile Webbings',
    material: 'Textile',
    countryOfOrigin: 'IT',
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.eurotexnastri.com/#localbusiness',
    name: 'Eurotex SRL',
    image: 'https://www.eurotexnastri.com/logo.png',
    telephone: '+39-039-2496615',
    email: 'info@eurotexnastri.it',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Enrico Fermi 10',
      addressLocality: 'Vedano al Lambro',
      addressRegion: 'MB',
      postalCode: '20854',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.617635,
      longitude: 9.267191,
    },
    url: 'https://www.eurotexnastri.com',
    priceRange: '$$',
  };
}
