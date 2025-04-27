import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * 练习资料侧边栏配置
 */
const sidebarExercises: SidebarsConfig = {
  exercisesSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '练习概述',
    },
    {
      type: 'category',
      label: 'Python基础练习',
      items: [
        'python-basics/practice-questions',
        'python-basics/practice-answers',
      ],
    },
    {
      type: 'category',
      label: '数据结构练习',
      items: [
        'data-structures/lists',
        'data-structures/strings',
        'data-structures/tuples',
        'data-structures/dictionaries',
      ],
    },
    {
      type: 'category',
      label: '高级主题练习',
      items: [
        'advanced-topics/classes-objects',
        'advanced-topics/file-io',
        'advanced-topics/exception-handling',
      ],
    },
  ],
};

export default sidebarExercises; 