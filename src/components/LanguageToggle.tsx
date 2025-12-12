import { useLanguage } from '@/i18n/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'it' : 'en')}
      className="flex items-center gap-1 px-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border border-border/50 rounded-sm"
      aria-label={`Switch to ${language === 'en' ? 'Italian' : 'English'}`}
    >
      <span className={language === 'en' ? 'text-foreground' : ''}>EN</span>
      <span className="text-border">/</span>
      <span className={language === 'it' ? 'text-foreground' : ''}>IT</span>
    </button>
  );
}
