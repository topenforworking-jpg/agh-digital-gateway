import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article";
  locale?: string;
  noindex?: boolean;
}

const defaultMeta = {
  title: "AGH Data Agency Holding SA",
  description: "Solutions digitales innovantes : développement d'applications mobiles, cybersécurité, blockchain et marketing digital. Entreprise 100% remote.",
  keywords: "développement mobile, Flutter, cybersécurité, blockchain, marketing digital, Django, applications mobiles, sécurité informatique, DeFi, smart contracts",
  image: "/logo.jpg",
  url: "https://agh-data-agency-holding.netlify.app",
  type: "website" as const,
  locale: "fr_FR",
};

const SEO = ({
  title,
  description = defaultMeta.description,
  keywords = defaultMeta.keywords,
  image = defaultMeta.image,
  url = defaultMeta.url,
  type = defaultMeta.type,
  locale = defaultMeta.locale,
  noindex = false,
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | AGH Data Agency Holding SA`
    : defaultMeta.title;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AGH Data Agency Holding SA",
    description: defaultMeta.description,
    url: defaultMeta.url,
    logo: `${defaultMeta.url}/logo.jpg`,
    contactPoint: {
      "@type": "ContactPoint",
      email: "agh.dataagencyholdingsa@gmail.com",
      contactType: "customer service",
      availableLanguage: ["French", "English"],
    },
    sameAs: [],
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 201,
      maxValue: 500,
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Mobile App Development",
      "Cybersecurity",
      "Blockchain",
      "Digital Marketing",
      "Flutter Development",
      "Django Backend",
      "LLM Integration",
    ],
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="AGH Data Agency Holding SA" />
      <link rel="canonical" href={url} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="AGH Data Agency Holding SA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="AGH Data Agency" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
