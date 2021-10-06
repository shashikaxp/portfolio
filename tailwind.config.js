module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: "'Source Sans Pro'",
      },
      colors: {
        text: {
          light: '#5F5F5F',
          DEFAULT: '#4E4E4E',
        },
      },
      gridRow: {
        'span-portrait': 'span 1.5 / auto',
      },
      gridColumn: {
        'span-horizontal': 'span 2 / auto',
      },
      gridTemplateColumns: {
        'img-grid-md': 'repeat(auto-fit, minmax(240px, 1fr))',
        'img-grid-sm': 'repeat(auto-fit, 1fr)',
      },
      gridAutoRows: {
        'img-grid-md': 'minmax(240px, 400px)',
        'img-grid-sm': '400px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
