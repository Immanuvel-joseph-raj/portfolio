import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import astronaut from "../images/homeimage.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import gmail from "../images/gmail.png";
import { useEffect } from "react";
import AOS from "aos";
import { ThemeContext } from "./NavBar";
import { useContext } from "react";
function redirectToLink() {
  window.open(
    "https://drive.google.com/file/d/1MDldu12yiwdG_rgC5XX4l4qbk2ssh--U/view?usp=drivesdk"
  );
}

export const Home = () => {
  const { styles } = useContext(ThemeContext);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div style={{ backgroundColor: styles }} className="intro">
      <div className="i-left">
        <div className="i-name">
          <span className="hi" data-aos="fade-down" data-aos-delay="1050">
            Hi 👋, I am
          </span>
          <span className="myname" data-aos="fade-right" data-aos-delay="450">
            IMMANUVELJOSEPHRAJ
          </span>
          <span className="role" data-aos="fade-up" data-aos-delay="1000">
            Full stack developer
          </span>
          <Button onClick={redirectToLink} id="i-btn" variant="outlined">
            Resume
          </Button>
          <div className="i-icons">
            <div onClick={() => window.open("https://github.com/Immanuvel-joseph-raj")}>
              <img src={github} />
              <p>Immanuvel-joseph-raj</p>
            </div>
            <div
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/immanuvel-joseph-raj/"
                )
              }
            >
              <img src={linkedin} />
              <p>Immanuveljosephraj J</p>
            </div>
          </div>
        </div>
      </div>
      <div className="i-right">
        <img className="floating-image" src={astronaut} alt="astronaut" />
      </div>
    </div>
  );
};
