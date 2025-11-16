import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToCareers = () => {
    const element = document.querySelector("#careers");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now Hiring: Remote-First Positions
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            AGH DATA AGENCY
            <br />
            <span className="text-primary">HOLDING SA</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-8">
            Innovative Digital Solutions & Next-Gen Technology
          </p>

          {/* Value Proposition */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 text-sm sm:text-base">
            {["Mobile Apps", "Cybersecurity", "Blockchain", "Digital Marketing", "Call Center"].map((service) => (
              <span
                key={service}
                className="px-4 py-2 rounded-full bg-card border border-border text-foreground font-medium"
              >
                {service}
              </span>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={scrollToCareers}
            className="rounded-full text-base px-8 h-12 group"
          >
            Join Our Remote Team
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-2">201-500</div>
              <div className="text-sm text-muted-foreground">Employees</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Remote</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-2">BYOD</div>
              <div className="text-sm text-muted-foreground">Policy</div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  );
};

export default Hero;
