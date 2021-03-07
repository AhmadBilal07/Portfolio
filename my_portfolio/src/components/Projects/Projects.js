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
    scroll-margin-top: 450px !important;
    scroll-padding-top: 170px !important;
    display: flex !important;
    flex-wrap: wrap-reverse;
    min-height:70vh;
    justify-content: flex-start;
    padding-left:5%;
    background: url("assets/blog-svg-svg (1).svg");
    background-position: right;
    background-size: 32vw;
    background-repeat: no-repeat;
    @media only screen and (max-width: 600px) {
      background: none;
    }
  }
  #projectsSection {
    
    padding-top: 65px; 
    margin-top: -65px;
  visibility: hidden; 
  }
  #projectsSectionLeft {
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  #projectsSectionLeft .project {
    padding: 10px;
  }
  #projectsSectionRight {
    flex: 1;
    min-width: 35%;
    @media only screen and (max-width: 600px) {
      min-width: 100%;
    }
  }
  #projectsSectionRight img {
    z-index: -1;
    content: url("assets/blog-svg-svg (1).svg");
    content-position: right;
    width: 120%;
    float: right;
    @media only screen and (max-width: 600px) {
      width: 80%;
      float: left !important;
    }
  }

 
`;

const Projects = () => {
  return (
    <Styles>
      <h1 id="projects" >PROJECTS</h1>
      <section id="projectsSection">
        <Fade bottom={true} duration={1000} delay={500} distance="30px">
          {/* <section id="projectsSectionLeft"> */}
            <Project
              class="project"
              title="CPO Outlets"
              link="https://www.cpooutlets.com/"
              img= {process.env.PUBLIC_URL + '/assets/CPO-svg.svg'}
            ></Project>
            <Project
              class="project"
              title="Burger Builder"
              img=  {process.env.PUBLIC_URL + '/assets/burger1.svg'}
            ></Project>
            <Project
              class="project"
              title="Face Scope"
              link="https://facescope.herokuapp.com/"
              img={process.env.PUBLIC_URL + '/assets/faceScope.png'}
            ></Project>
            
          {/* </section> */}
        </Fade>
        {/* <section id="projectsSectionRight">
          <img></img>
        </section> */}
      </section>
    </Styles>
  );
};

export default Projects;
