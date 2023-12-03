export default {
  target: 'static',
  head: {
    titleTemplate: '%s',
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons',
      },
    ],
  },

  css: ['~/assets/css/style.css', '~/assets/css/typography.css'],

  plugins: ['~/plugins/mixins/user', { src: '~/plugins/AOS', mode: 'client' }],

  buildModules: [
    '@nuxtjs/vuetify',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/google-analytics',
  ],
  optimizedImages: {
    optimizeImages: true,
  },
  googleAnalytics: {
    id: 'G-Z1YH1HC1F8',
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#363855',
        cancelButtonColor: '#ff7674',
      },
    ],
  ],
  robots: {
    UserAgent: 'Googlebot',
    Disallow: '/users',
    UserAgent: 'Bingbot',
    Disallow: '/admin',
  },

  transition: {
    name: 'fade',
    mode: 'out-in',
  },

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#e0c855',
          accent: '#caa459',
          secondary: '#2e2e2d',
        },
      },
    },
  },

  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
}
