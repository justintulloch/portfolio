import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        sidebar: 'sidebar .64s cubic-bezier(.22,1,.36,1)', 
        sidebarSlideInLeft: 'sidebarSlideInLeft 0.64s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        sidebarSlideInRight: 'sidebarSlideInRight 0.64s cubic-bezier(0.22, 1, 0.36, 1) forwards',

      },
      keyframes: {
        sidebar: {
          '0%': { transform: 'translate(-100%)' },
          '100%': { transform: 'translate(0)' },
        },
        sidebarSlideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        sidebarSlideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      transitionTimingFunction: {
        'curve-sidebar': 'cubic-bezier(.22,1,.36,1)',
        'curve-a': 'cubic-bezier(0.8, 0, 0.2, 1)',       // --ease-curve-a
        'curve-c': 'cubic-bezier(0.19, 1, 0.22, 1)',     // --ease-curve-c
        'curve-d': 'cubic-bezier(0.2, 0, 0, 1)',   
      },
      spacing: {
        'nav-width': '12.5rem',
      },
      transitionDuration: {
        sidebar: '640ms'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        dribble: {
          400: "#f377a9",
          500: "#ea4c89",
        },
        symbolist: {
          400: "#f8719d",
          500: "#f1437b",
        },
        twitter: {
          400: "#53bcf9",
          500: "#1da1f2",
        },
        typometer: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/container-queries'),
  ],
};
export default config;
