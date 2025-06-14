import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * 练习资料侧边栏配置
 */
const sidebarExercises: SidebarsConfig = {
    exercisesSidebar: [
        {
            type: "doc",
            id: "index",
            label: "练习概述",
        },
        // {
        //     type: "category",
        //     label: "Python基础练习",
        //     items: [
        //         "python-basics/arithmetics",
        //         "python-basics/data-types-arithmetics",
        //         "python-basics/lists-special",
        //         "python-basics/slicing",
        //         "python-basics/scope",
        //     ],
        // },
        // {
        //     type: "category",
        //     label: "Python进阶练习",
        //     items: ["data-structures/all-structures"],
        // },
        // {
        //     type: "category",
        //     label: "Python高级练习",
        //     items: [
        //         "advanced-topics/classes-objects",
        //         "advanced-topics/comprehensions-lambda",
        //         "advanced-topics/recursion",
        //     ],
        // },
    ],
};

export default sidebarExercises;
