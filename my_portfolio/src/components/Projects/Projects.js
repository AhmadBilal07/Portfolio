import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const Styles = styled.div`
  #Projects {
    min-height: 100vh;
    height: 100vh;
    display: flex;
    align-items: center;
    border-bottom: 0px;
    background: white;
    font-weight: 400;
    color: dark-blue;
    padding: 0rem 3.2vw;
    margin-bottom: 0;
    top: 0;
    bottom: 0;
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
      <section id="Projects">
        <h1>Projects</h1>
      </section>
    </Styles>
  );
};

export default Projects;
