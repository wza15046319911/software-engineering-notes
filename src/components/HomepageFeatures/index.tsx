import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '全面的课程笔记',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        提供CSSE1001/7030课程的完整笔记，包括Python基础、数据结构、面向对象编程、
        GUI编程和算法设计等重要知识点，以清晰易懂的方式呈现。
      </>
    ),
  },
  {
    title: '配套习题与解析',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        针对每个知识点提供大量习题和详细解析，帮助你巩固所学内容，
        从基础到进阶，循序渐进提升编程能力。
      </>
    ),
  },
  {
    title: '往年考题与答案',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        收录历年CSSE1001/7030期中和期末考试题目及参考答案，
        帮助你熟悉考试形式，了解重点内容，高效备考。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

type QuickNavItem = {
  title: string;
  description: string;
  link: string;
};

const QuickNavItems: QuickNavItem[] = [
  {
    title: 'Python基础',
    description: '变量、数据类型、条件语句、循环、函数等基础知识',
    link: '/docs/python-basics/variables',
  },
  {
    title: '数据结构',
    description: '列表、元组、字典、集合以及它们的操作方法',
    link: '/docs/data-structures/lists',
  },
  {
    title: '面向对象编程',
    description: '类、对象、继承、多态、封装等OOP概念',
    link: '/docs/advanced-topics/classes-objects',
  },
  {
    title: '期中考试资料',
    description: '历年期中考试题目及详细解析',
    link: '/exams',
  },
  {
    title: '期末考试资料',
    description: '历年期末考试题目及详细解析',
    link: '/exams',
  },
];

function QuickNavCard({title, description, link}: QuickNavItem) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <Link className={styles.quickNavCard} to={link}>
        <div className="card">
          <div className="card__header">
            <Heading as="h3">{title}</Heading>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
          <div className="card__footer">
            <button className="button button--link">查看详情 →</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        
        <div className="text--center padding-top--xl padding-bottom--xl">
          <Heading as="h2">为什么选择这个学习指南？</Heading>
          <p style={{maxWidth: '800px', margin: '0 auto', paddingTop: '1rem'}}>
            由CSSE1001/7030课程前学生整理编写，结合实际学习经验，针对课程难点和考试重点，
            提供了最实用的学习资源。无论你是初学者还是需要复习备考的学生，
            这里都能找到适合你的资料，帮助你在这门课程中取得优异成绩。
          </p>
        </div>
        
        <div className="padding-top--xl padding-bottom--xl">
          <div className="text--center margin-bottom--lg">
            <Heading as="h2">快速导航</Heading>
            <p>直接访问你感兴趣的课程内容</p>
          </div>
          <div className="row">
            {QuickNavItems.map((item, idx) => (
              <QuickNavCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
