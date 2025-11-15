import { Globe, Laptop, Clock } from "lucide-react";

const RemoteCulture = () => {
  const benefits = [
    {
      icon: Globe,
      title: "100% Remote - Work From Anywhere",
      description: "Freedom to work from any location worldwide. Build your ideal workspace and lifestyle.",
    },
    {
      icon: Laptop,
      title: "BYOD (Bring Your Own Device) Policy",
      description: "Use your preferred tools and setup. We trust you to choose what works best for your productivity.",
    },
    {
      icon: Clock,
      title: "Flexible Hours - Global Team",
      description: "Asynchronous collaboration across time zones. Work when you're most productive and creative.",
    },
  ];

  return (
    <section id="culture" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Remote Work Culture
          </h2>
          <p className="text-lg text-muted-foreground">
            Built for the modern workforce. Flexible, autonomous, and globally connected.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-6 rounded-2xl bg-card border border-border">
                  <Icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16 p-8 rounded-2xl bg-card border border-border">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-lg font-bold mb-3">What We Offer</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Competitive compensation packages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Professional development opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Work with cutting-edge technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Global team collaboration</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold mb-3">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Innovation and continuous learning</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Autonomy and trust</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Quality over quantity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>Work-life balance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RemoteCulture;
