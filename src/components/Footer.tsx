import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-heading font-bold text-xl mb-4">
              AGH<span className="text-primary">.</span>
            </h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Innovative Digital Solutions & Next-Gen Technology. Building the future with cutting-edge mobile apps, cybersecurity, blockchain, and more.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:agh.dataagencyholdingsa@gmail.com"
                className="hover:text-primary transition-colors"
              >
                agh.dataagencyholdingsa@gmail.com
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#expertise"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Expertise
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#culture"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Culture
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mobile Apps</li>
              <li>Cybersecurity</li>
              <li>Blockchain</li>
              <li>Digital Marketing</li>
              <li>Call Center</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} AGH Data Agency Holding SA. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link 
              to="/terms-and-conditions" 
              className="hover:text-primary transition-colors"
            >
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link 
              to="/privacy-policy" 
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <span>Remote First • BYOD Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
