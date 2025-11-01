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
    img: `${SITE.base}/images/chantier-1.jpg`,
    subs: ['Terrasse', 'Escalier', 'Pavés', 'Création paysagère'],
  },
  {
    key: "assainissement",
    title: "Assainissement",
    desc: "Réseaux EU/EP, fosses, micro-stations, raccordements et mises aux normes.",
    img: `${SITE.base}/images/chantier-2.jpg`,
    subs: ['Mise en conformité', 'Réseaux secs', 'Réseaux humides', 'Citernes'],
  },
  {
    key: "terrassement",
    title: "Terrassement",
    desc: "Maisons individuelles, piscines, plateformes, chemins d’accès, tranchées techniques.",
    img: `${SITE.base}/images/chantier-3.jpg`,
    subs: ['Terrassement de maison', 'Terrassement de piscine'],
  },
  {
    key: "demolition",
    title: "Démolition et Recyclage",
    desc: "Démolition sélective, évacuation et valorisation des matériaux inertes.",
    img: `${SITE.base}/images/chantier-4.jpg`,
    subs: ['Déconstruction', 'Recyclage des matériaux'],
    // subs: ['Démolition d’ouvrages divers', 'Tri et valorisation des déchets']
  },
];
