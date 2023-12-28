/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-shade': '#f0f3e5',
        'light-accent': '#b8b9ac',
        'main-primary': '#ed44f1',
        'dark-accent': '#7d6c9d',
        'dark-shades': '#36597a',
      },
    },
  },
  plugins: [],
}
