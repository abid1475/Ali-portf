// import React from "react";
// import "./Footer.css";
// import { FaGithub } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         {/* Logo */}
//         <h2 className="footer-logo">MyPortfolio</h2>

//         {/* Description */}
//         <p className="footer-text">
//           Fullstack Developer | WordPress | MERN Stack | Mobile / Web Apps
//         </p>

//         {/* Contact */}
//         <p className="footer-contact">
//           📧 <a href="mailto:aliimran.work09@gmail.com">aliimran.work09@gmail.com</a> <br />
//         </p>

//         {/* Social Links */}
//         <div className="footer-social">
//           <a
//             href="https://www.upwork.com/freelancers/~01168849ecf991b071"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link upwork"
//             aria-label="Upwork Profile"
//           >
//             <img
//               src="data:image/png;base64,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"
//               alt="Upwork"
//               className="upwork-logo"
//             />
//           </a>
//           <a
//             href="https://github.com/aliimran09"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link github"
//             aria-label="GitHub Profile"
//           >
//             <FaGithub />
//           </a>
//         </div>

//         {/* Copyright */}
//         <p className="footer-copy">
//           © {new Date().getFullYear()} <span className="brand">MyPortfolio</span>. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
















import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Column - Logo + Description */}
        <div className="footer-column footer-left">
          <img
            src="./public/images/alilogo.jpg"
            alt="Ali Imran Logo"
            className="footer-logo-img"
          />
          <p className="footer-desc">
            From front-end beauty to back-end power, I build scalable, data-driven web solutions that deliver results.
          </p>
        </div>

        {/* Middle Column - Skills / Portfolio */}
        <div className="footer-column footer-middle">
          <h3 className="footer-heading">My Portfolio</h3>
          <ul className="footer-list">
            <li>Fullstack Developer</li>
            <li>WordPress Expert</li>
            <li>MERN Stack Developer</li>
            <li>App Developer</li>
          </ul>
        </div>

        {/* Right Column - Contact + Socials */}
        <div className="footer-column footer-right">
          <h3 className="footer-heading">Contact</h3>
 
         <p className="footer-email">
            📧 <a href="mailto:aliimran.work09@gmail.com">aliimran.work09@gmail.com</a>
          </p>
          <div className="footer-socials">
             <a
            href="https://www.upwork.com/freelancers/~01168849ecf991b071"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link upwork"
            aria-label="Upwork Profile"
          >
            <img
              src="data:image/png;base64,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"
              alt="Upwork"
              className="upwork-logo"
            />
          </a>
          <a
            href="https://github.com/aliimran09"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>
          </div>
              
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} <span className="brand">MyPortfolio</span>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
