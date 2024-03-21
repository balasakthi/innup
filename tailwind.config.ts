import type { Config } from 'tailwindcss';
import { tailwindConfig } from '@storefront-ui/vue/tailwind-config';
import sfTypography from '@storefront-ui/typography';

export default <Config>{
  presets: [tailwindConfig],
  plugins: [sfTypography],
  content: ['./**/*.vue', './node_modules/@storefront-ui/vue/**/*.{js,mjs}'],
  theme: {
    fontFamily: {
      'sans': ['Lucida Sans Unicode', 'Verdana', 'sans-serif', 'system-ui'],
      'heading': ['Lucida Sans Unicode', 'Verdana', 'sans-serif', 'system-ui'],
    },
    extend: {
      colors: {
        primary: {
          50: '#00519F',
          100: '#115FA8',
          200: '#236DB1',
          300: '#387CBB',
          400: '#4F8CC5',
          500: '#679DCF',
          600: '#82AED8',
          700: '#9EC1E2',
          800: '#BCD5EC',
          900: '#DDE9F5',
        }
      },
    },
  }
};