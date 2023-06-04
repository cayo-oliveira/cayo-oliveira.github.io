// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

//---------------------------------------------------------------------------------------------------

// To enable KaTeX, you need to install remark-math and rehype-katex plugins.
const math = require('remark-math')
const katex = require('rehype-katex')

//---------------------------------------------------------------------------------------------------

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'YouEngCode',
  tagline: 'Lets learn together about Data',
  //url: 'https://www.youengcode.com',
  url: 'https://cayo-oliveira.github.io',
  baseUrl: '/',
  projectName: 'cayo-oliveira.github.io',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  stylesheets: [
    {
      href: '/katex/katex/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
  organizationName: 'cayo-oliveira',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  //deploymentBranch: 'deployment',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  //organizationName: 'youengcode', // Usually your GitHub org/user name.
  //projectName: 'youengcode', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'YouEngCode',
        logo: {
          alt: 'YouEngCode',
          src: 'img/youengcode.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'Youtube',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/youengcode/',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/@YouEngCode/videos',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/axX4c9sk',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/youengcode',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/youengcode',
              },

            ],
          },
          {
            title: 'More',
            items: [
              
              {
                label: 'you@youengcode.com',
                href: 'https://github.com/youengcode',
              },
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Youengcode, using free Docusaurus and free ChatGPT for some stuffs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  presets: 
  [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          remarkPlugins: [math],
          rehypePlugins: [katex],
        }, 
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          remarkPlugins: [math],
          //rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        
      }),
    ],
  ],
};

module.exports = config;

