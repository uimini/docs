const path = require('path')

const repos = {
  uimini: 'https://github.com/uimini/uimini',
  docs: 'https://github.com/uimini/docs'
}
const { description } = require('../../package')

module.exports = {
  title: 'Uimini',
  description,
  base: '/docs/',

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
    repo: repos.uimini,
    repoLabel: 'Github',
    docsRepo: repos.docs,
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    docsDir: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Docs',
        link: '/docs/'
      },
      {
        text: 'Versions',
        items: [
          {
            text: 'v2 (current version)',
            link: '/'
          },
          {
            text: 'v1',
            link: '/v1/index.html'
          }
        ]
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Getting Started', // todo to Introduction or uimini
          collapsable: false,
          children: ['', 'download', 'quick-start'] // Introduction? , Getting Started, 'download', 'quick-start', cases
        },
        {
          title: 'Design',
          collapsable: false,
          children: ['layout', 'colors', 'typography'] // todo: dark-mode, themes
        },
        // todo: typography as other section
        {
          title: 'Components',
          collapsable: false,
          children: ['button', 'button-group', 'tag', 'card', 'table']
        },

        {
          title: 'Forms',
          collapsable: false,
          children: [
            'checkbox',
            'input',
            'radio',
            'select',
            'switch',
            'input-group'
          ]
        }
      ]
    }
  },

  alias: {
    styles: path.resolve(__dirname, './styles')
  },

  plugins: [
    // '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-medium-zoom',
  ]
}
