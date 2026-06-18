// // Skills.jsx
// import React from "react";
// import "./Skills.css";

// const Skills = () => {
//   return (
//     <section className="skills-section">
//       <h1 className="skills-title">My Skills</h1>
//       <div className="skills-container">
        
//         <div className="skill-card">
//           <h2>Full Stack Development</h2>
//           <p>
//             Experienced in building scalable web applications with frontend
//             and backend integration using modern frameworks and tools.
//           </p>
//         </div>

//         <div className="skill-card">
//           <h2>WordPress Expert</h2>
//           <p>
//             Skilled in custom themes, plugins, and optimizing WordPress for
//             performance, SEO, and client-specific needs.
//           </p>
//         </div>

//         <div className="skill-card">
//           <h2>MERN Stack Development</h2>
//           <p>
//             Proficient in MongoDB, Express.js, React, and Node.js for
//             creating full-stack web applications with REST APIs and JWT authentication.
//           </p>
//         </div>

//         <div className="skill-card">
//           <h2>Mobile Website Development</h2>
//           <p>
//             Responsive, mobile-first web design with smooth UI/UX using CSS,
//             Tailwind, and React to ensure cross-device compatibility.
//           </p>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Skills;



// Skills.jsx
import React from "react";
import "./Skills.css";
import { FaLaptopCode, FaWordpress, FaMobileAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-container">
        
        <div className="skill-card">
          <FaLaptopCode className="skill-icon" />
          <h2>Full Stack Development</h2>
          <p>
            Experienced in building scalable web applications with frontend
            and backend integration using modern frameworks and tools.
          </p>
        </div>

        <div className="skill-card">
          <FaWordpress className="skill-icon" />
          <h2>WordPress Expert</h2>
          <p>
            Skilled in custom themes, plugins, and optimizing WordPress for
            performance, SEO, and client-specific needs.
          </p>
        </div>

        <div className="skill-card">
          <div className="mern-icons">
            <SiMongodb className="mern-icon" />
            <SiExpress className="mern-icon" />
            <SiReact className="mern-icon" />
            <SiNodedotjs className="mern-icon" />
          </div>
          <h2>MERN Stack Development</h2>
          <p>
            Proficient in MongoDB, Express.js, React, and Node.js for
            creating full-stack web applications with REST APIs and JWT authentication.
          </p>
        </div>

        <div className="skill-card">
          <FaMobileAlt className="skill-icon" />
          <h2>Mobile Website Development</h2>
          <p>
            Responsive, mobile-first web design with smooth UI/UX using CSS,
            Tailwind, and React to ensure cross-device compatibility.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
