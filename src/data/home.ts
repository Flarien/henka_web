export interface Colecciones {
  title: string;
  description: string;
  image: string;
  badge?: string;
  layout: "large" | "small" | "wide";
  href?: string;
}

export const categories: Colecciones[] = [
  {
    title: "Remeras",
    description:
      "Diseños que resisten el entrenamiento más intenso sin perder color.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD81yDpXP2F2GEVE3jSWzvfF6cIRRMTw2SRkOKE3e9qu-uexVBIhYlq834MUhbKAsvOsNMIPjJVlrWAKFRpSN_9aAHIMU8pDxm26ShIKpZ8jGwdTOTP1nlhX3JRQHblCgxyEGzJxSw6vVgfCxikWQLVoptfQcPDCxdcuevJWnlvqRnBjdPaG-llGl8sN7CyJv2Hq-wl4yAuk3_yhqpSQeVZ4q696h_69umUogocPS058diQgDXk4S40NCGxfZjIEktdJCjJNtMF3bK1",
    badge: "Técnico & Algodón",
    layout: "large",
    href: "/productos/remeras"
  },

  {
    title: "Accesorios",
    description:
      "Tazas, llaveros y productos personalizados de alta calidad.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCYP28YKGHsSOLpL2NAwmaHwsdCkkDdO6cMcVfHueNRQUbxIWz1Nwq2Z4p2rykuRxcbbZG8Y56fKCunNNuD9jAKFPRNLsV2catNBzdE2_uS28xP5OaNEDQY_RZZlQFSaP5ou_UzqMuZ4D__AAzVXN3asDB-QlmJ3Ntw0zMVS_bqhHVXS1kw-P3zYP5OStOr7C3E2azlCXlAdHWEd6s1hk0JwogJVluDZAu9ZjfxRkobVImS5HJ5Nm7vGOrVXHGBIwnUoGCMNiJdJPrA",
    layout: "small",
    href: "/productos/accesorios"
  },

  {
    title: "Buzos & Hoodies",
    description:
      "Prendas de abrigo con estampas de gran formato que no se agrietan ni se despegan.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBcHlXVoPLZwUIlTC0IkYhWXayHvbDilPQtb3iUaRvgeZYoN71xg7et8BpuzIYAcBpboU1Mo1ll_C80YTjnbvBAr6yfUCtQvjGtaeZwwBiYkH2kC3zaL9wAOCJphHuXtSkEreEIxV8YmaVRtzRSbQLg80IOTofAcreBqwbRe8fB6IThorUnmEfZYy0uk50VTcZi2MKHn6ZpG7dqqGcwz0t7iUvogEyGrmM9sOw14w9RAlY9qITz80bXc5m_gxNA38OicT2brGhxVkoJ",
    layout: "wide",
    href: "/productos/buzos"
  }
];

