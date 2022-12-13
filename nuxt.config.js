export default {
  head: {
    title: 'tortam',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.google.com/specimen/Alegreya+Sans/tester?subset=cyrillic'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/slicke.css'
      },
      {
        rel: 'stylesheet',
        href: '/slicke.css'
      }
    ],
    script: [
      // { hid: 'stripe', src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', defer: true },
//       { hid: 'stripe', src: '/swiper.js', defer: true },
//         { hid: 'stripe', src: '/script.js', defer: true },
    ],
  },

  css: [
    '@/assets/main.css',
  ],

  plugins: [],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module'
  ],

  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/proxy',
  ],


  axios: {
    baseURL: 'http://api.tortam.ru/api/v1',
    credentials: true,
    common: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
