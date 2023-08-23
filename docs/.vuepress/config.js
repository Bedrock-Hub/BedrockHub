import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

module.exports = {
  base: '/',
  head: [
    ['meta', {name: 'theme-color', content: '#029502'}],
  ],
  dest: './dist',
  locales: {
    '/': {
      title: 'BedrockHUB',
      description: 'Quite place for bedrock coders!'
    }
  },
  plugins: [
    searchPlugin({}),
  ],
  theme: defaultTheme({
    docsDir: '/',
    search: true,
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/guide',
      },
      {
        text: 'Useful links',
        link: '/useful',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Bedrock-Hub/BerdrockHub',
      },
    ],
    sidebar: {
      '/guide': [
        {
          text: 'Guide lines',
          children: ['/guide/llbds/', '/guide/nukkit/', '/guide/df/'],
        },
      ],
      '/guide/llbds': [
        {
          text: 'LiteLoaderBDS',
          children: ['/guide/llbds/getting-started', '/guide/llbds/event', '/guide/llbds/command', '/guide/llbds/packet', '/guide/llbds/hook'],
        },
      ],
      '/guide/nukkit': [
        {
          text: 'Nukkit\'s',
          children: ['/guide/nukkit/basics', '/guide/nukkit/command', '/guide/nukkit/event', '/guide/nukkit/custom-item'],
        },
      ],
    },
  }),
}