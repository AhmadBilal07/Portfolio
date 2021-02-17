import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import Project from "./project/project";

const Styles = styled.div`
  #projectsSection {
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
  }
  #projectsSectionLeft {
    width: 60% !important;
    display:flex !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;
    @media only screen and (max-width: 600px) {
      width: 100% !important;
    }
  }
  #projectsSectionLeft .project {
    margin: 25px;
    min-height: 100px;
  }

  #projectsSectionRight img {
    z-index: -1;
    content: url("assets/blog-svg.svg");
    content-position: right;
    width: 40%;
  }

  h1 {
    padding-top: 0%;
  }
`;

const Projects = () => {
  return (
    <Styles>
      <h1>Projects</h1>
      <section id="projectsSection">
        <Fade bottom={true} duration={1000} delay={500} distance="30px">
          <section id="projectsSectionLeft">
            <Project
              class="project"
              title="CPO Outlets"
              link="https://www.cpooutlets.com/"
              img="https://www.savings.com/images/savings/logo/4214751.png"
            ></Project>
            <Project
              class="project"
              title="Burger Builder"
              img="https://user-images.githubusercontent.com/29265857/43362634-9a4fa826-92c5-11e8-961b-05e20ba8c883.png"
            ></Project>
            <Project
              class="project"
              title="Face Scope"
              link="https://facescope.herokuapp.com//"
              img="https://facescope.herokuapp.com/images/cover.png"
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
