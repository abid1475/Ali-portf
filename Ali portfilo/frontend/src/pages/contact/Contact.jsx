// Contact.jsx
import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h1 className="contact-title">Contact Me</h1>
      <p className="contact-subtitle">
        Full Stack Developer | WordPress Expert | MERN Stack | Mobile & Web App Developer
      </p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <ul>
            <li><FaEnvelope className="icon" /> yourmail@example.com</li>
            <li><FaPhone className="icon" /> +92 300 1234567</li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub className="icon" /> GitHub
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <h2>Send a Message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
