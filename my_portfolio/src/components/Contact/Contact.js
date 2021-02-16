import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const Styles = styled.div`
  #Contact {
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
    background: url("assets/email.svg");
    background-position: left;
    background-size: 40vw;
    background-repeat: no-repeat;
  }
`;

const Contact = () => {
  return (
    <Styles>
      <h1>Contact Me</h1>
      <section id="Contact"></section>
    </Styles>
  );
};

export default Contact;
