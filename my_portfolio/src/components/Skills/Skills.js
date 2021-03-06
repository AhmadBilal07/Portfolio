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
    display:flex !important;
    flex-direction:row;
    min-height:100vh;
    flex-wrap:wrap;
    justify-content: center;
  }
 
  .skill img {
    min-width:50px;
    width: 5vw;
    height: auto;
  }
  

  #skillSectionRight {
    width:40% !important; 
    padding-top:10%;
    flex-direction: row;
    @media only screen and (max-width: 600px) {padding-top:0%;
      width:100% !important;}
    
  }
  #skillSectionLeft img{
    content: url("assets/skills-svg.svg");
    content-position: left;
    content-size: 60vw;
    content-repeat: no-repeat;
  } 
  #skillSectionRight h1 {
    padding-top:50px;
  }
  #skillSectionRight span {
    margin:  25px;
    min-height: 100px;
  }
`;

const Skills = () => {
  return (
    <Styles>
      <h1>SKILLS</h1>
      <section id="skillSection">
        <Fade left={true} duration={1000} delay={100} distance="200px">
          <section id="skillSectionLeft">
            <img></img>
          </section>
        </Fade>

        <Fade bottom={true} duration={1000} delay={500} distance="30px">
          <section id="skillSectionRight">
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
