import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import Project from "./project/project";

const Styles = styled.div`
  #projectsSection {
    display: flex !important;
    flex-wrap: wrap-reverse;
    min-height:100vh;
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

  h1 {
    padding-top: 0%;
  }
`;

const Projects = () => {
  return (
    <Styles>
      <h1>PROJECTS</h1>
      <section id="projectsSection">
        <Fade bottom={true} duration={1000} delay={500} distance="30px">
          <section id="projectsSectionLeft">
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
          </section>
        </Fade>
        <section id="projectsSectionRight">
          <img></img>
        </section>
      </section>
    </Styles>
  );
};

export default Projects;
