import { useState, useEffect } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export function CookieBanner() {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const content = {
    en: {
      title: 'Cookie Policy',
      description: 'We use cookies to enhance your browsing experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies in accordance with GDPR regulations.',
      accept: 'Accept',
      reject: 'Reject',
      privacy: 'Privacy Policy'
    },
    it: {
      title: 'Informativa sui Cookie',
      description: 'Utilizziamo i cookie per migliorare la tua esperienza di navigazione e analizzare il traffico del sito. Cliccando "Accetta", acconsenti all\'uso dei cookie in conformità con il GDPR.',
      accept: 'Accetta',
      reject: 'Rifiuta',
      privacy: 'Privacy Policy'
    }
  };

  const t = content[language];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-background border border-border rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-2">{t.title}</h3>
            <p className="text-sm text-muted-foreground">{t.description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Button 
              variant="outline" 
              onClick={handleReject}
              className="text-sm"
            >
              {t.reject}
            </Button>
            <Button 
              onClick={handleAccept}
              className="text-sm bg-primary hover:bg-primary/90"
            >
              {t.accept}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
