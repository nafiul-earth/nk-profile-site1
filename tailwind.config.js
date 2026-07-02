/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        forest: '#2F4A32',
        'forest-deep': '#263D29',
        sun: '#FFB400',
        'sun-soft': '#FFC845',
        cream: '#FAF7F0',
        ink: '#1E2320',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
}
