import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "CSSE1001/7030 学习指南",
  tagline: "全面的CSSE1001/7030课程资源 - 笔记、习题与考试准备",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://csse1001-7030-notes.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/wza15046319911/csse1001-notes/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "exercises",
        path: "exercises",
        routeBasePath: "exercises",
        sidebarPath: "./sidebars-exercises.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "exams",
        path: "exams",
        routeBasePath: "exams",
        sidebarPath: "./sidebars-exams.ts",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    metadata: [{
      name: "keywords",
      content: "CSSE1001/7030, Python编程, 数据结构, 面向对象编程, UQ课程, 编程学习",
    }],
    algolia: {
      appId: 'MIBDZ7E0RI',
      apiKey: 'f64637c8d420d834ec4dc54283968fe1',
      indexName: 'csse1001-7030-vercel',
      contextualSearch: true,
      searchParameters: {},
      insights: true
    },
    navbar: {
      title: "CSSE1001/7030 学习指南",
      logo: {
        alt: "CSSE1001/7030 Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "课程笔记",
        },
        {
          type: "doc",
          docId: "index",
          docsPluginId: "exercises",
          position: "left",
          label: "配套习题",
        },
        {
          type: "doc",
          docId: "index",
          docsPluginId: "exams",
          position: "left",
          label: "考试资料",
        },
        {
          to: "/about",
          label: "关于我",
          position: "right",
        },
        {
          href: "https://github.com/wza15046319911/software-engineering-notes",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "学习资源",
          items: [
            {
              label: "课程笔记",
              to: "/docs",
            },
            {
              label: "配套习题",
              to: "/exercises",
            },
            {
              label: "考试资料",
              to: "/exams",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "关于我",
              to: "/about",
            },
            {
              label: "GitHub",
              href: "https://github.com/wza15046319911/software-engineering-notes",
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
