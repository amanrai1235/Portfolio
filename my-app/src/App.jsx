import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">AMAN KUMAR RAI</h2>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <a href="/Aman_Resume.pdf" target="_blank">View Resume</a>
          <a href="/Aman_Resume.pdf" download className="resume-btn">Download Resume</a>
        </div>
      </nav>

      <div className="container">

        {/* HERO */}
        <section id="home" className="hero">

  <div className="hero-left">
    <h1>
      Hi, I'm <span>Aman Kumar Rai</span>
    </h1>

    <h2>Aspiring Software Developer & Data Analyst</h2>

    <p>
      Passionate Computer Science undergraduate specializing in
      full-stack web development, Python, and data analytics.
      I enjoy building scalable applications, solving real-world
      problems, and transforming data into meaningful insights.
    </p>

    <div className="hero-buttons">
  <a href="#projects" className="btn primary">
    View Projects
  </a>

  <a href="/Aman_Resume.pdf" target="_blank" className="btn secondary">
    Resume
  </a>

  <a
    href="mailto:aman.kumar.rai1203@gmail.com"
    className="btn secondary"
  >
    Contact Me
  </a>
</div>

    <div className="hero-socials">
      <a href="https://github.com/amanrai1235" target="_blank">GitHub</a>
      <a href="https://www.linkedin.com/in/aman-kumar-rai-b4019b315" target="_blank">LinkedIn</a>
    </div>
  </div>

  <div className="hero-right">
    <img src="/aman.jpg" alt="Aman" />
  </div>

</section>

        {/* ABOUT */}
        <section id="about">
          <h2>About Me</h2>
          <p>
            I am a Computer Science undergraduate who enjoys solving problems through technology and 
            building applications that make everyday tasks simpler. Through academic projects and continuous learning, 
            I have developed skills in programming, web development, and data handling. 
            I am seeking an opportunity to work in a collaborative environment where 
            I can learn, contribute, and grow into a skilled software engineer.
          </p>
        </section>

        {/* SKILLS */}
<section id="skills">
  <h2>Technical Skills</h2>

  <div className="skills-category">
    <h3>Languages</h3>
    <div className="skills">
      <span>Python</span>
      <span>Java</span>
      <span>C</span>
      <span>SQL</span>
    </div>
  </div>

  <div className="skills-category">
    <h3>Web Technologies</h3>
    <div className="skills">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>React.js</span>
    </div>
  </div>

  <div className="skills-category">
    <h3>Python Libraries</h3>
    <div className="skills">
      <span>Pandas</span>
      <span>NumPy</span>
      <span>OpenCV</span>
      <span>Face Recognition</span>
    </div>
  </div>

  <div className="skills-category">
    <h3>Data Analytics</h3>
    <div className="skills">
      <span>Power BI</span>
      <span>Excel</span>
      <span>Data Visualization</span>
    </div>
  </div>

  <div className="skills-category">
    <h3>Core CS</h3>
    <div className="skills">
      <span>DBMS</span>
      <span>Operating Systems</span>
      <span>Computer Networks</span>
      <span>OOP</span>
    </div>
  </div>
</section>

        {/* PROJECTS */}
        <section id="projects">
          <h2>Projects</h2>

          <div className="card">
            <h3>Bunk Pro</h3>
            <p>Smart Attendance Calculator</p>
            <a href="https://bunk-pro.vercel.app/" target="_blank">Live</a>
          </div>

          <div className="card">
            <h3>Notes Summariser</h3>
            <p>AI-based notes summarization tool</p>
            <a href="https://notes-summariser-mu.vercel.app/" target="_blank">Live</a>
          </div>

          <div className="card">
            <h3>Price Comparison Tool</h3>
            <p>Compare product prices efficiently</p>
            <a href="https://price-comparison-tool-self.vercel.app/" target="_blank">Live</a>
          </div>

          <div className="card">
            <h3>Face Recognition Attendance System</h3>
            <p>Offline attendance management using face recognition</p>
          </div>

        </section>

        {/* EDUCATION */}
        <section id="education">
          <h2>Education</h2>

          <div className="edu-card">
            <h3>B.Tech CSE</h3>
            <p>United College of Engineering & Research, Prayagraj</p>
            <span>CGPA: 7.20 (till 6th sem)</span>
          </div>

          <div className="edu-card">
            <h3>12th Standard</h3>
            <p>Springfield Public School, Ambala, Haryana</p>
            <span>CBSE • 2023 • 72.2%</span>
          </div>

          <div className="edu-card">
            <h3>10th Standard</h3>
            <p>Foundation School, Buxar, Bihar</p>
            <span>CBSE • 2021 • 71.6%</span>
          </div>

        </section>

        {/* CONTACT */}
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: aman.kumar.rai1203@gmail.com</p>
          <p>Phone: +91 9801368662</p>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="footer">
        <h2>Aman Kumar Rai</h2>
        <p>Building modern web experiences</p>

        <div className="footer-links">
          <a href="https://github.com/amanrai1235" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/aman-kumar-rai-b4019b315" target="_blank">LinkedIn</a>
          <a href="mailto:aman.kumar.rai1203@gmail.com">Email</a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} Aman Kumar Rai. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
