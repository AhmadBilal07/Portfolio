import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import Project from "./project/project";

const Styles = styled.div`
  #projectsSection {
    display:flex;
    min-height:100vh;
  }
  #projectsSectionLeft {
    diplay: flex;
    width:50%;
  }
  #projectsSectionRight {
    width:50%;
    min-height:100%
    margin-bottom: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: url("assets/blog-svg.svg");
    background-position: right;
    background-size: 55vw;
    background-repeat: no-repeat;
  }
`;

const Projects = () => {
  return (
    <Styles>
      <h1>Projects</h1>
      <section id="projectsSection">
        <section id="projectsSectionLeft">
          <Project></Project>
          <Project></Project>
          <Project></Project>
          <Project></Project>
        </section>
        <section id="projectsSectionRight"></section>
      </section>
    </Styles>
  );
};

export default Projects;
