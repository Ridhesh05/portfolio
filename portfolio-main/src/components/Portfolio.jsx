import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import profilePic from './second.png';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import {
  SiCplusplus, SiGo, SiDart, SiDjango, SiDocker,
  SiKubernetes, SiExpress, SiPostgresql, SiMysql,
  SiPython, SiJavascript
} from 'react-icons/si';
import { SiCodechef, SiCodeforces,SiLeetcode } from 'react-icons/si';


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('WORK');

  const navItems = [
    { id: '00', label: 'WORK' },
    { id: '01', label: 'LINKEDIN' },
  ];

  const externalLinks = {
    WORK: 'https://drive.google.com/file/d/1IXRP2s3W6Nv10oZSwGu8qiY_FRyRIR2H/view?usp=sharing',
    LINKEDIN: 'https://linkedin.com/in/ridhesh05',
  };

  const projects = [
    {
      id: 1,
      title: 'Smart Personal Finance Advisor',
      tech: 'Django · Docker · ARIMA · Chart.js',
      points: [
        'ML-based financial analysis',
        'Forecasting the spending',
        'Auth, expense tracking, interactive dashboard'
      ],
      link: 'https://github.com/Ridhesh05/FJ-BE-R2-Ridhesh-Chauhan-IIIT-Pune'
    },
    {
      id: 2,
      title: 'Real-Time Chat System',
      tech: 'Node.js · Redis · TypeScript',
      points: [
        'Real-time messaging with WebSockets',
        'One-on-one or group chat',
        'Chat across multiple servers'
      ],
      link: 'https://github.com/Ridhesh05/Chat-App'
    },
    {
      id: 3,
      title: 'Insurance Risk Predictor',
      tech: 'React · Django · Scikit-learn',
      points: [
        'Predict insurance risk using ML',
        'User-friendly React interface',
        'Django backend for data processing'
      ],
      link: 'https://github.com/Ridhesh05/Insurance_prediction'
    },
  ];

  const handleNavClick = (label) => {
    setActiveSection(label);
    if (externalLinks[label]) {
      window.open(externalLinks[label], '_blank');
    }
  };

  useEffect(() => {
    const cursor = document.getElementById('cursor-dot');
    const moveCursor = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div className="container">
      <div className="left-section">
        <div>
          <h1 className="title">Hello, I'm<br /> Ridhesh Chauhan</h1>
          <div className="intro-text">
            <p>I'm a <strong>CSE student</strong> passionate about <strong>problem-solving</strong> and building</p>
            <p><strong>robust full-stack applications</strong>. I work with <strong>Django</strong>, <strong>Express.js</strong>, <strong>React</strong>,</p>
            <p><strong>Docker</strong>, and <strong>k8s</strong>, and I love integrating</p>
            <p><strong>mathematical thinking</strong> into real-world solutions.</p>
          </div>
        </div>

        <div className="nav">
          {navItems.map((item) => (
            <div key={item.id} className="nav-item">
              <span className="nav-id">{item.id}</span>
              <span className="nav-line"></span>
              <span
                className={`nav-label ${activeSection === item.label ? 'active' : ''}`}
                onClick={() => handleNavClick(item.label)}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="link-icons-row">
          <a href="https://github.com/Ridhesh05" target="_blank" rel="noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>
          <a href="mailto:ridheshchauhan7@gmail.com" target="_blank" rel="noreferrer">
            <FaEnvelope className="icon" /> Email
          </a>
          <a
            href="https://leetcode.com/u/_Ridhesh_0529/"
            target="_blank"
            rel="noreferrer"
            className="leetcode-badge"
          >
            <SiLeetcode className="icon" />
             LeetCode
          </a>

            <a href="https://www.codechef.com/users/ridhesh" target="_blank" rel="noreferrer">
              <SiCodechef className="icon" /> CodeChef
            </a>

            <a href="https://codeforces.com/profile/rc07" target="_blank" rel="noreferrer">
              <SiCodeforces className="icon" /> Codeforces
            </a>
        </div>
      </div>

           <div className="right-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => window.open(project.link, '_blank')}
            >
              <div className="project-head">
                <h3>{project.title}</h3>
                <p className="tech">{project.tech}</p>
              </div>
              <div className="project-details">
                <ul>
                  {project.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="skills">
          <h2 className="skills-title">Skills & Tools</h2>
          <div className="skills-icons">
            <SiCplusplus title="C++" />
            <SiPython title="Python" />
            <SiJavascript title="JavaScript" />
            <SiGo title="Go" />
            <SiDart title="Dart" />
            <SiDjango title="Django" />
            <SiExpress title="Express" />
            <SiDocker title="Docker" />
            <SiKubernetes title="Kubernetes" />
            <SiPostgresql title="PostgreSQL" />
            <SiMysql title="SQL" />
          </div>
        </div>

        <div className="leetcode-stats-card">
          <div className="leetcode-stats-title">LeetCode Stats</div>
          <div className="leetcode-stats-divider"></div>
          <div className="leetcode-stats-line">🧠 1000+ Problems Solved</div>
          <div className="leetcode-stats-line">🔥 Top 2.65% Global</div>
          <div className="leetcode-stats-line">🥇 338 Easy | 564 Medium | 99 Hard</div>
          
        </div>
      </div>


      <div className="cursor-dot" id="cursor-dot"></div>
    </div>
  );
}
