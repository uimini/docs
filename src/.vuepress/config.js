const repo = {
  uimini: 'https://github.com/uimini/uimini',
  docs: 'https://github.com/uimini/docs'
}

const { description } = require('../../package')

module.exports = {
  title: 'Uimini',
  description,

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap'
      }
    ]
  ],

  themeConfig: {
    // logo: '/logo.svg',
    repo: repo.uimini,
    repoLabel: 'Github',
    docsRepo: repo.docs,
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    docsDir: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Docs',
        link: '/docs/'
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Getting Started',
          collapsable: false,
          children: ['', 'download', 'quick-start']
        },
        {
          title: 'General',
          collapsable: false,
          children: ['colors', 'layout', 'typography']
        },
        {
          title: 'Components',
          collapsable: false,
          children: ['alert', 'badge', 'button', 'button-group', 'table']
        },
        {
          title: 'Forms',
          collapsable: false,
          children: ['input', 'checkbox', 'radio']
        }
      ]
    }
  },

  plugins: [
    // '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-medium-zoom',
  ]
}
