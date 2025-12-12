import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-8 mt-auto">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="footer-text text-center md:text-left">
            EUROTEX SRL – Via Enrico Fermi 10, 20854 VEDANO AL LAMBRO (MB) – P. IVA 09835600157
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="footer-text hover:text-foreground transition-colors">
              {t.footer.privacy}
            </Link>
            <Link to="/contact" className="footer-text hover:text-foreground transition-colors">
              {t.footer.contact}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}