import { Smartphone, Shield, Database, Megaphone, Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Expertise = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Smartphone,
      title: t('expertise.services.mobile.title'),
      description: t('expertise.services.mobile.description'),
      technologies: ["Flutter", "Django", "LLM/AI"],
    },
    {
      icon: Shield,
      title: t('expertise.services.security.title'),
      description: t('expertise.services.security.description'),
      technologies: ["Smart Contracts", "Security Audits", "DeFi"],
    },
    {
      icon: Database,
      title: t('expertise.services.backend.title'),
      description: t('expertise.services.backend.description'),
      technologies: ["Django", "REST APIs", "Cloud"],
    },
    {
      icon: Megaphone,
      title: t('expertise.services.marketing.title'),
      description: t('expertise.services.marketing.description'),
      technologies: ["SEO", "Analytics", "Campaigns"],
    },
    {
      icon: Headphones,
      title: t('expertise.services.callcenter.title'),
      description: t('expertise.services.callcenter.description'),
      technologies: ["Support", "CRM", "Multilingual"],
    },
  ];

  return (
    <section id="expertise" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            {t('expertise.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('expertise.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300 -z-10"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
