import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import htmlLogo from "./images/HTML5.png";
import nodejsLogo from "./images/nodejs.png";
import pythonLogo from "./images/python.png";
import cssLogo from "./images/css3.png";
import reactLogo from "./images/react.png";
import mongodbLogo from "./images/mongodb.png";
import jsLogo from "./images/jsLogo.png";
import salesforceLogo from "./images/salesforce.png";
import ScikitLearnLogo from "./images/ScikitLearn.png";
import sqlLogo from "./images/sql.png";
const Styles = styled.div`
  #skillSection {
  display:flex;
  flex-direction:row;
  min-height:100vh;
  }
 
  .skill img {
    width: 5vw;
    height: auto;
  }
  #skillSectionRight {
    diplay: flex;
    flex-wrap: wrap;
    alignItems: center;
    justifyContent: center;
  }
  #skillSectionLeft {
    min-width:50%;
    min-height:100%
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
  } 
  #skillSectionRight h1 {
    padding-top:50px;
  }
  #skillSectionRight span {
    flex: 1 0 21%; /* explanation below */
  margin: 30px 20px;
  height: 100px;
  }
`;

const Skills = () => {
  return (
    <Styles>
      <section id="skillSection">
        <Fade left={true} duration={1000} delay={100} distance="200px">
          <section id="skillSectionLeft"></section>{" "}
        </Fade>
        <Fade bottom={true} duration={1000} delay={500} distance="30px">
          <section id="skillSectionRight">
            <h1>Skills</h1>
            <span className="skill">
              <img src={htmlLogo} />
            </span>
            <span className="skill">
              <img src={cssLogo} />
            </span>
            <span className="skill">
              <img src={jsLogo} />
            </span>
            <span className="skill">
              <img src={nodejsLogo} />
            </span>
            <span className="skill">
              <img src={reactLogo} />
            </span>
            <span className="skill">
              <img src={mongodbLogo} />
            </span>
            <span className="skill">
              <img src={sqlLogo} />
            </span>
            <span className="skill">
              <img src={salesforceLogo} />
            </span>
            <span className="skill">
              <img src={pythonLogo} />
            </span>
            <span className="skill">
              <img src={ScikitLearnLogo} />
            </span>
          </section>
        </Fade>
      </section>
    </Styles>
  );
};
export default Skills;
