import React, { useState } from "react";
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">       
       <a href="/" className="logo"><img src="./public/images/alilogo.jpg" alt="" /></a>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href='/'>Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

     
      <div 
        className={`menu-toggle ${isOpen ? "open" : ""}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
