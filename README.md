# AGH Data Agency Holding SA

Site web corporatif pour AGH Data Agency Holding SA - Solutions digitales innovantes et technologies de nouvelle génération.

## 🚀 À propos

AGH Data Agency est une entreprise de services IT et consulting spécialisée dans:
- **Développement d'applications mobiles** (Flutter, Django, LLM)
- **Cybersécurité & Blockchain**
- **Marketing Digital**
- **Services de Call Center**

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
├── components/          # Composants React
│   ├── Navigation.tsx   # Barre de navigation
│   ├── Hero.tsx         # Section hero
│   ├── Expertise.tsx    # Services offerts
│   ├── Recruitment.tsx  # Postes ouverts
│   ├── RemoteCulture.tsx # Culture remote
│   ├── Contact.tsx      # Formulaire de contact
│   └── Footer.tsx       # Pied de page
├── pages/
│   ├── Index.tsx        # Page principale
│   └── NotFound.tsx     # Page 404
├── index.css            # Styles globaux et design system
└── main.tsx             # Point d'entrée

public/
└── logo.jpg             # Logo de l'entreprise
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
- ✅ Section recrutement avec liens externes
- ✅ SEO optimisé
- ✅ Performance optimisée (<3s)
- ✅ Accessible WCAG 2.1 AA

## 🤝 Contribuer

Les contributions sont les bienvenues! Pour contribuer:

1. Fork le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Commit vos changements (`git commit -m 'Ajout de fonctionnalité'`)
4. Push vers la branche (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

## 📄 License

© 2025 AGH Data Agency Holding SA. Tous droits réservés.
