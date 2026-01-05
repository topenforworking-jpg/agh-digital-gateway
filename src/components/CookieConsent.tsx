import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "agh_cookie_consent";

const CookieConsent = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
    // Here you can initialize analytics or other cookie-dependent services
    console.log("Cookies accepted - analytics can be enabled");
  };

  const declineCookies = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
    console.log("Cookies declined - only essential cookies will be used");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border border-border rounded-2xl shadow-lg p-6 backdrop-blur-lg">
          <div className="flex items-start gap-4">
            <div className="hidden sm:flex shrink-0 p-3 rounded-full bg-primary/10 text-primary">
              <Cookie className="h-6 w-6" />
            </div>
            
            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">
                    {t("cookies.title", "Nous utilisons des cookies")}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t("cookies.description", "Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et personnaliser le contenu. En cliquant sur « Accepter », vous consentez à l'utilisation de tous les cookies conformément à notre")}{" "}
                    <Link to="/privacy-policy" className="text-primary hover:underline">
                      {t("cookies.privacyLink", "Politique de Confidentialité")}
                    </Link>.
                  </p>
                </div>
                <button
                  onClick={declineCookies}
                  className="shrink-0 text-muted-foreground hover:text-foreground transition-colors sm:hidden"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptCookies} className="rounded-full">
                  {t("cookies.accept", "Accepter tous les cookies")}
                </Button>
                <Button 
                  onClick={declineCookies} 
                  variant="outline" 
                  className="rounded-full"
                >
                  {t("cookies.decline", "Refuser les cookies non essentiels")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;

// Helper function to check if cookies were accepted
export const hasCookieConsent = (): boolean => {
  return localStorage.getItem(COOKIE_CONSENT_KEY) === "accepted";
};
