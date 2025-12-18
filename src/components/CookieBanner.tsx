import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Settings } from 'lucide-react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  timestamp: '',
};

export function CookieBanner() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const stored = localStorage.getItem('cookie-preferences');
    if (!stored) {
      setIsVisible(true);
    } else {
      setPreferences(JSON.parse(stored));
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    const withTimestamp = { ...prefs, timestamp: new Date().toISOString() };
    localStorage.setItem('cookie-preferences', JSON.stringify(withTimestamp));
    setPreferences(withTimestamp);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleAcceptAll = () => {
    savePreferences({ necessary: true, analytics: true, marketing: true, timestamp: '' });
  };

  const handleRejectAll = () => {
    savePreferences({ necessary: true, analytics: false, marketing: false, timestamp: '' });
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const c = t.cookieConsent;

  // Settings Dialog (can be opened from footer)
  if (showSettings) {
    return (
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
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
            onClick={() => setShowSettings(false)}
          >
            {c.privacyLink}
          </Link>
        </DialogContent>
      </Dialog>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-background border border-border rounded-lg shadow-xl p-6">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-semibold text-foreground mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground">{c.description}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              variant="outline" 
              onClick={handleRejectAll}
              className="sm:flex-1"
            >
              {c.rejectAll}
            </Button>
            <Button 
              variant="outline" 
              onClick={() => setShowSettings(true)}
              className="sm:flex-1"
            >
              <Settings className="w-4 h-4 mr-2" />
              {c.savePreferences}
            </Button>
            <Button 
              onClick={handleAcceptAll}
              className="sm:flex-1"
            >
              {c.acceptAll}
            </Button>
          </div>
          
          <Link 
            to="/privacy" 
            className="text-sm text-primary hover:underline text-center"
          >
            {c.privacyLink}
          </Link>
        </div>
      </div>
    </div>
  );
}

// Export function to open settings from footer
export function useCookieSettings() {
  const [isOpen, setIsOpen] = useState(false);
  return { isOpen, setIsOpen };
}
