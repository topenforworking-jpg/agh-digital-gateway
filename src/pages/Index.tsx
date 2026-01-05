import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Recruitment from "@/components/Recruitment";
import RemoteCulture from "@/components/RemoteCulture";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language === "fr" ? "fr_FR" : "en_US";

  return (
    <div className="smooth-scroll">
      <SEO 
        description="AGH Data Agency Holding SA - Solutions digitales innovantes : développement d'applications mobiles Flutter, cybersécurité, blockchain, marketing digital. Entreprise 100% remote, 201-500 employés."
        keywords="développement mobile, Flutter, Django, cybersécurité, blockchain, marketing digital, applications mobiles, sécurité informatique, DeFi, smart contracts, LLM, IA, remote work"
        locale={locale}
      />
      <Navigation />
      <main>
        <Hero />
        <Expertise />
        <Recruitment />
        <RemoteCulture />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
