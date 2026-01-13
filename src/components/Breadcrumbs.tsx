import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  currentPage?: string;
}

export function Breadcrumbs({ items = [], currentPage }: BreadcrumbsProps) {
  const { t } = useLanguage();
  const location = useLocation();

  const baseUrl = 'https://www.eurotexnastri.com';

  // Generate breadcrumb structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t.nav.home,
        item: `${baseUrl}/`,
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        item: `${baseUrl}${item.href}`,
      })),
      ...(currentPage
        ? [
            {
              '@type': 'ListItem',
              position: items.length + 2,
              name: currentPage,
              item: `${baseUrl}${location.pathname}`,
            },
          ]
        : []),
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-muted-foreground">
          <li>
            <Link
              to="/"
              className="flex items-center hover:text-foreground transition-colors"
              aria-label={t.nav.home}
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>

          {items.map((item) => (
            <li key={item.href} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1" />
              <Link to={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            </li>
          ))}

          {currentPage && (
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1" />
              <span className="text-foreground font-medium" aria-current="page">
                {currentPage}
              </span>
            </li>
          )}
        </ol>
      </nav>
    </>
  );
}
