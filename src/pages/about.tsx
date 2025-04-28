import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './about.module.css';
import { FaYoutube } from 'react-icons/fa';
import Heading from '@theme/Heading';

export default function About() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`关于我 | ${siteConfig.title}`}
      description="关于我 - 课程导师介绍与个人经历">
      <main className="container margin-top--lg margin-bottom--lg">
        <div className={styles.aboutContainer}>
          <div className={styles.profileSection}>
            <img 
              src="https://images.unsplash.com/photo-1745572601167-720dc57db0d8?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="个人头像" 
              className={styles.profileImage}
            />
            <div className={styles.socialLinks}>
              <a 
                href="https://www.youtube.com/@thevaliantfodder" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.youtubeLink}
              >
                <FaYoutube size={24} /> 观看我的教学视频
              </a>
            </div>
          </div>
          <div className={styles.contentSection}>
            <Heading as="h1">你好，我是你的导师</Heading>
            <div className={styles.experienceBox}>
              <Heading as="h2">丰富的教学经验</Heading>
              <ul>
                <li><strong>CSSE1001/7030：</strong> 7年授课与辅导经验</li>
                <li><strong>INFS3202/7202：</strong> 5年教学经验，重点培养学生系统思维</li>
                <li><strong>COMP3506/7505：</strong> 4年数据结构与算法深度教学经验</li>
              </ul>
            </div>
            
            <div className={styles.experienceBox}>
              <Heading as="h2">扎实的工程背景</Heading>
              <ul>
                <li>曾任抖音后端研发工程师，深入参与高并发系统设计与优化</li>
                <li>现任 Senior Backend Developer，专注于大规模系统架构与微服务实践</li>
              </ul>
            </div>
            
            <div className={styles.aboutText}>
              <p>
                我热爱教学，也热爱技术。多年的教学和工业工作让我深刻理解——
                只有将理论与实际紧密结合，才能真正掌握计算机科学的精髓。
              </p>
              <p>
                在我的课程中，你不仅能学习到扎实的基础知识，
                还会了解真实项目开发中的挑战与解决思路。我致力于培养学生的批判性思维与解决问题的能力，
                而不仅是考试技能。
              </p>
              <p>
                如果你希望在学习中获得更多行业视角和实战经验，欢迎加入我的课堂！  
                同时也欢迎访问我的 <a href="https://www.youtube.com/@thevaliantfodder" target="_blank" rel="noopener noreferrer">YouTube 频道</a>，
                了解更多实用编程知识和课程讲解。
              </p>
              <p>
                很高兴能与你一同探索技术的世界。Let's grow together!
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
