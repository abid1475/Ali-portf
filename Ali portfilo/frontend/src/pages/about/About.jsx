// About.jsx
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* Profile Image */}
        <div className="about-img">
          <img 
            src="./public/images/aboutme.png" 
            alt="Profile"
          />
        </div>

        {/* About Content */}
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Hi, I'm <span className="highlight">Ali Imran</span>
            <strong> I’m a Full Stack and WordPress Developer who builds responsive, high-performing, and business-focused web solutions.
              </strong>.   Skilled in React, Next.js, Node.js, 
              MongoDB, PHP, and WordPress, I create custom websites,
               WooCommerce stores, and MERN applications that
               blend clean design with powerful functionality.
          </p>
          <p>
     From custom APIs to speed optimization and Elementor customization, I focus on delivering scalable, secure, and SEO-friendly projects that drive real results.

Clients appreciate my clear communication, attention to detail, and commitment to on-time delivery.
 Let’s collaborate to build something that’s fast, 
 functional, and future-ready.  </p>

          <div className="about-skills">
            <div className="skill-tag">Full Stack Development</div>
            <div className="skill-tag">WordPress</div>
            <div className="skill-tag">MERN Stack</div>
            <div className="skill-tag">Mobile/Web Apps</div>
          </div>

          {/* <button className="about-btn">Download Resume</button> */}
        </div>

      </div>
    </section>
  );
};

export default About;
