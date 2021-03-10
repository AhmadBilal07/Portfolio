import React from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import Project from "./project/project";

const Styles = styled.div`
h1 {
  padding-top: 0% !important; 
  font-family: 'Roboto', sans-serif; !important;
  font-weight: normal;
  color:#0E538C;
  padding-top: 60px !important; 
}
  #projectsSection .project {
    padding: 10px !important;

  }
  #projectsSection {

    display: flex !important;
    flex-wrap: wrap !important;
    flex-direction:column;
    min-height:80vh;
    justify-content: center;
   
    background: url("assets/blog-svg-svg (1).svg");
    background-position: right;
    background-size: 32vw;
    background-repeat: no-repeat;
  }
 
  #projectsSectionLeft {
    margin-right: 20%;
    padding-left:5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left:10%;

  }
  #projectsSectionLeft .project {
    padding: 10px;
  }
  #projectsSectionRight {
    flex: 1;
    width: 35% !important;
    @media only screen and (max-width: 600px) {
      min-width: 100%;
    }
  }


 
`;

const Projects = () => {
  return (
    <Styles>
      <h1 id="projects">PROJECTS</h1>
      <section id="projectsSection">
        <section id="projectsSectionLeft">
          <Fade bottom={true} duration={1000} delay={500} distance="30px">
            <Project
              class="project"
              title="CPO Outlets"
              link="https://www.cpooutlets.com/"
              img={process.env.PUBLIC_URL + "/assets/CPO-svg.svg"}
            ></Project>
            <Project
              class="project"
              title="Burger Builder"
              img={process.env.PUBLIC_URL + "/assets/burger1.svg"}
            ></Project>
            <Project
              class="project"
              title="Face Scope"
              link="https://facescope.herokuapp.com/"
              img={process.env.PUBLIC_URL + "/assets/faceScope.png"}
            ></Project>
            <Project
              class="project"
              title="Burger Builder"
              img={process.env.PUBLIC_URL + "/assets/burger1.svg"}
            ></Project>
            <Project
              class="project"
              title="Portfolio Builder"
              link="https://facescope.herokuapp.com/"
              img={process.env.PUBLIC_URL + "/assets/support-team.svg"}
            ></Project>
          </Fade>
        </section>

        {/* <section id="projectsSectionRight">
          <img></img>
        </section> */}
      </section>
    </Styles>
  );
};

export default Projects;
