const plugins = [
  require("tailwindcss")(),
  require("autoprefixer")(),
  require("postcss-clean")(),
  require("postcss-preset-env")({
    stage: 3,
    features: {
      "nesting-rules": true,
      "case-insensitive-attributes": true,
      "hexadecimal-alpha-notation": true,
      "place-properties": true
    }
  }),

]
const purgecss = require('@fullhuman/postcss-purgecss');


module.exports = {
  plugins
};