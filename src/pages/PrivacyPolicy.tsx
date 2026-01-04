import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("common.backToHome", "Retour à l'accueil")}
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-8 text-foreground">
          {t("privacy.title", "Politique de Confidentialité")}
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-muted-foreground">
          
          {/* Table of Contents */}
          <nav className="bg-muted/50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {t("privacy.toc", "Table des matières")}
            </h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#identity" className="text-primary hover:underline">1. {t("privacy.sections.identity", "Identité du responsable")}</a></li>
              <li><a href="#data-collected" className="text-primary hover:underline">2. {t("privacy.sections.dataCollected", "Données collectées")}</a></li>
              <li><a href="#purpose" className="text-primary hover:underline">3. {t("privacy.sections.purpose", "Finalités du traitement")}</a></li>
              <li><a href="#legal-basis" className="text-primary hover:underline">4. {t("privacy.sections.legalBasis", "Base légale")}</a></li>
              <li><a href="#retention" className="text-primary hover:underline">5. {t("privacy.sections.retention", "Durée de conservation")}</a></li>
              <li><a href="#rights" className="text-primary hover:underline">6. {t("privacy.sections.rights", "Vos droits RGPD")}</a></li>
              <li><a href="#cookies" className="text-primary hover:underline">7. {t("privacy.sections.cookies", "Cookies")}</a></li>
              <li><a href="#security" className="text-primary hover:underline">8. {t("privacy.sections.security", "Sécurité des données")}</a></li>
              <li><a href="#contact" className="text-primary hover:underline">9. {t("privacy.sections.contact", "Contact")}</a></li>
            </ul>
          </nav>

          {/* 1. Identity */}
          <section id="identity">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. {t("privacy.identity.title", "Identité du responsable de traitement")}
            </h2>
            <p>{t("privacy.identity.content", "Le responsable du traitement des données personnelles est :")}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>{t("privacy.identity.company", "Société")} :</strong> AGH Data Agency Holding SA</li>
              <li><strong>{t("privacy.identity.email", "Email")} :</strong>{" "}
                <a href="mailto:agh.dataagencyholdingsa@gmail.com" className="text-primary hover:underline">
                  agh.dataagencyholdingsa@gmail.com
                </a>
              </li>
            </ul>
          </section>

          {/* 2. Data Collected */}
          <section id="data-collected">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. {t("privacy.dataCollected.title", "Données personnelles collectées")}
            </h2>
            <p>{t("privacy.dataCollected.intro", "Nous collectons les données suivantes :")}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>{t("privacy.dataCollected.contact", "Données de contact")} :</strong> {t("privacy.dataCollected.contactDesc", "nom, prénom, adresse email, numéro de téléphone")}</li>
              <li><strong>{t("privacy.dataCollected.navigation", "Données de navigation")} :</strong> {t("privacy.dataCollected.navigationDesc", "adresse IP, type de navigateur, pages visitées")}</li>
              <li><strong>{t("privacy.dataCollected.professional", "Données professionnelles")} :</strong> {t("privacy.dataCollected.professionalDesc", "CV, lettre de motivation (candidatures)")}</li>
            </ul>
          </section>

          {/* 3. Purpose */}
          <section id="purpose">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. {t("privacy.purpose.title", "Finalités du traitement")}
            </h2>
            <p>{t("privacy.purpose.intro", "Vos données sont utilisées pour :")}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>{t("privacy.purpose.contact", "Répondre à vos demandes de contact")}</li>
              <li>{t("privacy.purpose.recruitment", "Traiter vos candidatures")}</li>
              <li>{t("privacy.purpose.improve", "Améliorer nos services et notre site web")}</li>
              <li>{t("privacy.purpose.legal", "Respecter nos obligations légales")}</li>
            </ul>
          </section>

          {/* 4. Legal Basis */}
          <section id="legal-basis">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. {t("privacy.legalBasis.title", "Base légale du traitement")}
            </h2>
            <p>{t("privacy.legalBasis.content", "Le traitement de vos données repose sur :")}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>{t("privacy.legalBasis.consent", "Votre consentement")} :</strong> {t("privacy.legalBasis.consentDesc", "formulaire de contact, candidatures")}</li>
              <li><strong>{t("privacy.legalBasis.legitimate", "Notre intérêt légitime")} :</strong> {t("privacy.legalBasis.legitimateDesc", "amélioration des services, statistiques")}</li>
              <li><strong>{t("privacy.legalBasis.legal", "Obligation légale")} :</strong> {t("privacy.legalBasis.legalDesc", "conservation des données comptables")}</li>
            </ul>
          </section>

          {/* 5. Retention */}
          <section id="retention">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. {t("privacy.retention.title", "Durée de conservation")}
            </h2>
            <p>{t("privacy.retention.intro", "Vos données sont conservées pendant :")}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>{t("privacy.retention.contact", "Demandes de contact")} :</strong> {t("privacy.retention.contactDuration", "3 ans après le dernier contact")}</li>
              <li><strong>{t("privacy.retention.candidates", "Candidatures")} :</strong> {t("privacy.retention.candidatesDuration", "2 ans après réception")}</li>
              <li><strong>{t("privacy.retention.navigation", "Données de navigation")} :</strong> {t("privacy.retention.navigationDuration", "13 mois maximum")}</li>
            </ul>
          </section>

          {/* 6. Your Rights */}
          <section id="rights">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. {t("privacy.rights.title", "Vos droits (RGPD)")}
            </h2>
            <p>{t("privacy.rights.intro", "Conformément au RGPD, vous disposez des droits suivants :")}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>{t("privacy.rights.access", "Droit d'accès")} :</strong> {t("privacy.rights.accessDesc", "obtenir une copie de vos données")}</li>
              <li><strong>{t("privacy.rights.rectification", "Droit de rectification")} :</strong> {t("privacy.rights.rectificationDesc", "corriger vos données inexactes")}</li>
              <li><strong>{t("privacy.rights.erasure", "Droit à l'effacement")} :</strong> {t("privacy.rights.erasureDesc", "demander la suppression de vos données")}</li>
              <li><strong>{t("privacy.rights.portability", "Droit à la portabilité")} :</strong> {t("privacy.rights.portabilityDesc", "récupérer vos données dans un format structuré")}</li>
              <li><strong>{t("privacy.rights.opposition", "Droit d'opposition")} :</strong> {t("privacy.rights.oppositionDesc", "vous opposer au traitement de vos données")}</li>
              <li><strong>{t("privacy.rights.limitation", "Droit à la limitation")} :</strong> {t("privacy.rights.limitationDesc", "limiter le traitement de vos données")}</li>
            </ul>
            <p className="mt-4">
              {t("privacy.rights.exercise", "Pour exercer vos droits, contactez-nous à :")}{" "}
              <a href="mailto:agh.dataagencyholdingsa@gmail.com" className="text-primary hover:underline">
                agh.dataagencyholdingsa@gmail.com
              </a>
            </p>
            <p className="mt-2">
              {t("privacy.rights.complaint", "Vous pouvez également déposer une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés).")}
            </p>
          </section>

          {/* 7. Cookies */}
          <section id="cookies">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. {t("privacy.cookies.title", "Cookies")}
            </h2>
            <p>{t("privacy.cookies.intro", "Notre site utilise des cookies pour :")}</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>{t("privacy.cookies.essential", "Cookies essentiels")} :</strong> {t("privacy.cookies.essentialDesc", "fonctionnement du site")}</li>
              <li><strong>{t("privacy.cookies.analytics", "Cookies analytiques")} :</strong> {t("privacy.cookies.analyticsDesc", "mesure d'audience (anonymisée)")}</li>
            </ul>
            <p className="mt-4">{t("privacy.cookies.manage", "Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur.")}</p>
          </section>

          {/* 8. Security */}
          <section id="security">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. {t("privacy.security.title", "Sécurité des données")}
            </h2>
            <p>{t("privacy.security.content", "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.")}</p>
          </section>

          {/* 9. Contact */}
          <section id="contact">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              9. {t("privacy.contact.title", "Contact")}
            </h2>
            <p>
              {t("privacy.contact.content", "Pour toute question concernant cette politique de confidentialité, contactez-nous à :")}{" "}
              <a href="mailto:agh.dataagencyholdingsa@gmail.com" className="text-primary hover:underline">
                agh.dataagencyholdingsa@gmail.com
              </a>
            </p>
          </section>

          <p className="text-sm text-muted-foreground mt-12">
            {t("privacy.lastUpdated", "Dernière mise à jour")} : {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
