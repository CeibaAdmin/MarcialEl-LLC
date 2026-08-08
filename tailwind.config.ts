import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cinematic "ink & candlelight" palette — dark first.
        night: {
          DEFAULT: "#0b0a09",
          900: "#0b0a09",
          800: "#141210",
          700: "#1c1917",
          600: "#26221d",
          500: "#332d26",
        },
        bone: {
          DEFAULT: "#f4ede1",
          soft: "#d9cfbf",
          dim: "#a1968440",
          muted: "#9a8f7d",
        },
        gold: {
          DEFAULT: "#c79a54",
          light: "#e6c589",
          dark: "#9c7638",
        },
        ember: {
          DEFAULT: "#b0432f",
          dark: "#7c2a1e",
        },
        burgundy: {
          DEFAULT: "#7b2d3b",
          dark: "#521e28",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "78rem",
      },
      letterSpacing: {
        widest: "0.25em",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -5%)" },
          "20%": { transform: "translate(-10%, 5%)" },
          "30%": { transform: "translate(5%, -10%)" },
          "40%": { transform: "translate(-5%, 12%)" },
          "50%": { transform: "translate(-10%, 5%)" },
          "60%": { transform: "translate(12%, 0)" },
          "70%": { transform: "translate(0, 10%)" },
          "80%": { transform: "translate(-12%, 0)" },
          "90%": { transform: "translate(10%, 5%)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 3.5s linear infinite",
        marquee: "marquee 40s linear infinite",
        grain: "grain 8s steps(10) infinite",
        glow: "glow 5s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
