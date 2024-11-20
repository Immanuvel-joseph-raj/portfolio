import * as React from "react";
import { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./NavBar";
import { useContext } from "react";

export const About = () => {
  const { styles } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ backgroundColor: styles }} className="about-container">
      <h1 data-aos="fade-down" data-aos-duration="1000">
        About Me
      </h1>
      <p data-aos="fade-up" data-aos-duration="1500">Motivated and skilled software developer with 3.5 years of experience in web application development. Proficient in <span className="courses"> Java, TypeScript, JavaScript, HTML, CSS, and Python </span>. Expertise in front-end technologies like <span className="courses"> Angular, React.js, and Bootstrap</span>, coupled with back-end proficiency in <span className="courses"> Spring Framework (Spring Boot), Node.js, and Express.js</span>.
      </p>
      <p data-aos="fade-up" data-aos-duration="1500">
        Experienced in managing relational and non-relational databases <span className="courses"> (MySQL, PostgreSQL, MongoDB)</span> and version control systems <span className="courses"> (Git, GitLab)</span>. Skilled in deploying applications on web servers such as <span className="courses"> Apache Tomcat and Nginx</span>.
      </p><p data-aos="fade-up" data-aos-duration="1500">
        Strong background in testing frameworks <span className="courses"> (JUnit, Mockito, TestNG, Cypress, Jasmine, Karma, Selenium)</span> and ORM tools <span className="courses"> (Hibernate, JPA)</span>. Proficient in implementing security protocols like <span className="courses"> OAuth 2.0 and JWT</span>.
      </p><p data-aos="fade-up" data-aos-duration="1500">
        Passionate about leveraging a diverse technical skill set to build high-quality, scalable, and secure applications while continuously adapting to new tools and technologies. Seeking a challenging role to drive innovation and deliver impactful solutions, and I am confident that my dedication
        and proficiency will allow me to excel in my role and contribute to the
        success of the team.

      </p>   </div>
  );
};
