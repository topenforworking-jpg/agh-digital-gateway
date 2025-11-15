import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Recruitment = () => {
  const positions = [
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
    {
      title: "Stagiaire Designer UI/UX",
      description: "Participer à la conception d'interfaces utilisateur modernes. Collaborer avec l'équipe produit pour créer des expériences utilisateur optimales.",
      skills: ["Figma", "Adobe XD", "Prototypage", "Design Thinking", "User Research"],
      type: "Stage (3 mois)",
      location: "Remote",
      formUrl: "", // À remplir avec le lien Google Form
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
      formUrl: "", // À remplir avec le lien Google Form
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
  ];

  const handleApply = (formUrl: string) => {
    if (formUrl) {
      window.open(formUrl, "_blank", "noopener,noreferrer");
    } else {
      // Fallback si le lien n'est pas configuré
      alert("Le formulaire de candidature pour ce poste sera bientôt disponible. Contactez-nous à agh.dataagencyholdingsa@gmail.com");
    }
  };

  return (
    <section id="careers" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge className="mb-4" variant="outline">
            We're Hiring
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Join Our Remote-First Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Work from anywhere • BYOD policy • Cutting-edge projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {positions.map((position, index) => (
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
                      Postuler
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Don't see the right position? We're always looking for talented individuals.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              const element = document.querySelector("#contact");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-full"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
