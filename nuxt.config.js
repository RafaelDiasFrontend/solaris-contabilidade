const URL = "http://api.solariscontabilidade.com.br"
import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: 9004, // default: 3000
    host: '127.0.0.1' // default: localhost
  },
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'server',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s',   
    title: 'frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700%7CMaterial+Icons'
      }    
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/style.css',
    '~/assets/css/typography.css',
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css',    
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/mixins/user',
   
    { src: '~/plugins/localStorage.js', mode: 'client'},   
    { src: '~/plugins/slick', mode: 'client'},  
    { src: '~/plugins/AOS', mode: 'client' },
    { src: '~/plugins/vue2SmoothScroll', mode: 'client' }        
  ],


  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/google-analytics'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  googleAnalytics: {
    id: 'G-Z1YH1HC1F8'
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',    
    '@nuxtjs/robots',   
    '@nuxtjs/sitemap', 
    [
      'vue-sweetalert2/nuxt',
      {
        confirmButtonColor: '#363855',
        cancelButtonColor: '#ff7674'
      }
    ] 
  ],
  robots: {
    UserAgent: 'Googlebot',
    Disallow: '/users',
    UserAgent: 'Bingbot',
    Disallow: '/admin'
  },
  // optimizedImages: {
  //   optimizeImages: true
  // },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {      
    proxy: true,
    baseURL: URL
  },
  proxy: {
    "/api": URL
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  auth: {
    redirect: {
      login: '/admin', 
      logout: '/',
      callback: '/login',
      home: false
    },    
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'api/auth/login',
            method: 'post',
            propertyName: "token"
          },     
          logout: true,
           
          user: { method: 'get', propertyName: false }

        }
      }
    }
  },
  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#e0c855',
          accent: '#caa459',
          secondary: '#2e2e2d',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: '#D15252',
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  },


}
