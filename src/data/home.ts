export interface Coleccion {
  title: string;
  description: string;
  image: string;
  badge?: string;
  layout: "large" | "small" | "wide";
  href?: string;
}

export const categories: Coleccion[] = [
  {
    title: "Aikido",
    description:
      "Remeras de algodón y poliester, ideales para entrenar. También encontrarás toallas y tazas.",
    image: "https://res.cloudinary.com/dciovdqaf/image/upload/v1792784486/HENKA_WEB/aikido/remera-algodon-bordo-aikido3-frente.png",
    layout: "large",
    href: "/galeria?coleccion=aikido",
  },
  {
    title: "Argentina",
    description: "Remeras, buzos, tazas y mates con nuestros colores.",
    image: "https://res.cloudinary.com/dciovdqaf/image/upload/v1792784486/HENKA_WEB/argentina/buzo-capucha-negro-argentina1.png",
    layout: "small",
    href: "/galeria?coleccion=argentina",
  },
  {
    title: "Personalizados",
    description:
      "Contanos qué tenés en mente y lo convertimos en una pieza única, sin mínimos.",
    image: "https://res.cloudinary.com/dciovdqaf/image/upload/v1792789785/HENKA_WEB/personalizados/IMG-20260419-WA0016_lhwv39.jpg",
    layout: "wide",
    href: "/galeria?coleccion=personalizados",
  },
];