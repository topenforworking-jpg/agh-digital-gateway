import { useParams, useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { 
  ArrowLeft, 
  ExternalLink, 
  Sparkles, 
  Smartphone, 
  CheckCircle2, 
  Download, 
  Layers, 
  Share2, 
  ChevronRight, 
  Home, 
  ShieldCheck, 
  Zap, 
  Star,
  Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getProductById, products } from "@/data/products";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const product = getProductById(id || "");
  const locale = i18n.language === "fr" ? "fr_FR" : "en_US";

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        <main className="flex-1 flex items-center justify-center py-24">
          <div className="text-center max-w-md mx-auto px-4">
            <Smartphone className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h1 className="text-2xl font-heading font-bold mb-3">Application non trouvée</h1>
            <p className="text-muted-foreground mb-6">
              L'application demandée n'existe pas ou a été déplacée.
            </p>
            <Button onClick={() => navigate("/nos-produits")} className="rounded-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour au catalogue des produits
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title={`${product.name} - Application Mobile - AGH Data Agency`}
        description={product.description}
        keywords={`${product.name}, ${product.tags.join(", ")}, ${product.packageName}, application mobile offline`}
        locale={locale}
      />
      <Navigation />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="h-4 w-4" /> Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/nos-produits" className="hover:text-primary transition-colors">
              Nos Produits
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium truncate">{product.name}</span>
          </nav>

          {/* Product Header Card */}
          <div className="bg-card border border-border rounded-3xl p-6 sm:p-10 mb-12 shadow-sm relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-8">
              
              {/* App Icon */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-background border border-border/80 shadow-md p-2 flex items-center justify-center shrink-0 overflow-hidden">
                {product.icon ? (
                  <img
                    src={product.icon}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <Smartphone className="h-12 w-12 text-primary" />
                )}
              </div>

              {/* Title & Metadata */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="rounded-full px-3 py-1 font-medium">
                    {product.categoryLabel}
                  </Badge>
                  <Badge variant="outline" className="rounded-full px-3 py-1 text-xs text-primary border-primary/30 bg-primary/5">
                    <Zap className="h-3 w-3 mr-1" /> 100% Hors Ligne
                  </Badge>
                  {product.version && (
                    <Badge variant="outline" className="rounded-full px-3 py-1 text-xs text-muted-foreground">
                      v{product.version}
                    </Badge>
                  )}
                </div>

                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  {product.name}
                </h1>

                <p className="text-sm font-mono text-muted-foreground">
                  Identifiant : <span className="text-foreground">{product.packageName}</span>
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Direct CTAs */}
              <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 pt-4 md:pt-0">
                <Button 
                  size="lg" 
                  className="rounded-full gap-2 px-8 h-12 shadow-md"
                  asChild
                >
                  <a 
                    href={product.playStoreUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>Voir sur Google Play</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>

                <Button 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full gap-2"
                  onClick={() => {
                    const el = document.querySelector("#contact");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    } else {
                      navigate("/#contact");
                    }
                  }}
                >
                  <span>Demander une personnalisation</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Main Grid: Description & Gallery */}
          <div className="grid lg:grid-cols-3 gap-10 mb-16">
            
            {/* Left: Presentation & Key Features */}
            <div className="lg:col-span-2 space-y-10">
              
              {/* Overview */}
              <section className="space-y-4">
                <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="h-6 w-6 text-primary" />
                  Présentation de l'application
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {product.longDescription || product.description}
                </p>
              </section>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <section className="space-y-6">
                  <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    Fonctionnalités Principales
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {product.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="p-4 rounded-2xl bg-card border border-border flex items-start gap-3"
                      >
                        <div className="p-1 rounded-full bg-primary/10 text-primary mt-0.5 shrink-0">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium text-foreground leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Main Presentation Banner */}
              {product.preview && (
                <section className="space-y-4">
                  <h2 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
                    <ImageIcon className="h-6 w-6 text-primary" />
                    Affiche de présentation officielle
                  </h2>
                  <div 
                    className="rounded-3xl overflow-hidden border border-border shadow-lg cursor-pointer bg-muted"
                    onClick={() => setSelectedImage(product.preview)}
                  >
                    <img 
                      src={product.preview} 
                      alt={`Présentation ${product.name}`} 
                      className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Cliquez sur l'affiche pour l'afficher en haute résolution.
                  </p>
                </section>
              )}
            </div>

            {/* Right: Technical specifications & Quick info */}
            <div className="space-y-8">
              <Card className="rounded-3xl border-border bg-card shadow-sm">
                <CardHeader>
                  <CardTitle className="font-heading text-xl font-bold">
                    Spécifications Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm">
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Développeur</span>
                    <span className="font-medium text-foreground">AGH Data Agency</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Catégorie</span>
                    <span className="font-medium text-foreground">{product.categoryLabel}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Mode de connexion</span>
                    <span className="font-medium text-emerald-600 dark:text-emerald-400">100% Autonome / Hors Ligne</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Technologies</span>
                    <span className="font-medium text-foreground">Flutter, IA Locale, AR</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Compatibilité</span>
                    <span className="font-medium text-foreground">{product.compatibility || "Android 8.0+"}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Confidentialité</span>
                    <span className="font-medium text-foreground">Zéro collecte de données</span>
                  </div>

                  <div className="pt-4">
                    <Button 
                      className="w-full rounded-full gap-2"
                      asChild
                    >
                      <a 
                        href={product.playStoreUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Download className="h-4 w-4" />
                        Installer depuis Google Play
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Guarantees & Privacy */}
              <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10 space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                  <h3 className="font-heading font-bold text-foreground">Sécurité & Confidentialité</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Toutes nos applications sont testées et garanties sans trackers intrusifs. Vos données personnelles restent strictement sur votre terminal.
                </p>
              </div>
            </div>
          </div>

          {/* Related Products Carousel / Grid */}
          {relatedProducts.length > 0 && (
            <div className="pt-12 border-t border-border">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Autres applications dans la catégorie {product.categoryLabel}
                </h2>
                <Button variant="ghost" asChild className="rounded-full">
                  <Link to="/nos-produits">
                    Voir tout le catalogue <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((item) => (
                  <Card 
                    key={item.id} 
                    className="p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-muted p-1 shrink-0 overflow-hidden">
                        <img src={item.icon} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-heading font-bold text-sm text-foreground truncate">{item.name}</h4>
                        <p className="text-xs text-muted-foreground">{item.categoryLabel}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                      {item.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-full rounded-full text-xs" asChild>
                      <Link to={`/nos-produits/${item.id}`}>
                        Voir la fiche
                      </Link>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Lightbox / Modal for Preview */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-4 py-2 border-b border-border mb-2">
              <h3 className="font-heading font-bold text-foreground truncate">{product.name} - Présentation</h3>
              <Button variant="ghost" size="sm" onClick={() => setSelectedImage(null)} className="rounded-full">
                Fermer
              </Button>
            </div>
            <div className="overflow-auto max-h-[75vh] flex justify-center">
              <img 
                src={selectedImage} 
                alt={product.name} 
                className="rounded-xl object-contain max-h-[70vh] w-auto"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
