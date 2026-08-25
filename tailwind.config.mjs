/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,ts,mdx}"],
  theme: {
    extend: {
      colors: {
        // Palette inspirée « Marc & Jardin » (adaptée TP)
        background: "#0f1310", // quasi noir/vert
        foreground: "#f2f2ee",
        muted: "#c9c7bf",
        accent: {
          DEFAULT: "#f3b21f",
          dark: "#c9860f",
        },
      },
      fontFamily: {
        display: ['"Big Shoulders"', "sans-serif"],
        body: ['"Public Sans"', "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [],
};
