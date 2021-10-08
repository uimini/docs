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
    // apple meta
    ['link', { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png"}],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png"}],
    // default meta
    ['link', { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
    // other meta
    ['link', { rel: "manifest", href: "/manifest.json"}],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat&display=swap' }],
    // ga tag
    ['script', {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-XB7YZBMDH4'
      }],
    ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XB7YZBMDH4');
    `],
  ],

  themeConfig: {
    logo: '/apple-icon-76x76.png',
    homepageTitle: 'Uimini',
    siteName: 'Uimini',
    repo: repos.uimini,
    repoLabel: 'Github',
    docsRepo: repos.docs,
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    docsDir: 'docs',
    // lastUpdated: true,
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
            link: 'https://uimini.github.io/docs/v1/get-started'
          }
        ]
      }
    ],
    sidebar: {
      '/docs/': [
        {
          title: 'Uimini',
          collapsable: false,
          children: ['', 'quick-start', 'download', 'showcase']
        },
        {
          title: 'Design',
          collapsable: false,
          children: ['layout', 'colors', 'dark-mode', 'typography'] // todo: dark-mode, themes
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
