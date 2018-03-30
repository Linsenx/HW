module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'helloworld',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=1280px' },
      { hid: 'description', name: 'description', content: 'The website for HW' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize the style
  */
  css: [
    { src: '~assets/css/cleaning.scss', lang: 'scss' },
    { src: '~assets/css/main.scss', lang: 'scss' },
    { src: '~/node_modules/font-awesome/scss/font-awesome.scss', lang: 'scss'},
    { src: '~/node_modules/animate.css/animate.min.css', lang: 'css'},
  ],
  /*
  ** Build configuration
  */
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
  },
  
  plugins: [
    {src: '~plugins/classes.js', ssr: false}
  ]
}
