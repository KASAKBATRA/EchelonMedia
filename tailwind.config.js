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
        'bg-primary': '#F5F0E8',
        'bg-secondary': '#EDE8DF',
        'echelon-black': '#1A1A1A',
        'echelon-gold': '#C8A96E',
        'echelon-gold-light': '#E8D5B0',
        'echelon-muted': '#8A8178',
        'echelon-dark': '#111111',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        cursive: ['Great Vibes', 'cursive'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'blob': 'blob 8s ease-in-out infinite',
        'float-a': 'floatA 5s ease-in-out infinite',
        'float-b': 'floatB 6.5s ease-in-out 1s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};