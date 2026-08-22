import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Products from "@/components/Products";
import Recruitment from "@/components/Recruitment";
import RemoteCulture from "@/components/RemoteCulture";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const { i18n } = useTranslation();
  const locale = i18n.language === "fr" ? "fr_FR" : "en_US";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "AGH Data Agency Holding SA",
    alternateName: ["AGH Data Agency", "AGH Holding", "AGH"],
    url: "https://agh-data-agency-holding.netlify.app",
    logo: "https://agh-data-agency-holding.netlify.app/logo.jpg",
    image: "https://agh-data-agency-holding.netlify.app/logo.jpg",
    description: "Société technologique de pointe spécialisée dans le développement d'applications mobiles IA & AR offline, la cybersécurité offensive/défensive, la blockchain et l'infrastructure cloud.",
    email: "agh.dataagencyholdingsa@gmail.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "agh.dataagencyholdingsa@gmail.com",
        contactType: "customer service",
        availableLanguage: ["French", "English", "Arabic"],
      }
    ],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 201,
      maxValue: 500,
    },
    areaServed: "Worldwide",
    sameAs: [
      "https://play.google.com/store/apps/developer?id=AGH+Data+Agency+Holding+SA"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Catalogue d'Applications Mobiles & Services Informatiques",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Applications Mobiles Grand Public",
          description: "20 applications mobiles intelligentes avec IA embarquée et AR 100% hors ligne."
        },
        {
          "@type": "OfferCatalog",
          name: "Audits de Cybersécurité & Pentest",
          description: "Protection des infrastructures critiques et conformité ISO/OWASP."
        },
        {
          "@type": "OfferCatalog",
          name: "Solutions Blockchain & Web3",
          description: "Développement de smart contracts et protocoles décentralisés."
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AGH Data Agency Holding SA",
    url: "https://agh-data-agency-holding.netlify.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://agh-data-agency-holding.netlify.app/nos-produits?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="smooth-scroll">
      <SEO 
        title="AGH Data Agency Holding SA - Apps Mobiles, Cybersécurité, Blockchain"
        description="Leader digital 100% remote : écosystème de 20 applications mobiles IA & AR offline, solutions en cybersécurité, blockchain, backend Django et marketing digital."
        keywords="développement mobile, Flutter, Django, cybersécurité, blockchain, marketing digital, applications mobiles, sécurité informatique, DeFi, smart contracts, LLM, IA, remote work, AGH Data Agency"
        locale={locale}
        schema={[organizationSchema, websiteSchema]}
      />
      <Navigation />
      <main>
        <Hero />
        <Expertise />
        <Products />
        <Recruitment />
        <RemoteCulture />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
