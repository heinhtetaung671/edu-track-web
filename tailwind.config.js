module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003366',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
