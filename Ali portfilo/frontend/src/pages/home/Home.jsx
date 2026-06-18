import React, { useEffect, useState } from "react";
import "./Home.css";
import Footer from "../../commponents/footer/Footer";
import FloatingButton from "../../commponents/FloatingButton";
import About from "../about/About";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

const Home = () => {
  const texts = [
    "Fullstack Developer",
    "WordPress Expert",
    "MERN Stack Specialist",
    "Mobile / WebApp Developer"
  ];

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const word = texts[index];

      if (isDeleting) {
        setCurrentText(word.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setCurrentText(word.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === word.length) {
        setTimeout(() => setIsDeleting(true), 1200); // pause after typing
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((index + 1) % texts.length);
      }
    };

    const speed = isDeleting ? 60 : 120;
    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <section id="home" className="home">
      {/* <FloatingButton /> */}
      
      <div className="home-content">
        <h1>Hello, I'm <span className="highlight">Ali</span></h1>
        <h2>
          I am a <span className="typing">{currentText}</span>
          <span className="cursor">|</span>
        </h2>
        <p>
          Passionate about building scalable websites, mobile apps,
          and modern web solutions.
        </p>
        <div className="btn-group">
  <a href="https://www.upwork.com/freelancers/~01168849ecf991b071" className="btn btn-outline">Hire Me</a>
  <a href="#projects" className="btn">View My Work</a>
</div>
        
      </div>

      <About />
      <Skills />
      <Projects />
      <Contact />
    </section>

  );
};

export default Home;