import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#180066',
        lightBlue: '#085adf',
        secondary: "#121F30",
        bodyText: "#7D8893",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #085adf, #5d38d3)',
        'custom-gradient-hover': 'linear-gradient(to right, #5d38d3, #085adf)',
      },
      boxShadow: {
        'custom': '0px 8.23px 30.05px 0px rgba(151, 155, 175, 0.27)',
      },
      fontSize: {
        'h2-title': '44px',
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1240px",
      },
    },
    fontFamily: {
      beatrice: ["var(--font-beatrice)"],
      dmSans: ["var(--font-dmSans)"],
    },
  },
  plugins: [],
} satisfies Config;
