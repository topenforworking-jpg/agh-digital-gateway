import { useState, useEffect } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [marketeurId, setMarketeurId] = useState("direct");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check for ?m= parameter in URL
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const mParam = urlParams.get("m");
    if (mParam) {
      setMarketeurId(mParam);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formDataToSend = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Have questions? Want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <Mail className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-heading text-lg font-bold mb-2">Email Us</h3>
                <a
                  href="mailto:agh.dataagencyholdingsa@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  agh.dataagencyholdingsa@gmail.com
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-muted/50">
                <h3 className="font-heading text-lg font-bold mb-3">Company Information</h3>
                <dl className="space-y-2 text-sm">
                  <div>
                    <dt className="text-muted-foreground inline">Company:</dt>
                    <dd className="inline ml-2 font-medium">AGH Data Agency Holding SA</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground inline">Industry:</dt>
                    <dd className="inline ml-2 font-medium">IT Services & Consulting</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground inline">Size:</dt>
                    <dd className="inline ml-2 font-medium">201-500 employees</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground inline">Work Model:</dt>
                    <dd className="inline ml-2 font-medium">Remote First, BYOD</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Contact Form */}
            <form 
              name="landing-pages-leads"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="landing-pages-leads" />
              <input type="hidden" name="marketeur_id" value={marketeurId} />
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-destructive">*</span>
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="rounded-lg"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="rounded-lg resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
