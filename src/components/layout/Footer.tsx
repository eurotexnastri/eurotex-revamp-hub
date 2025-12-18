import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

export function Footer() {
  const { t } = useLanguage();
  const [showCookieSettings, setShowCookieSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    const stored = localStorage.getItem('cookie-preferences');
    return stored ? JSON.parse(stored) : { necessary: true, analytics: false, marketing: false, timestamp: '' };
  });

  const savePreferences = (prefs: CookiePreferences) => {
    const withTimestamp = { ...prefs, timestamp: new Date().toISOString() };
    localStorage.setItem('cookie-preferences', JSON.stringify(withTimestamp));
    setPreferences(withTimestamp);
    setShowCookieSettings(false);
  };

  const handleRejectAll = () => {
    savePreferences({ necessary: true, analytics: false, marketing: false, timestamp: '' });
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const c = t.cookieConsent;

  return (
    <>
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
              <button 
                onClick={() => setShowCookieSettings(true)}
                className="footer-text hover:text-foreground transition-colors"
              >
                {t.footer.cookieSettings}
              </button>
              <Link to="/contact" className="footer-text hover:text-foreground transition-colors">
                {t.footer.contact}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Settings Dialog */}
      <Dialog open={showCookieSettings} onOpenChange={setShowCookieSettings}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{c.title}</DialogTitle>
            <DialogDescription>{c.description}</DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            {/* Necessary */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{c.necessary.title}</h4>
                <p className="text-sm text-muted-foreground">{c.necessary.desc}</p>
              </div>
              <Switch checked disabled className="opacity-50" />
            </div>
            
            {/* Analytics */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{c.analytics.title}</h4>
                <p className="text-sm text-muted-foreground">{c.analytics.desc}</p>
              </div>
              <Switch 
                checked={preferences.analytics} 
                onCheckedChange={(checked) => setPreferences(p => ({ ...p, analytics: checked }))}
              />
            </div>
            
            {/* Marketing */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-medium text-foreground">{c.marketing.title}</h4>
                <p className="text-sm text-muted-foreground">{c.marketing.desc}</p>
              </div>
              <Switch 
                checked={preferences.marketing} 
                onCheckedChange={(checked) => setPreferences(p => ({ ...p, marketing: checked }))}
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" onClick={handleRejectAll} className="flex-1">
              {c.rejectAll}
            </Button>
            <Button onClick={handleSavePreferences} className="flex-1">
              {c.savePreferences}
            </Button>
          </div>
          
          <Link 
            to="/privacy" 
            className="text-sm text-primary hover:underline text-center block mt-2"
            onClick={() => setShowCookieSettings(false)}
          >
            {c.privacyLink}
          </Link>
        </DialogContent>
      </Dialog>
    </>
  );
}
