import React from "react";
import { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "./NavBar";
import { useContext } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const SkillCard = ({ imgSrc, alt, text, value }) => {
  return (
    <div data-aos="flip-left" id="skill-cards">
      <img className="skills-image" src={imgSrc} alt={alt} />
      <p>{text}</p>
      <Box>
        <LinearProgress color="success" variant="determinate" value={value} />
      </Box>
    </div>
  );
};

export const Skills = () => {
  const skillsData = [
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
      text: "JavaScript",
      value: 90,
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      alt: "TypeScript",
      text: "TypeScrript",
      value: 90,
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      alt: "Java",
      text: "Java",
      value: 70,
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg",
      alt: "Angular",
      text: "Angular",
      value: 90,
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
      text: "React",
      value: 80,
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      alt: "SpringBoot",
      text: "SpringBoot",
      value: 70,
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
      text: "Node.js",
      value: 70,
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      alt: "Express",
      text: "Express",
      value: 70,
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "MySQL",
      text: "MySQL",
      value: 80,
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      alt: "MongoDB",
      text: "MongoDB",
      value: 70,
    },

    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      alt: "AWS",
      text: "AWS",
      value: 80,
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Git",
      text: "Git",
      value: 80,
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML5",
      text: "HTML5",
      value: 90,
    },
    {
      imgSrc:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "CSS3",
      text: "CSS3",
      value: 90,
    },

  ];
  

  const { styles } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ backgroundColor: styles }} className="skills-container">
      <div>
        <h2 data-aos="fade-down" data-aos-duration="500" className="skill-heading">
          Skills & Tools
        </h2>
      </div>
      <div className="skill-cards-container">
        {skillsData.map((skill, index) => (
          <SkillCard
            key={index}
            imgSrc={skill.imgSrc}
            alt={skill.alt}
            text={skill.text}
            value={skill.value}
          />
        ))}
      </div>
    </div>
  );
};
