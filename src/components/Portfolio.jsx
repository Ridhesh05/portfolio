import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import profilePic from './second.png';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import {
  SiCplusplus, SiGo, SiDart, SiDjango, SiDocker,
  SiKubernetes, SiExpress, SiPostgresql, SiMysql,
  SiPython, SiJavascript
} from 'react-icons/si';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('WORK');

  const navItems = [
    { id: '00', label: 'WORK' },
    { id: '01', label: 'LINKEDIN' },
  ];

  const externalLinks = {
    LINKEDIN: 'https://linkedin.com/in/ridhesh05',
  };

  const projects = [
    {
      id: 1,
      title: 'Smart Personal Finance Tracker',
      tech: 'Django, Docker, SQLite, React, Tailwind CSS',
      description: 'Personal Finance Tracker App',
      live: false,
      link: 'https://github.com/Ridhesh05/FJ-BE-R2-Ridhesh-Chauhan-IIIT-Pune'
    },
    {
      id: 2,
      title: 'Gas Utility',
      tech: 'Django, Docker, Postgres',
      description: 'Gas Utility App API',
      live: true,
      link: 'https://task-omjh.onrender.com/'
    },
    {
      id: 3,
      title: 'Chat Room',
      tech: 'C++',
      description: 'Chat Room App',
      live: false,
      link: 'https://github.com/Ridhesh05/Chat-Room'
    },
    {
      id: 4,
      title: 'Book Management',
      tech: 'Golang',
      description: 'Book Management App',
      live: false,
      link: 'https://github.com/Ridhesh05/BOOK-MANAGEMENT'
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
      {/* Left Section */}
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
          {/* Navigation Items */}
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

        <div className="social-links">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <div className="link-icons">
            <a href="https://github.com/Ridhesh05" target="_blank" rel="noreferrer">
              <FaGithub className="icon" /> GitHub
            </a>
            <a href="mailto:ridheshchauhan7@gmail.com" target="_blank" rel="noreferrer">
              <FaEnvelope className="icon" /> Email
            </a>
          </div>
        </div>
      </div>

      {/* Right Section (Projects & Skills) */}
      <div className="right-section">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-list">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => window.open(project.link, '_blank')}
              style={{ cursor: 'pointer' }}
            >
              <h3>{project.title}</h3>
              <p className="tech">{project.tech}</p>
              <p>{project.description}</p>
              {project.live && (
                <a
                  href={project.link}
                  className="live-link"
                  onClick={(e) => e.stopPropagation()}
                >
                  👁 Live
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Skills Section */}
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
      </div>

      {/* Custom Cursor */}
      <div className="cursor-dot" id="cursor-dot"></div>
    </div>
  );
}
