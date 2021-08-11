const repo = {
  uimini: 'https://github.com/uimini/docs',
  docs: 'https://github.com/uimini/docs'
}

const { description } = require('../../package')

module.exports = {
  title: 'Uimini',
  description,

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap' }],

  ],

  themeConfig: {
    // logo: '/logo.svg',
    repo: repo.docs,
    editLinks: false,
    // editLinkText: 'Help us improve this page!',
    docsDir: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Docs',
        link: '/docs/',
      },
      {
        text: 'Github',
        link: repo.uimini
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'get-started',
          ]
        }
      ],
    }
  },

  plugins: [
    // '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-medium-zoom',
  ]
}
