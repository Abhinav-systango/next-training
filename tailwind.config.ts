import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#008ECC",
        green: "#249B3E",
        white: "#F5F5F5",
        white2: "#F3F9FB",
        placeholderText: "#666666",
        headingText: "#222222"
      }
    },
  },
  plugins: [],
};
export default config;
