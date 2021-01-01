module.exports = {
  purge: ['./**/*.razor'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
        backgroundColor: ['even']
    },
  },
  plugins: [],
}
