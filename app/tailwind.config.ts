import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      primary: {
        950: "#000",
        900: "#131316",
        800: "#1C1C21",
        700: "#26262C",
        600: "#2F3037",
        500: "#393A41",
      },
      accent: {
        500: "#5B89EA",
        400: "#A2BFFD",
        300: "#EFF2FF",
      },
      red: "#FF5B5B",
    },
  },
  plugins: [],
};
export default config;
