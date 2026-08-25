import chantier1 from "../assets/images/chantier-1.jpg";
import chantier2 from "../assets/images/chantier-2.jpg";
import chantier3 from "../assets/images/chantier-3.jpg";
import chantier4 from "../assets/images/chantier-4.jpg";
import galleryTerrasse1 from "../assets/images/gallery/realisation-terrasse-dalles-1.jpg";
import galleryTerrasse2 from "../assets/images/gallery/realisation-terrasse-dalles-2.jpg";
import galleryCloture from "../assets/images/gallery/realisation-cloture.jpg";
import galleryBetonImprime from "../assets/images/gallery/realisation-beton-imprime.jpg";
import galleryEnrobe from "../assets/images/gallery/realisation-enrobe.jpg";

export const SITE = {
  name: "Marmier TP",
  description:
    "Entreprise de travaux publics : aménagements extérieurs, assainissement, terrassement, démolition & recyclage.",
  // Utiliser import.meta.env.BASE_URL partout pour éviter les erreurs de chemins
  base: import.meta.env.BASE_URL,
};

export const ACTIVITIES = [
  {
    key: "amenagements",
    title: "Aménagements extérieurs",
    desc: "Allées, cours, enrobés, pavages, bordures et aménagements paysagers minéraux.",
    img: chantier1,
    subs: ['Terrasse', 'Escalier', 'Pavés', 'Création paysagère'],
  },
  {
    key: "assainissement",
    title: "Assainissement",
    desc: "Réseaux EU/EP, fosses, micro-stations, raccordements et mises aux normes.",
    img: chantier2,
    subs: ['Mise en conformité', 'Réseaux secs', 'Réseaux humides', 'Citernes'],
  },
  {
    key: "terrassement",
    title: "Terrassement",
    desc: "Maisons individuelles, piscines, plateformes, chemins d’accès, tranchées techniques.",
    img: chantier3,
    subs: ['Terrassement de maison', 'Terrassement de piscine'],
  },
  {
    key: "demolition",
    title: "Démolition et Recyclage",
    desc: "Démolition sélective, évacuation et valorisation des matériaux inertes.",
    img: chantier4,
    subs: ['Déconstruction', 'Recyclage des matériaux'],
  },
];

export const GALLERY_IMAGES = [
  {
    src: galleryTerrasse1,
    alt: "Terrasse en dalles de pierre grise avec aménagement paysager et terrassement en cours à l'arrière-plan",
  },
  {
    src: galleryTerrasse2,
    alt: "Terrasse en dalles de pierre grise avec salon de jardin, en bordure d'une allée pavée",
  },
  {
    src: galleryCloture,
    alt: "Clôture aluminium posée sur muret béton le long d'une allée résidentielle",
  },
  {
    src: galleryBetonImprime,
    alt: "Cour et allée en béton imprimé devant une maison en pierre",
  },
  {
    src: galleryEnrobe,
    alt: "Allée et cour en enrobé noir devant un garage",
  },
];
