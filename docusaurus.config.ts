import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'CSSE1001/7030 学习指南',
  tagline: '全面的CSSE1001/7030课程资源 - 笔记、习题与考试准备',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wza15046319911/csse1001-notes/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wza15046319911/csse1001-notes/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'exercises',
        path: 'exercises',
        routeBasePath: 'exercises',
        sidebarPath: './sidebars-exercises.ts',
        // ... 其他选项
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'exams',
        path: 'exams',
        routeBasePath: 'exams',
        sidebarPath: './sidebars-exams.ts',
        // ... 其他选项
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'CSSE1001/7030 学习指南',
      logo: {
        alt: 'CSSE1001/7030 Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: '课程笔记',
        },
        {
          type: 'doc',
          docId: 'index',
          docsPluginId: 'exercises',
          position: 'left',
          label: '配套习题',
        },
        {
          type: 'doc',
          docId: 'index',
          docsPluginId: 'exams',
          position: 'left',
          label: '考试资料',
        },
        {to: '/blog', label: '学习技巧', position: 'left'},
        {
          to: '/about', 
          label: '关于我', 
          position: 'right'
        },
        {
          href: 'https://github.com/wza15046319911/software-engineering-notes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '学习资源',
          items: [
            {
              label: '课程笔记',
              to: '/docs',
            },
            {
              label: '配套习题',
              to: '/exercises',
            },
            {
              label: '考试资料',
              to: '/exams',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'UQ讨论区',
              href: '#',
            },
            {
              label: 'UQ官方课程',
              href: '#',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '学习技巧',
              to: '/blog',
            },
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/wza15046319911/software-engineering-notes',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CSSE1001/7030 学习指南. 基于 Docusaurus 构建.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
