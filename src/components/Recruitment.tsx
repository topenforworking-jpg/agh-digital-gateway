import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { jobs, Job } from "@/data/jobs";

const Recruitment = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "internship" | "fulltime">("all");

  // Filter positions based on search and type
  const filteredPositions = jobs.filter(position => {
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

  const handleViewDetails = (jobId: number) => {
    navigate(`/jobs/${jobId}`);
  };

  const renderPositionCard = (position: Job, index: number) => (
    <Card
      key={position.id}
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
              onClick={() => handleViewDetails(position.id)}
              className="rounded-full group"
            >
              {t('recruitment.apply')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
