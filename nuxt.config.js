const webpack = require("webpack")
const env = require('dotenv').config()
// const slug = require('slug')
// Slug.defaults.mode = 'rfc3986';


module.exports = {
  server:{
    port:3001,
  },
  mode: 'universal',
  env: env.parsed,
  /*
  ** Headers of the page
  */
  head: {
    title: 'seller-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script: [
      { src: 'https://js.stripe.com/v3/' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    'portal-vue/nuxt'
  ],

  auth: {
    strategies: {
      local: {
        endpoints: {
         login: {
            url: '/auth/sellerlogin',
            method: 'post',
            propertyName: 'meta.token'
          },
          user: {
            url: '/auth/me',
            method: 'get',
            propertyName: 'data'
          },
         
        }
      }
    }
  },

 router: {
    middleware: [
      'clearValidationErrors'
    ]
  },

  axios: {


    /*baseURL: 'http://admin-app.test/api'*/

    baseURL: process.env.BASEURL

  },

  css: [
   '~assets/css/tailwind.css',
    '~assets/styles/app.scss',   
  ],

  
    plugins: [
    '~/plugins/mixins/user.js',
    '~/plugins/mixins/validation.js',
    '~/plugins/mixins/slug.js',
    '~/plugins/axios.js',
    { src: '~/plugins/mixins/paginate',ssr:false },
    { src: '~/plugins/chart', ssr: false },
 ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // vendor: ["jquery", "bootstrap"],
    // vendor: ['vue-select'],
    //   plugins: [
    //   new webpack.ProvidePlugin({
    //     $: "jquery"
    //   })
    // ],
     // plugins: [
     //  '~plugins/vue-select.js'
     // ],
    postcss: {
      plugins: {
        'postcss-custom-properties': false,

      },

    },
    /*
    ** Run ESLint on save
    */
     vendor: ["jquery"],
        plugins: [
      new webpack.ProvidePlugin({
        $: "jquery"
      })
    ],
    postcss: [
     require('tailwindcss')('./tailwind.js'),
     require('autoprefixer')
   ],
      generate: {
      minify: {
        collapseWhitespace: false
      }
    },
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

