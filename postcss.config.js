const tailwindscss = require('tailwindcss');

module.exports = {
    plugins: [tailwindscss('./tailwind.config.js'), require('autoprefixer')]
}