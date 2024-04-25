/** @type {import('tailwindcss').Config} */

const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons");

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '800': 'rgb(15,23,42)',
          '900': '#020420',
        },
        primary: {
          '50': 'rgb(239 253 245)',
          '400': 'rgb(0 220 130)',
          '500': 'rgb(0 193 106)'
        },
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["ph"]),
    }),
  ],
}
