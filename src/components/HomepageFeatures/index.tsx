import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import qrcode from '@site/static/img/qrcode.png';

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

function Feature({ title, Svg, description }: FeatureItem) {
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

function QuickNavCard({ title, description, link }: QuickNavItem) {
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

// 用户评价数据
type TestimonialItem = {
  content: string;
  name: string;
  role: string;
};

const TestimonialItems: TestimonialItem[] = [
  {
    content: '这个学习指南太棒了！内容清晰易懂，例子丰富，帮助我轻松掌握了Python基础。',
    name: '李同学',
    role: 'CSSE1001学生',
  },
  {
    content: '作为没有编程基础的学生，这个网站的循序渐进的讲解让我能够跟上课程进度，期中考试取得了很好的成绩。',
    name: '王同学',
    role: 'CSSE7030学生',
  },
  {
    content: '往年考题部分非常有用，通过分析这些题目，我对考试重点有了清晰的认识，最终拿到了7分。',
    name: '张同学',
    role: 'CSSE7030学生',
  },
];

function TestimonialCard({ content, name, role }: TestimonialItem) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={styles.testimonialCard}>
        <div className="card">
          <div className="card__body">
            <p className={styles.testimonialContent}>"{content}"</p>
          </div>
          <div className="card__footer">
            <div>
              <strong>{name}</strong> · {role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 即将上线的课程数据
type UpcomingCourseItem = {
  title: string;
  description: string;
  targetDate: string;
};

const UpcomingCourseItems: UpcomingCourseItem[] = [
  {
    title: 'CSSE1001/7030',
    description: 'Python编程入门，面向对象编程基础',
    targetDate: '已上线',
  },
  {
    title: 'INFS3202/7202',
    description: 'Web信息系统，PHP、MySQL和Web开发',
    targetDate: '即将上线',
  },
  {
    title: 'COMP3506/7505',
    description: '算法与数据结构，复杂度分析',
    targetDate: '计划中',
  },
];

function UpcomingCourseCard({ title, description, targetDate }: UpcomingCourseItem) {
  return (
    <div className="col col--4 margin-bottom--lg">
      <div className={styles.upcomingCourseCard}>
        <div className="card">
          <div className="card__header">
            <Heading as="h3">{title}</Heading>
            <span className={styles.courseStatus}>{targetDate}</span>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
        </div>
      </div>
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

        {/* QR码模块 */}
        <div className="padding-top--xl padding-bottom--xl">
          <div className="text--center margin-bottom--lg">
            <Heading as="h2">加入免费答疑群</Heading>
            <p>扫描下方二维码，获取即时学习支持和答疑服务</p>
          </div>
          <div className={styles.qrcodeContainer}>
            <img
              src={qrcode}
              alt="答疑群二维码"
              className={styles.qrcodeImage}
            />
          </div>
        </div>
        <div className="text--center padding-top--xl padding-bottom--xl">
          <Heading as="h2">为什么选择这个学习指南？</Heading>
          <p style={{ maxWidth: '800px', margin: '0 auto', paddingTop: '1rem' }}>
            由CSSE1001/7030课程7年资深教龄老师编写，结合实际学习经验，针对课程难点和考试重点，
            提供了最实用的学习资源。无论你是初学者还是需要复习备考的学生，
            这里都能找到适合你的资料，帮助你在这门课程中取得优异成绩。
          </p>
        </div>



        {/* 用户评价模块 */}
        <div className="padding-top--xl padding-bottom--xl">
          <div className="text--center margin-bottom--lg">
            <Heading as="h2">学生评价</Heading>
            <p>看看其他学生使用后的反馈</p>
          </div>
          <div className="row">
            {TestimonialItems.map((item, idx) => (
              <TestimonialCard key={idx} {...item} />
            ))}
          </div>
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

        {/* 即将上线的课程模块 */}
        <div className="padding-top--xl padding-bottom--xl">
          <div className="text--center margin-bottom--lg">
            <Heading as="h2">即将上线的课程</Heading>
            <p>更多课程资料正在筹备中</p>
          </div>
          <div className="row">
            {UpcomingCourseItems.map((item, idx) => (
              <UpcomingCourseCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
