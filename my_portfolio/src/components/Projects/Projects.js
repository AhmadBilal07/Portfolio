import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import Project from "./project/project";

const Styles = styled.div`
  #projectsSection {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
  }
  #projectsSectionLeft {
    diplay: flex;
    flex-flow: wrap;
    alignitems: center;
    justifycontent: center;
    flex-direction:row;
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
    flex-wrap: wrap;
  }
`;

const Projects = () => {
  return (
    <Styles>
      <section id="projectsSection">
        <h1>Projects</h1>
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
