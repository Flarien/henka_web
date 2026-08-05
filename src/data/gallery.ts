export interface GalleryItem {
  slug: string;

  title: string;

  collection: string;

  collectionLabel: string;

  description: string;

  image: string;

  material?: string;

  technique?: string;

  badge?: string;

  featured?: boolean;
}

export const gallery: GalleryItem[] = [
  {
    slug: "remera-aikido-negra",

    title: "Remera Aikido",

    collection: "aikido",

    collectionLabel: 'Colección Aikido',

    description: "Remera deportiva personalizada para la práctica de Aikido.",

    image: "/images/coleccion-aikido.png",

    material: "Algodón",

    technique: "DTF",

    badge: "",
  },

  {
    slug: "buzo-argentina",

    title: "Buzo Argentina",

    collection: "argentina",

    collectionLabel: 'Colección Argentina',

    description: "Buzo canguro sublimado de edición nacional.",

    image: "/images/buzo-argentina.png",

    material: "Poliéster",

    technique: "Sublimación",

    badge: "Nuevo",

    featured: true,
  },
];
