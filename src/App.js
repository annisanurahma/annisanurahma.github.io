import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* ===== Header / Hero ===== */}
      <header className="hero">
        <img
          src="https://via.placeholder.com/150"
          alt="Annisa Nurahmah"
          className="profile-img"
        />
        <h1>Annisa Nurahmah</h1>
        <p className="tagline">Website Developer Enthusiast | Backend & Frontend</p>
        <div className="contact-links">
          <a href="mailto:annisa.nurahmah04@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/annisa-nurahmah-387b08272/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/annisanurahma" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </header>

      {/* ===== About ===== */}
      <section className="section about">
        <h2>About Me</h2>
        <p>
          A highly motivated and detail-oriented final-year Informatics student from Multimedia Nusantara University.
          Passionate about backend web development, API integration, and database management.
          Experienced in real-world projects through internship and coursework, with proven teamwork skills and a commitment to continuous learning.
        </p>
      </section>

      {/* ===== Education ===== */}
      <section className="section">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Universitas Multimedia Nusantara</strong> — Bachelor’s Degree, Informatics (2022 – Present)  
            GPA: 3.84 / 4.00
          </li>
        </ul>
      </section>

      {/* ===== Work Experience ===== */}
      <section className="section">
        <h2>Work Experience</h2>
        <ul>
          <li>
            <strong>Backend Intern</strong> — PT Jaya Santoso Teknologi (Jan 2025 – Jul 2025)
          </li>
          <li>
            <strong>Laboratory Assistant</strong> — UMN (Jan 2025 – Jul 2025)
          </li>
        </ul>
      </section>

      {/* ===== Organizational Experience ===== */}
      <section className="section">
        <h2>Organizational Experience</h2>
        <ul>
          <li>Member — UMN Programming Club</li>
          <li>Technical Developer — LPPM UMN Prof. Hsiao Collab</li>
          <li>Team Member — PKM Rumah Potong Hewan</li>
        </ul>
      </section>

      {/* ===== Projects ===== */}
      <section className="section projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>PHR Oncology App</h3>
            <p>Designed UI for a health record application.</p>
          </div>
          <div className="project-card">
            <h3>MI-TW Connectathon</h3>
            <p>Quality assurance ensuring compliance with FHIR standards.</p>
          </div>
          <div className="project-card">
            <h3>Highway Police Game</h3>
            <p>Unity-based endless runner police chase game.</p>
          </div>
          <div className="project-card">
            <h3>Wi-Fi Hotspot Optimization</h3>
            <p>Genetic Algorithm + AHP to maximize coverage & reduce interference.</p>
          </div>
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section className="section">
        <h2>Skills</h2>
        <p><strong>Languages:</strong> Java, C, C++, JavaScript, HTML, CSS, Python, SQL</p>
        <p><strong>Frameworks:</strong> Spring Boot, React.js, Laravel</p>
        <p><strong>Tools:</strong> GitHub, Docker, Postman, Figma, Unity, VS Code</p>
      </section>

      {/* ===== Certifications ===== */}
      <section className="section">
        <h2>Certifications</h2>
        <ul>
          <li>Introduction To Python — SoloLearn</li>
          <li>Python Intermediate — SoloLearn</li>
          <li>Huawei HCIA-AI V3.5 Course — Huawei</li>
          <li>Figma for UI/UX Design</li>
        </ul>
      </section>

      {/* ===== Achievements ===== */}
      <section className="section">
        <h2>Achievements</h2>
        <ul>
          <li>Full Scholarship on Academic Performance (2024/2025)</li>
          <li>UMN Academic Scholarship Awardee (2024/2025)</li>
        </ul>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Annisa Nurahmah</p>
      </footer>
    </div>
  );
}

export default App;
