import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
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
    },
  },
  plugins: [],
};
export default config;
