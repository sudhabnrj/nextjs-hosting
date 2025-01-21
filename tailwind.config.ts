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
        primary: '#392188',
        secondary: '#111B29'
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1240px',
      }
    },
    fontFamily: {
      secondary: ['Beatrice Trial'],
      primary: ['DM Sans', 'serif'],
    }
  },
  plugins: [],
} satisfies Config;
