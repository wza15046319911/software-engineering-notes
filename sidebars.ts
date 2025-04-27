import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // 主侧边栏
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '课程介绍',
    },
    {
      type: 'category',
      label: 'Python基础',
      collapsed: false,
      items: [
        'python-basics/variables',
        'python-basics/operations',
        'python-basics/data-types',
        'python-basics/control-flow',
        'python-basics/functions',
      ],
    },
    {
      type: 'category',
      label: '数据结构',
      collapsed: false,
      items: [
        'data-structures/lists',
        'data-structures/strings',
        'data-structures/tuples',
        'data-structures/dictionaries',
      ],
    },
    {
      type: 'category',
      label: '高级主题',
      items: [
        'advanced-topics/type-hints',
        'advanced-topics/file-io',
        'advanced-topics/classes-objects',
        'advanced-topics/exception-handling',
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
