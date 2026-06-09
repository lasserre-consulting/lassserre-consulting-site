# Arnaud Lasserre — Site de consulting

Site vitrine d'Arnaud Lasserre, consultant freelance Fullstack Senior & Tech Lead Java / Angular.

## Stack technique

| Couche | Technologie |
|--------|-------------|
| **Framework** | Angular 21 (standalone components) |
| **Styles** | CSS natif + Google Fonts (Playfair Display, DM Sans) |
| **Conteneurisation** | Docker + nginx |
| **CI/CD** | Jenkins |

## Fonctionnalités

- Page one-page avec navigation par ancres (`#expertise`, `#contact`)
- Section héro animée (blobs, particules, disponibilité)
- Présentation de l'expertise avec cards interactives
- Stack technique avec filtres
- Section à propos avec parcours
- Formulaire de contact via `mailto:`
- SEO : meta description, Open Graph, Twitter Card, sitemap, robots.txt
- PWA : manifest.webmanifest, apple-touch-icon, theme-color

## Lancement local

```bash
npm install
npm start

# Angular dev server → http://localhost:4200
```

## Build & Docker

```bash
# Build Docker (nginx)
docker compose up --build

# Accès → http://localhost:4200
```

## Déploiement (Jenkins)

Le `Jenkinsfile` exécute :
1. `git pull origin main` — mise à jour du code sur le VPS
2. `npm ci && npx ng build --configuration production` — build Angular
3. Copie du `dist/` vers `/var/www/lasserre-consulting-site/`
4. Servi par nginx sur `https://www.lasserre-consulting.fr`

## Structure

```
lasserre-consulting-site/
├── src/
│   ├── app/
│   │   ├── pages/home/          # Page principale (orchestrateur)
│   │   ├── components/
│   │   │   ├── presentation/    # Section héro animée
│   │   │   ├── expertise/       # Cards d'expertise
│   │   │   ├── stack/           # Stack technique
│   │   │   ├── about/           # À propos
│   │   │   └── contact/         # Formulaire contact
│   │   └── shared/
│   │       └── safe-html.pipe   # Pipe DomSanitizer (icons SVG inline)
│   └── index.html               # SEO / OG / PWA meta tags
├── public/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── manifest.webmanifest
│   ├── images/profil.png
│   ├── pdf/dossier-competence.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── nginx.conf                   # Security headers CSP, X-Frame, etc.
├── Dockerfile                   # Build + nginx:alpine
├── docker-compose.yml
└── Jenkinsfile
```

## Sécurité nginx

Headers configurés dans `nginx.conf` :
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `Content-Security-Policy` — sources explicites (fonts, images, scripts)
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — caméra/micro/géoloc désactivés
