import React, { useState, useEffect } from "react";
import "./Portfolio.css";

import {
  FaGithub,
  FaEnvelope,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiGo,
  SiDart,
  SiDjango,
  SiDocker,
  SiKubernetes,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiJavascript,
  SiRedis,
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
} from "react-icons/si";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("WORK");
  const [showQuote, setShowQuote] = useState(false);

  /* ---------------- NAV ---------------- */

  const navItems = [
    { id: "00", label: "WORK" },
    { id: "01", label: "LINKEDIN" },
    { id: "03", label: "CONTACT" },
  ];

  const externalLinks = {
    WORK: "https://drive.google.com/file/d/1ebRcygO02D0hoRG2CXz5KuDzcCX3iPfH/view?usp=sharing",
    LINKEDIN: "https://linkedin.com/in/ridhesh05",
    CONTACT: "mailto:ridheshchauhan7@gmail.com",
  };

  /* ---------------- PROJECTS ---------------- */

  const projects = [
    {
      id: 1,
      title: "Smart Personal Finance Advisor",
      tech: "Django · Docker · ARIMA · Chart.js",
      points: [
        "ML-based financial analysis",
        "Expense forecasting system",
        "Auth + interactive dashboard",
      ],
      link: "https://github.com/Ridhesh05/FJ-BE-R2-Ridhesh-Chauhan-IIIT-Pune",
    },

    {
      id: 2,
      title: "Real-Time Chat System",
      tech: "Node.js · Redis · TypeScript",
      points: [
        "WebSocket based messaging",
        "One-to-one & group chat",
        "Multi-server architecture",
      ],
      link: "https://github.com/Ridhesh05/Chat-App",
    },

    {
      id: 3,
      title: "Sentinel – Monitoring System",
      tech: "Node.js · Redis · WebSockets · Docker",
      points: [
        "Handles 10k+ events/sec",
        "Live alert dashboard",
        "Containerized deployment",
      ],
      link: "https://github.com/Ridhesh05/Sentinel-AI-Task-Processor",
    },
  ];

  /* ---------------- FUNCTIONS ---------------- */

  const handleNavClick = (label) => {
    setActiveSection(label);

    if (externalLinks[label]) {
      window.open(externalLinks[label], "_blank");
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("ridheshchauhan7@gmail.com");
    alert("Email copied!");
  };

  /* ---------------- CUSTOM CURSOR ---------------- */

  useEffect(() => {
    const cursor = document.getElementById("cursor-dot");

    const moveCursor = (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  /* ================= RENDER ================= */

  return (
    <div className="container">
      {/* ================= LEFT ================= */}

      <div className="left-section">

        {/* Toggle Quote */}

        <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
          <div
            onClick={() => setShowQuote(!showQuote)}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          >
            {showQuote ? (
              <FaToggleOn color="#38bdf8" />
            ) : (
              <FaToggleOff color="#888" />
            )}
          </div>

          {showQuote && (
            <span className="fade-in" style={{ fontStyle: "italic" }}>
              "Dark theme, bright ideas"
            </span>
          )}
        </div>

        {/* Hero */}

        <div>

          <div className="hero-sub">
            <span className="role"><span role="img" aria-label="rocket">🚀</span> Backend & Cloud Engineer</span>
            <span className="status">
              Open to Internships & Full-Time Roles
            </span>
          </div>

          <h1 className="title">
            Hello, I'm <br /> Ridhesh Chauhan
          </h1>

          <div className="intro-text">
            <p>
              Final-year <strong>Computer Science</strong> student specializing
              in <strong> backend systems</strong>,{" "}
              <strong>cloud infrastructure</strong>, and{" "}
              <strong>scalable applications</strong>.
            </p>

            <p>
              Experienced with <strong>Django</strong>,{" "}
              <strong>Node.js</strong>, <strong>React</strong>,{" "}
              <strong>Docker</strong>, <strong>Kubernetes</strong>, and{" "}
              <strong>Redis</strong>.
            </p>

            <p>
              Passionate about building{" "}
              <strong>high-performance systems</strong>.
            </p>
          </div>

          {/* Quick Stats */}


        </div>

        {/* NAV */}

        <div className="nav">
          {navItems.map((item) => (
            <div key={item.id} className="nav-item">

              <span className="nav-id">{item.id}</span>

              <span className="nav-line"></span>

              <span
                className={`nav-label ${activeSection === item.label ? "active" : ""
                  }`}
                onClick={() => handleNavClick(item.label)}
              >
                {item.label}
              </span>

            </div>
          ))}
        </div>

        {/* SOCIAL */}

        <div className="link-icons-row">

          <a href="https://github.com/Ridhesh05" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>

          <a href="mailto:ridheshchauhan7@gmail.com">
            <FaEnvelope className="icon" /> Email
          </a>

          <a href="https://leetcode.com/u/_Ridhesh_0529/" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="icon" /> LeetCode
          </a>

          <a href="https://www.codechef.com/users/ridhesh" target="_blank" rel="noopener noreferrer">
            <SiCodechef className="icon" /> CodeChef
          </a>

          <a href="https://codeforces.com/profile/rc07" target="_blank" rel="noopener noreferrer">
            <SiCodeforces className="icon" /> Codeforces
          </a>

        </div>

      </div>

      {/* ================= RIGHT ================= */}

      <div className="right-section">

        {/* PROJECTS */}

        <h2 className="projects-title">Projects</h2>

        <div className="projects-list">

          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              title="Tap to open project"
              onClick={() => window.open(project.link, "_blank")}
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

        {/* SKILLS */}

        <div className="skills">

          <h2 className="skills-title">Skills & Tools</h2>

          <div className="skills-icons">

            <SiCplusplus />
            <SiPython />
            <SiJavascript />
            <SiGo />
            <SiDart />
            <SiDjango />
            <SiExpress />
            <SiDocker />
            <SiRedis />
            <SiKubernetes />
            <SiPostgresql />
            <SiMysql />

          </div>

        </div>

        {/* LEETCODE */}

        <div className="leetcode-stats-card">

          <div className="leetcode-stats-title">LeetCode Stats</div>

          <div className="leetcode-stats-divider"></div>

          <div className="leetcode-stats-line">
            <span role="img" aria-label="brain">🧠</span> 1000+ Problems Solved
          </div>

          <div className="leetcode-stats-line">
            <span role="img" aria-label="fire">🔥</span> Top 2.65% Global
          </div>

          <div className="leetcode-stats-line">
            <span role="img" aria-label="medal">🥇</span> 338 Easy | 564 Medium | 99 Hard
          </div>

        </div>

        {/* CONTACT */}

        <div className="contact-box">

          <h2>Contact Me</h2>

          <p>
            <span role="img" aria-label="email">📧</span> ridheshchauhan7@gmail.com
            <button onClick={copyEmail} className="copy-btn">
              Copy
            </button>
          </p>

          <p><span role="img" aria-label="Briefcase">💼</span> linkedin.com/in/ridhesh05</p>

          <p><span role="img" aria-label="Octopus">🐙</span> github.com/Ridhesh05</p>

          <p><span role="img" aria-label="Location">📍</span> Pune, India</p>

        </div>

      </div>

      {/* CURSOR */}

      <div className="cursor-dot" id="cursor-dot"></div>

    </div>
  );
}
