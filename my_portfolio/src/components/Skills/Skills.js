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
import bootstrap from "./images/bootstrap.png";
import materialize from "./images/materialize.png";
import firebase from "./images/firebase.png";
const Styles = styled.div`
  #skillSection {
    display:flex !important;
    flex-direction:row;
   
    flex-wrap:wrap;
    justify-content: center;
  }
  h1 {
    padding-top: 60px !important; 
    font-family: 'Roboto', sans-serif; !important;
    font-weight: normal;
    color:#0E538C;
  }
 
  .skill img {
    min-width:50px;
    width: 5vw;
    height: auto;
  }
  

  #skillSectionRight {
    width:40% !important; 
    padding-top:8%;
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
  .skill img{
    transition: all 0.2s ease-in-out;
    padding:5px;
  }
  .skill img:hover {
    transform: scale(1.5);
   
  }
  #skillSectionRight h1 {
    padding-top:50px;
  }
  #skillSectionRight span {
    margin:  25px;
    min-height: 100px;
  }
  @media (max-width: 767px) {  
    #skillSectionLeft {
      min-height: 200px !important;
      text-align: center;
    }
`;

const Skills = () => {
  return (
    <Styles>
      <div id="skillContainer">
        <h1 id="skills">SKILLS</h1>
        <section id="skillSection">
          <Fade left={true} duration={1000} delay={100} distance="200px">
            <section id="skillSectionLeft">
              <img alt=""></img>
            </section>
          </Fade>

          <Fade bottom={true} duration={1000} delay={500} distance="30px">
            <section id="skillSectionRight">
              <span className="skill">
                <img src={htmlLogo} title="HTML" alt="HTML" />
              </span>
              <span className="skill">
                <img src={cssLogo} title="CSS 3" alt="CSS 3" />
              </span>
              <span className="skill">
                <img src={jsLogo} title="JavaScript" alt="JavaScript" />
              </span>
              <span className="skill">
                <img src={nodejsLogo} title="Node.js" alt="Node.js" />
              </span>
              <span className="skill">
                <img src={reactLogo} title="ReactJs" alt="ReactJs" />
              </span>
              <span className="skill">
                <img
                  src={materialize}
                  title="Materialize Css"
                  alt="Materialize Css"
                />
              </span>
              <span className="skill">
                <img src={bootstrap} title="Bootstrap" alt="Bootstrap" />
              </span>
              <span className="skill">
                <img src={firebase} title="Firebase" alt="Firebase" />
              </span>

              <span className="skill">
                <img src={mongodbLogo} title="MongoDB" alt="MongoDB" />
              </span>
              <span className="skill">
                <img src={sqlLogo} title="SQL" alt="SQL" />
              </span>
              <span className="skill">
                <img
                  src={salesforceLogo}
                  title="Salesforce Commerce Cloud"
                  alt="Salesforce Commerce Cloud"
                />
              </span>
              <span className="skill">
                <img src={pythonLogo} title="Python" alt="Python" />
              </span>
              <span className="skill">
                <img
                  src={ScikitLearnLogo}
                  title="SciKit Learn"
                  alt="SciKit Learn"
                />
              </span>
            </section>
          </Fade>
        </section>
      </div>
    </Styles>
  );
};
export default Skills;
