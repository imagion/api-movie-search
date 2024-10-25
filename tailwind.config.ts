import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    maxWidth: {
      '1/4': '25%',
      '7xl': '80rem',
    },
    minWidth: {
      10: '170px',
    },
    maxHeight: {
      445: '445px',
    },
    extend: {
      aspectRatio: {
        poster: '300 / 445',
      },
    },
  },
  plugins: [],
};
export default config;
