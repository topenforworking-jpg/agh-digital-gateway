import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  Briefcase, 
  Search, 
  ArrowRight, 
  MapPin, 
  Globe, 
  Laptop, 
  Clock, 
  Sparkles, 
  GraduationCap, 
  ChevronRight, 
  Home, 
  Users, 
  CheckCircle2,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { jobs, Job } from "@/data/jobs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const CareersPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const locale = i18n.language === "fr" ? "fr_FR" : "en_US";

  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "internship" | "fulltime">("all");

  const filteredPositions = jobs.filter((position) => {
    const matchesSearch =
      position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      position.skills.some((skill) => skill.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesType =
      filterType === "all" ||
      (filterType === "internship" && position.type === "Stage (3 mois)") ||
      (filterType === "fulltime" && position.type === "Full-time");

    return matchesSearch && matchesType;
  });

  const internships = filteredPositions.filter((p) => p.type === "Stage (3 mois)");
  const fullTimeJobs = filteredPositions.filter((p) => p.type === "Full-time");

  const benefits = [
    {
      icon: Globe,
      title: "100% Télétravail (Remote First)",
      desc: "Travaillez depuis n'importe où dans le monde avec une organisation asynchrone flexible."
    },
    {
      icon: Laptop,
      title: "Politique BYOD",
      desc: "Utilisez vos propres équipements et outils logiciels préférés avec des allocations de matériel."
    },
    {
      icon: Sparkles,
      title: "Technologies d'Avant-Garde",
      desc: "Participez au développement de projets réels intégrant l'IA, Flutter, la Blockchain et le Web3."
    },
    {
      icon: GraduationCap,
      title: "Formation & Mentorat Continu",
      desc: "Accompagnement personnalisé par des développeurs et leads seniors expérimentés."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Carrières & Recrutement - AGH Data Agency Holding SA"
        description="Rejoignez notre équipe 100% remote. Découvrez nos 14 offres d'emploi et stages de pré-embauche en développement mobile Flutter, IA, Backend Django, Cybersécurité et Marketing."
        keywords="recrutement remote, offres d'emploi flutter, stage développement web, télétravail IT, AGH Data Agency, carrières tech"
        locale={locale}
      />
      <Navigation />

      <main className="flex-1 pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <Home className="h-4 w-4" /> Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Carrières</span>
          </nav>

          {/* Hero Banner */}
          <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Users className="h-4 w-4" />
              Rejoignez une équipe mondiale
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Construisez votre Carrière chez AGH
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nous recrutons des talents passionnés pour relever des défis technologiques passionnants. Travaillez en 100% remote sur des applications mobiles innovantes et des plateformes de nouvelle génération.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-3xl mx-auto">
              <div className="p-4 rounded-2xl bg-card border border-border">
                <div className="text-2xl sm:text-3xl font-bold text-primary">14</div>
                <div className="text-xs text-muted-foreground mt-1">Postes Ouverts</div>
              </div>
              <div className="p-4 rounded-2xl bg-card border border-border">
                <div className="text-2xl sm:text-3xl font-bold text-primary">100%</div>
                <div className="text-xs text-muted-foreground mt-1">Remote First</div>
              </div>
              <div className="p-4 rounded-2xl bg-card border border-border">
                <div className="text-2xl sm:text-3xl font-bold text-primary">200+</div>
                <div className="text-xs text-muted-foreground mt-1">Collaborateurs</div>
              </div>
              <div className="p-4 rounded-2xl bg-card border border-border">
                <div className="text-2xl sm:text-3xl font-bold text-primary">BYOD</div>
                <div className="text-xs text-muted-foreground mt-1">Équipement Libre</div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-20">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
                Pourquoi travailler avec nous ?
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 space-y-3"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading font-bold text-base text-foreground">{b.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Search & Filter Section */}
          <div className="max-w-4xl mx-auto mb-12 space-y-4">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl font-bold text-foreground">
                Toutes nos Offres d'Emploi & Stages
              </h2>
              <p className="text-muted-foreground text-sm mt-2">
                Filtrez par type de contrat ou recherchez par compétence.
              </p>
            </div>

            <Tabs 
              value={filterType} 
              onValueChange={(v) => setFilterType(v as typeof filterType)} 
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 h-12 rounded-2xl">
                <TabsTrigger value="all" className="rounded-xl font-medium">
                  Tous les Postes ({jobs.length})
                </TabsTrigger>
                <TabsTrigger value="internship" className="rounded-xl font-medium">
                  Stages de pré-embauche ({jobs.filter(j => j.type === "Stage (3 mois)").length})
                </TabsTrigger>
                <TabsTrigger value="fulltime" className="rounded-xl font-medium">
                  Postes Temps Plein ({jobs.filter(j => j.type === "Full-time").length})
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="relative pt-2">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher un poste par titre, compétence (Flutter, Django, UI/UX, etc.)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-base rounded-2xl bg-card border-border shadow-sm"
              />
            </div>
          </div>

          {/* Jobs Listing */}
          <div className="space-y-16">
            
            {/* Internships */}
            {(filterType === "all" || filterType === "internship") && internships.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      Stages de Pré-Embauche (3 Mois)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Formation pratique encadrée avec possibilité concrète de recrutement en CDI.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {internships.map((job) => (
                    <Card 
                      key={job.id} 
                      className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card flex flex-col justify-between rounded-2xl"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <CardTitle className="text-lg font-heading font-bold">{job.title}</CardTitle>
                          <Badge variant="secondary" className="shrink-0 text-xs">
                            {job.type}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm leading-relaxed">
                          {job.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-xs font-medium mb-2 text-muted-foreground">Compétences recherchées :</p>
                          <div className="flex flex-wrap gap-1.5">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-primary" /> {job.location} (100% Télétravail)
                          </span>
                          <Button 
                            size="sm" 
                            className="rounded-full gap-1.5"
                            onClick={() => navigate(`/jobs/${job.id}`)}
                          >
                            Postuler <ArrowRight className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Full-time */}
            {(filterType === "all" || filterType === "fulltime") && fullTimeJobs.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-border pb-4">
                  <Briefcase className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      Postes à Temps Plein (CDI / Contrat Remote)
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Postes seniors et spécialistes pour conduire nos projets phares.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {fullTimeJobs.map((job) => (
                    <Card 
                      key={job.id} 
                      className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card flex flex-col justify-between rounded-2xl"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 mb-2">
                          <CardTitle className="text-lg font-heading font-bold">{job.title}</CardTitle>
                          <Badge variant="default" className="shrink-0 text-xs">
                            {job.type}
                          </Badge>
                        </div>
                        <CardDescription className="text-sm leading-relaxed">
                          {job.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div>
                          <p className="text-xs font-medium mb-2 text-muted-foreground">Compétences recherchées :</p>
                          <div className="flex flex-wrap gap-1.5">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-border">
                          <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                            <MapPin className="h-3.5 w-3.5 text-primary" /> {job.location} (100% Télétravail)
                          </span>
                          <Button 
                            size="sm" 
                            className="rounded-full gap-1.5"
                            onClick={() => navigate(`/jobs/${job.id}`)}
                          >
                            Postuler <ArrowRight className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Empty state */}
            {filteredPositions.length === 0 && (
              <div className="max-w-md mx-auto text-center py-16">
                <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="font-heading text-lg font-bold mb-2">
                  Aucun poste ne correspond à votre recherche
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Essayez d'autres mots-clés ou consultez l'ensemble des offres.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setFilterType("all");
                  }}
                  className="rounded-full"
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}

          </div>

          {/* Spontaneous Application Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-card border border-border text-center max-w-4xl mx-auto space-y-6">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Vous ne trouvez pas le poste correspondant exactement à votre profil ?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous sommes constamment en quête de talents passionnés par le mobile, l'IA et le développement logiciel. Envoyez-nous une candidature spontanée !
            </p>
            <Button 
              size="lg" 
              className="rounded-full px-8 gap-2"
              onClick={() => {
                navigate("/#contact");
              }}
            >
              <Send className="h-4 w-4" />
              Envoyer une candidature spontanée
            </Button>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;
