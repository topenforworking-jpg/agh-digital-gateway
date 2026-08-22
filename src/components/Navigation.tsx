import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navigation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }

    // Handle scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navLinks = [
    { type: "hash", href: "#expertise", label: t('navigation.expertise', 'Expertise') },
    { type: "route", href: "/nos-produits", label: t('navigation.products', 'Nos Produits') },
    { type: "route", href: "/carriere", label: t('navigation.careers', 'Carrières') },
    { type: "hash", href: "#culture", label: t('navigation.culture', 'Culture') },
    { type: "hash", href: "#contact", label: t('navigation.contact', 'Contact') },
  ];

  const handleNavClick = (link: { type: string; href: string }) => {
    setIsOpen(false);
    if (link.type === "route") {
      navigate(link.href);
    } else {
      if (location.pathname === "/") {
        const element = document.querySelector(link.href);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(`/${link.href}`);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-sm" : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="font-heading font-bold text-xl md:text-2xl text-foreground hover:opacity-90 transition-opacity">
            AGH<span className="text-primary">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            {navLinks.map((link) => {
              const isActive = link.type === "route" && location.pathname === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-primary font-semibold" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            
            <div className="h-4 w-px bg-border my-auto" />

            <LanguageSwitcher />

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button 
              onClick={() => navigate("/carriere")} 
              className="rounded-full shadow-sm text-xs font-semibold px-5"
            >
              {t('navigation.joinUs', 'Rejoignez-nous')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-border animate-fade-in space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = link.type === "route" && location.pathname === link.href;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link)}
                    className={`text-base font-medium transition-colors text-left py-1 ${
                      isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              
              <div className="pt-2 flex items-center justify-between border-t border-border/50">
                <span className="text-sm text-muted-foreground">Langue :</span>
                <LanguageSwitcher />
              </div>

              <Button 
                onClick={() => {
                  setIsOpen(false);
                  navigate("/carriere");
                }} 
                className="w-full rounded-full mt-2"
              >
                {t('navigation.joinUs', 'Rejoignez-nous')}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
