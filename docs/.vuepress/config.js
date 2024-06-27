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
      title: 'BedrockHUB Docs',
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
      "/server": [
        {
          text: "Vanilla",
          collapsible: true,
          children: [],
        },
        {
          text: "NonVanilla",
          collapsible: true,
          children: [],
        },
      ],
      '/guide': [
        {
          text: "LeviLamina",
          collapsible: true,
          children: ['/guide/llbds/getting-started', '/guide/llbds/event', '/guide/llbds/command', '/guide/llbds/packet', '/guide/llbds/hook'],
        },
        {
          text: "PowerNukkitX",
          collapsible: true,
          children: ['/guide/nukkit/basics', '/guide/nukkit/command', '/guide/nukkit/event', '/guide/nukkit/custom-item'],
        },
        {
          text: "BDSX",
          collapsible: true,
          children: [],
        }
      ],
    },
  }),
}