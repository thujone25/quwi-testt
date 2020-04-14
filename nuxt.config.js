module.exports = {
  plugins: ['~/plugins/sharedCompsRegistration'],
  css: ['~assets/css/base.css'],
  /*
  ** Headers of the page
  */
  head: {
    title: 'quwi-test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Test for quwi project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://quwi.com/favicon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildModules: ['@nuxtjs/router-extras'],
  build: {
    /*
    ** Run ESLint on save
    */
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

