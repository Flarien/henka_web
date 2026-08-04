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
      "Remeras en algodón oscuro con diseño claro, y en tela técnica clara con diseño oscuro para entrenar. También en toallas y tazas.",
    image: "/images/coleccion-aikido.png",
    layout: "large",
    href: "/colecciones/aikido",
  },
  {
    title: "Argentina",
    description: "Remeras, buzos, taza y mate con los colores de siempre.",
    image: "/images/coleccion-argentina.png",
    layout: "small",
    href: "/colecciones/argentina",
  },
  {
    title: "Personalizados",
    description:
      "Contanos qué tenés en mente y lo convertimos en una pieza única, sin mínimos.",
    image: "/images/coleccion-personalizados.jpg",
    layout: "wide",
    href: "/colecciones/personalizados",
  },
];