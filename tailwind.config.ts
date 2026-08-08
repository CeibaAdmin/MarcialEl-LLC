import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, literary palette — "ink on paper" with a burgundy accent.
        paper: {
          DEFAULT: "#f7f3ec",
          soft: "#efe8dc",
        },
        ink: {
          DEFAULT: "#1c1917",
          soft: "#44403c",
          faint: "#78716c",
        },
        burgundy: {
          DEFAULT: "#7b2d3b",
          dark: "#5e212c",
          light: "#a24455",
        },
        gold: "#b8894a",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
