import { ExternalLink, Search } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Recruitment = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "internship" | "fulltime">("all");

  const positions = [
    {
      title: "Stagiaire Designer UI/UX",
      description: "Participer à la conception d'interfaces utilisateur modernes. Collaborer avec l'équipe produit pour créer des expériences utilisateur optimales.",
      skills: ["Figma", "Adobe XD", "Prototypage", "Design Thinking", "User Research"],
      type: "Stage (3 mois)",
      location: "Remote",
      formUrl: "https://forms.gle/FSdfQukMnZdM6Zm78", // À remplir avec le lien Google Form
    },
    {
      title: "Stagiaire Développeur Flutter",
      description: "Développer des applications mobiles cross-platform sous supervision. Apprendre les meilleures pratiques de développement mobile.",
      skills: ["Flutter", "Dart", "Mobile Development", "Git", "API Integration"],
      type: "Stage (3 mois)",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
    },
    {
      title: "Stagiaire Développeur Odoo",
      description: "Participer au développement et personnalisation de modules Odoo. Découvrir l'écosystème ERP et les solutions d'entreprise.",
      skills: ["Python", "Odoo", "PostgreSQL", "XML", "JavaScript"],
      type: "Stage (3 mois)",
      location: "Remote",
      formUrl: "https://forms.gle/h1dEAtJQhAFwn7518", // À remplir avec le lien Google Form
    },
    {
      title: "Stagiaire Assistant RH",
      description: "Assister l'équipe RH dans le recrutement et la gestion administrative. Participer aux processus d'onboarding et de formation.",
      skills: ["Communication", "Organisation", "MS Office", "Recrutement", "Gestion administrative"],
      type: "Stage (3 mois)",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
    },
    {
      title: "Stagiaire Assistant Administratif Direction",
      description: "Soutenir la direction dans les tâches administratives quotidiennes. Gérer les communications et la documentation interne.",
      skills: ["Organisation", "Communication", "MS Office", "Gestion documentaire", "Discrétion"],
      type: "Stage (3 mois)",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
    },
    {
      title: "Stagiaire Mobile Growth Analyst / Data Analyst",
      description: "Analyser les données de croissance mobile et les métriques utilisateur. Créer des rapports et identifier des opportunités d'amélioration.",
      skills: ["Google Analytics", "Excel", "Data Visualization", "SQL", "Mobile Analytics"],
      type: "Stage (3 mois)",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
    },
    {
      title: "Stagiaire Campaign Manager",
      description: "Assister dans la création et gestion de campagnes marketing digitales. Suivre les performances et optimiser les résultats.",
      skills: ["Marketing Digital", "Google Ads", "Social Media", "Analytics", "Copywriting"],
      type: "Stage (3 mois)",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
    },
    {
      title: "Stagiaire Rédacteur Web",
      description: "Créer du contenu optimisé SEO pour le web. Rédiger des articles, pages produits et contenus marketing engageants.",
      skills: ["Rédaction", "SEO", "WordPress", "Content Marketing", "Storytelling"],
      type: "Stage (3 mois)",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
    },
        {
      title: "Senior Flutter Developer",
      description: "Build next-generation mobile applications with Flutter. Lead development of cross-platform solutions integrating AI/ML capabilities.",
      skills: ["Flutter", "Dart", "Firebase", "REST APIs", "Mobile UI/UX"],
      type: "Full-time",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
    },
    {
      title: "Django Backend Engineer",
      description: "Design and implement scalable backend systems. Develop RESTful APIs and manage database architecture for enterprise applications.",
      skills: ["Django", "Python", "PostgreSQL", "Redis", "Docker"],
      type: "Full-time",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
    },
    {
      title: "LLM/AI Specialist",
      description: "Integrate cutting-edge AI models into production systems. Develop intelligent features using LLMs and implement ML pipelines.",
      skills: ["Python", "LLM Integration", "Machine Learning", "NLP", "TensorFlow"],
      type: "Full-time",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
    },
    {
      title: "Cybersecurity Analyst",
      description: "Protect enterprise infrastructure and conduct security audits. Implement security protocols and respond to threats proactively.",
      skills: ["Network Security", "Penetration Testing", "SIEM", "Compliance", "Threat Analysis"],
      type: "Full-time",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
    },
    {
      title: "Blockchain Smart Contract Developer",
      description: "Build and audit smart contracts for DeFi applications. Develop secure blockchain solutions on Ethereum and other platforms.",
      skills: ["Solidity", "Web3.js", "Ethereum", "DeFi", "Smart Contract Auditing"],
      type: "Full-time",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
    },
    {
      title: "Digital Marketing Strategist",
      description: "Drive digital campaigns and optimize marketing ROI. Leverage analytics to develop data-driven growth strategies.",
      skills: ["SEO/SEM", "Analytics", "Campaign Management", "Content Strategy", "A/B Testing"],
      type: "Full-time",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
    },
    {
      title: "Call Center Team Lead",
      description: "Lead customer support operations and manage multilingual teams. Implement quality assurance and optimize service delivery.",
      skills: ["Team Management", "CRM Systems", "Quality Assurance", "Training", "Multilingual"],
      type: "Full-time",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
    },
  ];

  const handleApply = (formUrl: string) => {
    if (formUrl) {
      window.open(formUrl, "_blank", "noopener,noreferrer");
    } else {
      // Fallback si le lien n'est pas configuré
      alert("Le formulaire de candidature pour ce poste sera bientôt disponible. Contactez-nous à agh.dataagencyholdingsa@gmail.com");
    }
  };

  // Filter positions based on search and type
  const filteredPositions = positions.filter(position => {
    const matchesSearch = position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         position.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         position.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesType = filterType === "all" || 
                       (filterType === "internship" && position.type === "Stage (3 mois)") ||
                       (filterType === "fulltime" && position.type === "Full-time");
    
    return matchesSearch && matchesType;
  });

  const internships = filteredPositions.filter(p => p.type === "Stage (3 mois)");
  const fullTimeJobs = filteredPositions.filter(p => p.type === "Full-time");

  const renderPositionCard = (position: typeof positions[0], index: number) => (
    <Card
      key={position.title}
      className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 animate-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4 mb-2">
          <CardTitle className="text-xl font-heading">{position.title}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {position.type}
          </Badge>
        </div>
        <CardDescription className="text-base">{position.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2 text-muted-foreground">Required Skills:</p>
            <div className="flex flex-wrap gap-2">
              {position.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="text-sm text-muted-foreground flex items-center gap-2">
              📍 {position.location}
            </span>
            <Button
              onClick={() => handleApply(position.formUrl)}
              className="rounded-full group"
            >
              {t('recruitment.apply')}
              <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="careers" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4" variant="outline">
            {t('recruitment.badge')}
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t('recruitment.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('recruitment.subtitle')}
          </p>
        </div>

        {/* Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <Tabs value={filterType} onValueChange={(v) => setFilterType(v as typeof filterType)} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">{t('recruitment.filter.all')}</TabsTrigger>
              <TabsTrigger value="internship">{t('recruitment.filter.internship')}</TabsTrigger>
              <TabsTrigger value="fulltime">{t('recruitment.filter.fulltime')}</TabsTrigger>
            </TabsList>
          </Tabs>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t('recruitment.filter.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Stages Section */}
        {(filterType === "all" || filterType === "internship") && internships.length > 0 && (
          <div className="max-w-6xl mx-auto mb-20">
            <div className="mb-8">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-2 text-center">
                {t('recruitment.internships.title')}
              </h3>
              <p className="text-center text-muted-foreground">
                {t('recruitment.internships.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {internships.map((position, index) => renderPositionCard(position, index))}
            </div>
          </div>
        )}

        {/* Full-time Positions Section */}
        {(filterType === "all" || filterType === "fulltime") && fullTimeJobs.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-2 text-center">
                {t('recruitment.fulltime.title')}
              </h3>
              <p className="text-center text-muted-foreground">
                {t('recruitment.fulltime.subtitle')}
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {fullTimeJobs.map((position, index) => renderPositionCard(position, index))}
            </div>
          </div>
        )}

        {/* No results message */}
        {filteredPositions.length === 0 && (
          <div className="max-w-2xl mx-auto text-center py-12">
            <p className="text-muted-foreground text-lg">
              Aucun poste ne correspond à votre recherche. Essayez d'autres mots-clés ou supprimez les filtres.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            {t('recruitment.cta.text')}
          </p>
          <Button
            variant="outline"
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-full"
          >
            {t('recruitment.cta.button')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
