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
    image: "/images/coleccion-aikido.png",
    layout: "large",
    href: "/galeria?coleccion=aikido",
  },
  {
    title: "Argentina",
    description: "Remeras, buzos, tazas y mates con nuestros colores.",
    image: "/images/coleccion-argentina.png",
    layout: "small",
    href: "/galeria?coleccion=argentina",
  },
  {
    title: "Personalizados",
    description:
      "Contanos qué tenés en mente y lo convertimos en una pieza única, sin mínimos.",
    image: "/images/coleccion-personalizados.jpg",
    layout: "wide",
    href: "/galeria?coleccion=personalizados",
  },
];