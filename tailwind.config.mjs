/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#10090B',
        burgundy: '#1B0B0F',
        panel: '#260C12',
        'red-dark': '#3A0E14',
        red: '#E32938',
        'red-bright': '#FF3344',
        'red-muted': '#8E2935',
        cream: '#F5EDE3',
        'text-muted': '#A89B9A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
        pixel: ['"Press Start 2P"', 'monospace'], // Need to import this or just use a placeholder
      }
    },
  },
  plugins: [],
}
