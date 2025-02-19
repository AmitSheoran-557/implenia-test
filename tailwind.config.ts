import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1212px",
      },
      colors: {
       "yellow":"#EBA82C",
       "lightBlack":"#1D1D1B",
       "red":"#FF132D",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/images/png/hero-bg.png')",
      },
      animation: {
        'slide-in': 'slide-in 1s ease-out forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(-100%)',},
          '100%': { transform: 'translateX(0)', },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
