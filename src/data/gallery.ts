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

export const collectionMeta: Record<string, { title: string; description: string }> = {
  todo: {
    title: 'Trabajos realizados y colecciones',
    description:
      'Una selección de piezas desarrolladas en HENKA. Cada trabajo refleja un proceso de diseño, impresión y personalización pensado para durar.',
  },
  aikido: {
    title: 'Colección Aikido',
    description:
      'Remeras, buzos, toallas y tazas pensados para la práctica y el día a día de quienes viven el Aikido.',
  },
  argentina: {
    title: 'Colección Argentina',
    description: 'Remeras, buzos, taza y mate con los colores de siempre.',
  },
  personalizados: {
    title: 'Personalizados',
    description: 'Piezas hechas a pedido, fuera de nuestras colecciones fijas.',
  },
};