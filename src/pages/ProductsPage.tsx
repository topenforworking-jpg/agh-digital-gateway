import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  Search, 
  ExternalLink, 
  Sparkles, 
  Smartphone, 
  HeartPulse, 
  Utensils, 
  Moon, 
  BookOpen, 
  Palette, 
  ShoppingBag,
  Zap,
  ArrowRight,
  ChevronRight,
  Home,
  CheckCircle2,
  Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products, Product } from "@/data/products";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const categoryIcons: Record<string, typeof Smartphone> = {
  all: Smartphone,
  health: HeartPulse,
  food: Utensils,
  spiritual: Moon,
  lifestyle: Sparkles,
  education: BookOpen,
  beauty: Palette,
  business: ShoppingBag,
};

const ProductsPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const locale = i18n.language === "fr" ? "fr_FR" : "en_US";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [previewImage, setPreviewImage] = useState<{ title: string; src: string } | null>(null);

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.packageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: "all", label: "Toutes les Apps", count: products.length },
    { id: "health", label: "Santé & Fitness", count: products.filter(p => p.category === 'health').length },
    { id: "beauty", label: "Beauté & Mode", count: products.filter(p => p.category === 'beauty').length },
    { id: "food", label: "Cuisine & Recettes", count: products.filter(p => p.category === 'food').length },
    { id: "spiritual", label: "Spiritualité", count: products.filter(p => p.category === 'spiritual').length },
    { id: "education", label: "Éducation & Jeux", count: products.filter(p => p.category === 'education').length },
    { id: "lifestyle", label: "Lifestyle & Déco", count: products.filter(p => p.category === 'lifestyle').length },
    { id: "business", label: "Business", count: products.filter(p => p.category === 'business').length },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Nos Produits & Applications Mobiles - AGH Data Agency Holding SA"
        description="Découvrez l'écosystème de 19 applications mobiles innovantes développées par AGH Data Agency : IA embarquée, Réalité Augmentée et 100% Offline."
        keywords="applications mobiles, AI offline, réalité augmentée, flutter, store google play, AGH Data Agency, applications santé, cuisine, spiritualité"
        locale={locale}
      />
      
      <Navigation />

      <main className="flex-1 pt-24 pb-20">
        {/* Breadcrumbs & Header */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="h-4 w-4" /> Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Nos Produits</span>
          </nav>

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              Écosystème Mobile Intelligent
            </div>
            
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Nos Applications & Produits
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explorez nos solutions mobiles conçues pour le grand public et les professionnels. Des applications à forte valeur ajoutée intégrant l'Intelligence Artificielle, la Réalité Augmentée et fonctionnant 100% hors ligne.
            </p>

            {/* Quick stats pills */}
            <div className="flex flex-wrap justify-center gap-3 pt-4 text-sm font-medium">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-card border border-border">
                <CheckCircle2 className="h-4 w-4 text-primary" /> 19 Applications Développées
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-card border border-border">
                <Zap className="h-4 w-4 text-amber-500" /> 100% Fonctionnement Hors Ligne
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-card border border-border">
                <Sparkles className="h-4 w-4 text-blue-500" /> IA & Réalité Augmentée
              </span>
            </div>
          </div>

          {/* Search & Category Filter Section */}
          <div className="max-w-5xl mx-auto mb-12 space-y-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher une application par nom, identifiant package (ex: com.bilgassimel.*) ou mot-clé..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-base rounded-2xl bg-card border-border shadow-sm"
              />
            </div>

            {/* Category tabs */}
            <Tabs
              value={selectedCategory}
              onValueChange={setSelectedCategory}
              className="w-full"
            >
              <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center p-0">
                {categories.map((category) => {
                  const IconComponent = categoryIcons[category.id] || Smartphone;
                  return (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2.5 text-sm font-medium border border-border bg-card transition-all"
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      {category.label}
                      <span className="ml-1.5 text-xs opacity-75">({category.count})</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </Tabs>
          </div>

          {/* Counter info */}
          <div className="mb-8 flex justify-between items-center text-sm text-muted-foreground border-b border-border pb-4">
            <span>
              Affichage de <strong>{filteredProducts.length}</strong> sur <strong>{products.length}</strong> applications
            </span>
            <span className="text-xs hidden sm:inline">
              Cliquez sur une fiche pour découvrir toutes les fonctionnalités et captures d'écran.
            </span>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => {
              const CategoryIcon = categoryIcons[product.category] || Smartphone;
              return (
                <Card
                  key={product.id}
                  className="group relative flex flex-col justify-between hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 bg-card/90 backdrop-blur rounded-2xl overflow-hidden border-border"
                >
                  {product.featured && (
                    <div className="absolute top-0 right-0 z-20">
                      <span className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm">
                        Sélection
                      </span>
                    </div>
                  )}

                  {/* Banner Thumbnail */}
                  {product.preview && (
                    <div 
                      className="relative h-48 w-full overflow-hidden bg-muted cursor-pointer group/img border-b border-border/40"
                      onClick={() => setPreviewImage({ title: product.name, src: product.preview })}
                      title="Cliquer pour agrandir l'aperçu"
                    >
                      <img
                        src={product.preview}
                        alt={`${product.name} présentation`}
                        loading="lazy"
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3">
                        <span className="text-white text-xs font-medium flex items-center gap-1.5 bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
                          <ImageIcon className="h-3.5 w-3.5" /> Agrandir l'affiche
                        </span>
                      </div>
                    </div>
                  )}

                  <div>
                    <CardHeader className="pb-3 pt-5">
                      <div className="flex items-start gap-4">
                        {/* App Icon */}
                        <div className="w-14 h-14 rounded-2xl bg-card border border-border p-1 shadow-sm shrink-0 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                          {product.icon ? (
                            <img
                              src={product.icon}
                              alt={product.name}
                              className="w-full h-full object-cover rounded-xl"
                              onError={(e) => {
                                (e.target as HTMLElement).style.display = "none";
                              }}
                            />
                          ) : (
                            <CategoryIcon className="h-7 w-7 text-primary" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0 pr-2">
                          <Link to={`/nos-produits/${product.id}`} className="hover:text-primary transition-colors">
                            <CardTitle className="text-lg font-heading font-bold text-foreground leading-snug line-clamp-2">
                              {product.name}
                            </CardTitle>
                          </Link>
                          <p className="text-xs font-mono text-muted-foreground truncate mt-1">
                            {product.packageName}
                          </p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {product.description}
                      </CardDescription>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-[11px] font-normal px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>

                  {/* Actions Bar */}
                  <div className="p-6 pt-3 border-t border-border/50 mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto rounded-full text-xs font-medium"
                      asChild
                    >
                      <Link to={`/nos-produits/${product.id}`}>
                        Présentation complète
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                      </Link>
                    </Button>

                    <Button
                      size="sm"
                      className="w-full sm:w-auto rounded-full gap-2 text-xs font-medium"
                      asChild
                    >
                      <a
                        href={product.playStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Voir ${product.name} sur Google Play`}
                      >
                        <span>Google Play</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="max-w-md mx-auto text-center py-20">
              <Smartphone className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="font-heading text-lg font-bold mb-2">
                Aucune application trouvée
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Aucun produit ne correspond à votre recherche. Essayez un autre mot-clé ou réinitialisez les filtres.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="rounded-full"
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Lightbox / Modal for Preview */}
      {previewImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setPreviewImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-card border border-border rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center px-4 py-2 border-b border-border mb-2">
              <h3 className="font-heading font-bold text-foreground truncate">{previewImage.title}</h3>
              <Button variant="ghost" size="sm" onClick={() => setPreviewImage(null)} className="rounded-full">
                Fermer
              </Button>
            </div>
            <div className="overflow-auto max-h-[75vh] flex justify-center">
              <img 
                src={previewImage.src} 
                alt={previewImage.title} 
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

export default ProductsPage;
