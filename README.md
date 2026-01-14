# AGH Data Agency Holding SA

Site web corporatif pour AGH Data Agency Holding SA - Solutions digitales innovantes et technologies de nouvelle génération.

## 🚀 À propos

AGH Data Agency est une entreprise de services IT et consulting spécialisée dans:
- **Développement d'applications mobiles** (Flutter, Django, LLM)
- **Cybersécurité & Blockchain**
- **Marketing Digital**

**Modèle de travail:** Remote First avec politique BYOD (Bring Your Own Device)
**Taille:** 201-500 employés

## 📧 Contact

Email: agh.dataagencyholdingsa@gmail.com

## 🛠️ Technologies utilisées

- **React 18** avec TypeScript
- **Vite** pour le build ultra-rapide
- **Tailwind CSS** pour le design responsive
- **shadcn/ui** pour les composants UI
- **Lucide React** pour les icônes
- **i18next** pour l'internationalisation (FR/EN)
- **React Router** pour la navigation

## 🌐 Internationalisation

Le site est disponible en **français** et **anglais** avec détection automatique de la langue du navigateur. Les utilisateurs peuvent changer de langue via le sélecteur dans la navigation.

## 🔒 Conformité RGPD

- **Bandeau de cookies** : Consentement utilisateur requis avant l'utilisation de cookies non essentiels
- **Politique de confidentialité** : Page dédiée (`/privacy-policy`) détaillant la collecte et le traitement des données
- **Conditions générales** : Page dédiée (`/terms-and-conditions`)

## 🚀 Installation et développement local

### Prérequis
- Node.js 18+ et npm

### Installation

```bash
# Cloner le repository
git clone <YOUR_GIT_URL>

# Naviguer dans le dossier
cd <YOUR_PROJECT_NAME>

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:8080`

## 📦 Build et déploiement

### Build de production

```bash
npm run build
```

Les fichiers compilés seront dans le dossier `dist/`

### Déploiement sur Netlify

Le projet est configuré pour un déploiement automatique sur Netlify:

1. Connectez votre repository GitHub à Netlify
2. La configuration dans `netlify.toml` sera automatiquement détectée
3. Chaque push sur la branche principale déclenche un nouveau déploiement

**Configuration Netlify:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18

### Déploiement manuel

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Build du projet
npm run build

# Déployer
netlify deploy --prod
```

## 📂 Structure du projet

```
src/
├── components/           # Composants React
│   ├── Navigation.tsx    # Barre de navigation
│   ├── Hero.tsx          # Section hero
│   ├── Expertise.tsx     # Services offerts
│   ├── Recruitment.tsx   # Liste des postes ouverts
│   ├── RemoteCulture.tsx # Culture remote
│   ├── Contact.tsx       # Formulaire de contact
│   ├── Footer.tsx        # Pied de page
│   ├── CookieConsent.tsx # Bandeau cookies RGPD
│   ├── SEO.tsx           # Composant SEO réutilisable
│   └── LanguageSwitcher.tsx # Sélecteur de langue
├── data/
│   └── jobs.ts           # Données centralisées des offres d'emploi
├── pages/
│   ├── Index.tsx         # Page principale
│   ├── JobDetail.tsx     # Page détail d'une offre d'emploi
│   ├── PrivacyPolicy.tsx # Politique de confidentialité
│   ├── TermsAndConditions.tsx # CGU
│   └── NotFound.tsx      # Page 404
├── i18n/
│   ├── config.ts         # Configuration i18next
│   └── locales/
│       ├── en.json       # Traductions anglaises
│       └── fr.json       # Traductions françaises
├── hooks/
│   └── useScrollAnimation.ts # Hook d'animation au scroll
├── index.css             # Styles globaux et design system
└── main.tsx              # Point d'entrée

public/
├── logo.jpg              # Logo de l'entreprise
├── sitemap.xml           # Sitemap pour SEO
└── robots.txt            # Configuration crawlers
```

## 🎨 Design System

Le projet utilise un design system cohérent avec:
- Palette de couleurs professionnelle (bleu, gris, vert)
- Mode sombre/clair avec détection automatique
- Typographie: Inter (titres) et Poppins (corps)
- Composants accessibles WCAG 2.1 AA

## 🔧 Scripts disponibles

- `npm run dev` - Lancer le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Preview du build
- `npm run lint` - Linter le code

## 📱 Fonctionnalités

- ✅ Design responsive mobile-first
- ✅ Mode sombre/clair
- ✅ Navigation smooth scroll
- ✅ Formulaire de contact avec validation
- ✅ Section recrutement avec pages détaillées (`/jobs/:id`)
- ✅ SEO optimisé (meta tags, Open Graph, JSON-LD, sitemap.xml)
- ✅ Performance optimisée (<3s)
- ✅ Accessible WCAG 2.1 AA
- ✅ Multilingue (FR/EN)
- ✅ Bandeau cookies RGPD
- ✅ Pages légales (CGU, Politique de confidentialité)

## 🗺️ Routes disponibles

| Route | Description |
|-------|-------------|
| `/` | Page d'accueil |
| `/jobs/:id` | Détail d'une offre d'emploi (1-14) |
| `/terms-and-conditions` | Conditions générales d'utilisation |
| `/privacy-policy` | Politique de confidentialité |

## 🤝 Contribuer

Les contributions sont les bienvenues! Pour contribuer:

1. Fork le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout de fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

## 📄 License

© 2025 AGH Data Agency Holding SA. Tous droits réservés.
