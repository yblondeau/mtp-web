# Marmier TP — site vitrine

Site vitrine pour Marmier TP (entreprise de travaux publics), construit avec [Astro](https://astro.build) et [Tailwind CSS](https://tailwindcss.com).

## Prérequis

- Node.js 20 (voir `.nvmrc` — avec [nvm](https://github.com/nvm-sh/nvm) : `nvm use`)

## Commandes

```bash
npm install       # installe les dépendances
npm run dev       # lance le serveur de développement (http://localhost:4321)
npm run build     # build de production dans dist/
npm run preview   # sert le build de production localement
npm run check     # vérifie les types TypeScript/Astro
```

## Structure du projet

```
src/
  assets/images/   images sources (optimisées automatiquement au build via astro:assets)
  components/      composants Astro réutilisables (Header, Hero, Services, Gallery, ...)
  layouts/         BaseLayout.astro — squelette HTML commun, meta SEO, footer
  lib/constants.ts contenu du site : coordonnées, activités (ACTIVITIES), textes
  pages/           une page = une route (index.astro, contact.astro)
  styles/          CSS global (globals.css)
public/            fichiers statiques servis tels quels (favicon, logos SVG, robots.txt)
```

Pour modifier les activités affichées sur la page d'accueil (titres, descriptions, sous-catégories, images), éditer `src/lib/constants.ts`.

## Formulaire de contact

Le formulaire (`src/pages/contact.astro`) envoie ses soumissions via [Web3Forms](https://web3forms.com). La clé d'accès (`access_key`) doit être renseignée dans le champ hidden correspondant — récupérable gratuitement sur web3forms.com.

## Déploiement

Le site est déployé automatiquement sur GitHub Pages via `.github/workflows/deploy.yml` à chaque push sur `main` (build + vérification des types + publication).

URL de production : https://yblondeau.github.io/mtp-web/
