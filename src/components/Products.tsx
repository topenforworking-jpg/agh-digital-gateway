import { useState } from "react";
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
  Image as ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products, Product } from "@/data/products";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

const Products = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();
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
    { id: "all", label: t("products.categories.all", "Toutes les Apps") },
    { id: "health", label: t("products.categories.health", "Santé & Fitness") },
    { id: "beauty", label: t("products.categories.beauty", "Beauté & Mode") },
    { id: "food", label: t("products.categories.food", "Cuisine & Recettes") },
    { id: "spiritual", label: t("products.categories.spiritual", "Spiritualité") },
    { id: "education", label: t("products.categories.education", "Éducation & Jeux") },
    { id: "lifestyle", label: t("products.categories.lifestyle", "Lifestyle & Déco") },
    { id: "business", label: t("products.categories.business", "Business") },
  ];

  return (
    <section id="products" className="py-20 md:py-32 bg-muted/20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            {t("products.badge", "Notre Écosystème Mobile")}
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t("products.title", "Nos Applications & Produits")}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t(
              "products.subtitle",
              "Découvrez notre suite d'applications mobiles innovantes propulsées par l'Intelligence Artificielle, la Réalité Augmentée et conçues pour fonctionner 100% hors ligne."
            )}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-5xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t(
                "products.searchPlaceholder",
                "Rechercher une application par nom, package (ex: com.bilgassimel.*) ou technologie..."
              )}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 text-base rounded-2xl bg-card border-border shadow-sm"
            />
          </div>

          {/* Category Tabs */}
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
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2 text-sm font-medium border border-border bg-card transition-all"
                  >
                    <IconComponent className="h-4 w-4 mr-2" />
                    {category.label}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>

        {/* Count summary */}
        <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center text-sm text-muted-foreground">
          <span>
            {t("products.showingCount", "Affichage de")} <strong>{filteredProducts.length}</strong> {t("products.appsCount", "applications")}
          </span>
          <span className="inline-flex items-center gap-1">
            <Zap className="h-4 w-4 text-primary" />
            {t("products.offlineBadge", "100% Offline & AR Ready")}
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProducts.map((product, index) => {
            const CategoryIcon = categoryIcons[product.category] || Smartphone;
            return (
              <Card
                key={product.id}
                className="group relative flex flex-col justify-between hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 bg-card/90 backdrop-blur rounded-2xl overflow-hidden border-border"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {product.featured && (
                  <div className="absolute top-0 right-0 z-20">
                    <span className="bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm">
                      Featured
                    </span>
                  </div>
                )}

                {/* Optional Preview image header */}
                {product.preview && (
                  <div 
                    className="relative h-44 w-full overflow-hidden bg-muted cursor-pointer group/img border-b border-border/40"
                    onClick={() => setPreviewImage({ title: product.name, src: product.preview })}
                  >
                    <img
                      src={product.preview}
                      alt={`${product.name} screenshot`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity flex items-end p-3">
                      <span className="text-white text-xs font-medium flex items-center gap-1.5 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                        <ImageIcon className="h-3 w-3" /> Agrandir l'aperçu
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
                        <CardTitle className="text-lg font-heading font-bold text-foreground leading-snug line-clamp-2">
                          {product.name}
                        </CardTitle>
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

                <div className="p-6 pt-3 border-t border-border/50 mt-4 flex items-center justify-between">
                  <Badge variant="outline" className="text-xs text-muted-foreground">
                    {product.categoryLabel}
                  </Badge>

                  <Button
                    size="sm"
                    className="rounded-full gap-2 group/btn"
                    asChild
                  >
                    <a
                      href={product.playStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Voir ${product.name} sur Google Play`}
                    >
                      <span>Google Play</span>
                      <ExternalLink className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="max-w-md mx-auto text-center py-16">
            <Smartphone className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="font-heading text-lg font-bold mb-2">
              {t("products.noResultsTitle", "Aucune application trouvée")}
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              {t(
                "products.noResultsDesc",
                "Aucun produit ne correspond à votre recherche. Essayez un autre terme ou réinitialisez les filtres."
              )}
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="rounded-full"
            >
              {t("products.resetFilters", "Réinitialiser les filtres")}
            </Button>
          </div>
        )}

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
      </div>
    </section>
  );
};

export default Products;
