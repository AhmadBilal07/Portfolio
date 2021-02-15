import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import htmlLogo from "./images/html.png";
import nodejsLogo from "./images/nodejs.png";
import pythonLogo from "./images/python.png";
import cssLogo from "./images/css.png";
import reactLogo from "./images/react.png";
import mongodbLogo from "./images/mongodb.png";

const Styles = styled.div`
  #SkillSection {
    display: flex;
    margin-bottom: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: url("assets/skills.svg");
    background-position: left;
    background-size: 60vw;
    background-repeat: no-repeat;
    min-height: 100vh;
    height: 100vh;
    width: 100vw;

    diplay: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
  }
  .Skill img {
    width: 5vw;
    height: auto;
  }
`;

const Skills = () => {
  return (
    <Styles>
      <Fade left={true} duration={1000} delay={100} distance="200px">
        <h1>Skills</h1>
        <section id="SkillSection">
        
        
          <Fade bottom={true} duration={1000} delay={700} distance="30px">
            <span className="Skill">
              <img src={htmlLogo} />
            </span>
            <span className="Skill">
              <img src={cssLogo} />
            </span>
            <span className="Skill">
              <img src={nodejsLogo} />
            </span>
            {/* <span className="Skill">
              <img src={pythonLogo} />
            </span> */}
            <span className="Skill">
              <img src={mongodbLogo} />
            </span>
            <span className="Skill">
              <img src={reactLogo} />
            </span>
          </Fade>
        </section>
      </Fade>
    </Styles>
  );
};
export default Skills;
