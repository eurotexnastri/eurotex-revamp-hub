import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <title>{t.notFound.title} - Eurotex Nastri</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="section-container text-center">
          <h1 className="text-6xl md:text-8xl font-light text-foreground mb-4">{t.notFound.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t.notFound.message}
          </p>
          <Link to="/" className="btn-outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t.notFound.backHome}
          </Link>
        </div>
      </div>
    </>
  );
}