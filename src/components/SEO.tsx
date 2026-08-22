import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  locale?: string;
  noindex?: boolean;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

const defaultMeta = {
  title: "AGH Data Agency Holding SA - Apps Mobiles, Cybersécurité, Blockchain",
  description: "Leader digital 100% remote : écosystème de 20 applications mobiles IA & AR offline, solutions en cybersécurité, blockchain, backend Django et marketing digital.",
  keywords: "applications mobiles, AI offline, réalité augmentée, Flutter, Google Play Store, AGH Data Agency Holding, cybersécurité, blockchain, Django, intelligence artificielle",
  image: "https://agh-data-agency-holding.netlify.app/logo.jpg",
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
  schema,
}: SEOProps) => {
  const fullTitle = title 
    ? `${title} | AGH Data Agency Holding SA`
    : defaultMeta.title;

  const fullImageUrl = image.startsWith("http")
    ? image
    : `${defaultMeta.url}${image.startsWith("/") ? "" : "/"}${image}`;

  const canonicalUrl = url.startsWith("http")
    ? url
    : `${defaultMeta.url}${url.startsWith("/") ? "" : "/"}${url}`;

  // Default Organization & WebSite structured data
  const defaultOrganizationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "AGH Data Agency Holding SA",
    alternateName: ["AGH Data Agency", "AGH Holding", "AGH"],
    description: defaultMeta.description,
    url: defaultMeta.url,
    logo: `${defaultMeta.url}/logo.jpg`,
    image: `${defaultMeta.url}/logo.jpg`,
    email: "agh.dataagencyholdingsa@gmail.com",
    contactPoint: {
      "@type": "ContactPoint",
      email: "agh.dataagencyholdingsa@gmail.com",
      contactType: "customer support",
      availableLanguage: ["French", "English", "Arabic"],
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 201,
      maxValue: 500,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "Worldwide",
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Mobile Applications Development (Flutter)",
      "Offline AI & Augmented Reality",
      "Cybersecurity & Penetration Testing",
      "Blockchain & Smart Contracts",
      "Django Backend Architecture",
      "Digital Marketing & Growth",
    ],
  };

  const schemasToRender = schema 
    ? (Array.isArray(schema) ? schema : [schema])
    : [defaultOrganizationSchema];

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="AGH Data Agency Holding SA" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Multilingual Hreflang alternates */}
      <link rel="alternate" hrefLang="fr" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ar" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type === "product" ? "website" : type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="AGH Data Agency Holding SA" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Mobile & Web App Manifest Meta */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="AGH Data Agency" />

      {/* Structured Data (JSON-LD) */}
      {schemasToRender.map((item, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
