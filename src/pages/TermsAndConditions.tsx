import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsAndConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("common.backToHome", "Back to Home")}
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-foreground">
          {t("legal.termsTitle", "Terms and Conditions")}
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. {t("legal.acceptance", "Acceptance of Terms")}
            </h2>
            <p>
              By accessing and using the services of AGH Data Agency Holding SA, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. {t("legal.services", "Services")}
            </h2>
            <p>
              AGH Data Agency Holding SA provides digital solutions including mobile app development, cybersecurity, blockchain solutions, digital marketing, and call center services. We reserve the right to modify, suspend, or discontinue any service at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. {t("legal.userObligations", "User Obligations")}
            </h2>
            <p>
              Users agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. {t("legal.intellectualProperty", "Intellectual Property")}
            </h2>
            <p>
              All content, trademarks, and intellectual property on this website are owned by AGH Data Agency Holding SA. You may not reproduce, distribute, or create derivative works without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. {t("legal.limitation", "Limitation of Liability")}
            </h2>
            <p>
              AGH Data Agency Holding SA shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. {t("legal.privacy", "Privacy")}
            </h2>
            <p>
              Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to understand our practices regarding your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. {t("legal.modifications", "Modifications")}
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. {t("legal.contact", "Contact")}
            </h2>
            <p>
              For any questions regarding these terms, please contact us at:{" "}
              <a href="mailto:agh.dataagencyholdingsa@gmail.com" className="text-primary hover:underline">
                agh.dataagencyholdingsa@gmail.com
              </a>
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-12">
            {t("legal.lastUpdated", "Last updated")}: {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
