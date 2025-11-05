/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0f172a" },
        accent: { DEFAULT: "#14b8a6" },

        teal: "rgb(var(--color-teal) / <alpha-value>)",

        text: {
          primary: "#f1f5f9",   // slate-100
          secondary: "#94a3b8", // slate-400
          muted: "#64748b",     // slate-500
        },
      },
    },
  },
  plugins: [],
};

