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
          light: '#4E4E4E',
          DEFAULT: '#4E4E4E',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
