import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * 考试资料侧边栏配置
 */
const sidebarExams: SidebarsConfig = {
  examsSidebar: [
    // {
    //   type: 'doc',
    //   id: 'index',
    //   label: '考试资料概述',
    // },
    'index',
    {
      type: 'category',
      label: '期中考试',
      items: [
        // 'midterm/2023',
        // 'midterm/2022',
        // 'midterm/2021',
        // 'midterm/common-questions',
        'midterm/preparation',
      ],
    },
    {
      type: 'category',
      label: '期末考试',
      items: [
        'final/2024s2',
        // 'final/2022',
        // 'final/2021',
        // 'final/common-questions',
        'final/preparation',
      ],
    },
  ],
};

export default sidebarExams; 