module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4caac7',
        secondary: '#6bb3c7',
        accent: '#8abcc8',
        light: '#aac6c9',
        background: '#f3f0e8',
        dark: '#3a1a6a'
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}