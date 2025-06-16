import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

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
        "index",
        // {
        //     type: "category",
        //     label: "期中考试",
        //     items: [
        //         "midterm/2024s2",
        //         "midterm/2024s1",
        //     ],
        // },
        {
            type: "category",
            label: "期末考试",
            items: [
                "final/2024s2",
                // "final/2024s1",
                // "final/2023s2",
                // "final/2023s1",
            ],
        },
    ],
};

export default sidebarExams;
