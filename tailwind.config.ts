import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#FAFAF8',
        secondary: '#2B2B2B',
        accent: '#A8B5A0',
        tertiary: '#E8E3DB',
        cta: '#C17A5C',
        teal: '#14B8A6',
        'teal-light': '#5EEAD4',
      },
    },
  },
  plugins: [],
} satisfies Config;
