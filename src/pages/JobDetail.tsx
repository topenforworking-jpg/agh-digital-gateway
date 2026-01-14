import { useParams, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, MapPin, Clock, Briefcase, Calendar, Building2, FolderOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getJobById } from "@/data/jobs";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  
  const job = getJobById(Number(id));
  const locale = i18n.language === "fr" ? "fr_FR" : "en_US";

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Offre non trouvée</h1>
            <Button onClick={() => navigate("/")} variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isInternship = job.type === "Stage (3 mois)";
  const jobTypeLabel = isInternship ? "Offre de Stage" : "Offre d'Emploi";

  const handleApply = () => {
    if (job.formUrl) {
      window.open(job.formUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("Le formulaire de candidature pour ce poste sera bientôt disponible. Contactez-nous à agh.dataagencyholdingsa@gmail.com");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`${job.title} - AGH Data Agency Holding SA`}
        description={job.description}
        keywords={job.skills.join(", ")}
        locale={locale}
      />
      <Navigation />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/#careers")}
            className="mb-8 -ml-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux offres
          </Button>

          {/* Header */}
          <div className="mb-8">
            <Badge 
              variant={isInternship ? "secondary" : "default"} 
              className="mb-4 text-sm"
            >
              {jobTypeLabel}
            </Badge>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              {job.title}
            </h1>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {job.skills.map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Job Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Building2 className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Entreprise</p>
                  <p className="text-sm font-medium">{job.companyName}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <FolderOpen className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Projet</p>
                  <p className="text-sm font-medium">{job.project}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Lieu</p>
                  <p className="text-sm font-medium">{job.location}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="text-xs text-muted-foreground">Type</p>
                  <p className="text-sm font-medium">{job.type}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Availability */}
          <Card className="mb-8">
            <CardContent className="p-4 flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Disponibilité</p>
                <p className="text-sm font-medium">{job.availability}</p>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* Company Description */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              À propos de l'entreprise
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {job.companyDescription}
            </p>
          </section>

          {/* Job Description */}
          <section className="mb-10">
            <h2 className="font-heading text-2xl font-bold mb-4 flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              Description du poste
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {job.jobDescription}
            </p>
          </section>

          <Separator className="my-8" />

          {/* Apply CTA */}
          <div className="text-center py-8">
            <h3 className="font-heading text-xl font-bold mb-4">
              Intéressé(e) par ce poste ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Rejoignez notre équipe et participez à des projets innovants dans un environnement 100% remote.
            </p>
            <Button 
              size="lg" 
              onClick={handleApply}
              className="rounded-full text-lg px-8"
            >
              Continuer à postuler
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetail;
