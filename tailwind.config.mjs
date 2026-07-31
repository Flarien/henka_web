export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#c4522a', // El naranja óxido característico de Henka
        background: '#1b110e', // El fondo oscuro "Dojo"
        surface: {
          DEFAULT: '#1b110e',
          bright: '#443632',
          container: '#241915',
        },
        'on-surface': '#f5f5f5',
      },
      fontFamily: {
        // Asegúrate de importar Oswald en tu Layout (vía Google Fonts o Fontsource)
        headline: ['Oswald', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'henka': '4px', // ROUND_FOUR según nuestro sistema
      }
    },
  },
  plugins: [],
}