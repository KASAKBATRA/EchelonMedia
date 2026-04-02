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
        'bg-primary': '#F5EFE7',
        'bg-secondary': '#EDE3D7',
        'echelon-black': '#3E2F2B',
        'echelon-gold': '#D6C3A3',
        'echelon-gold-light': '#E8DCC9',
        'echelon-muted': '#8B756B',
        'echelon-dark': '#3E2F2B',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
        cursive: ['Poppins', 'sans-serif'],
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
        blob: 'blob 8s ease-in-out infinite',
        'float-a': 'floatA 5s ease-in-out infinite',
        'float-b': 'floatB 6.5s ease-in-out 1s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
