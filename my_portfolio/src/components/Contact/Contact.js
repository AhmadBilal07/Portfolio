import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import FormHandler from "../FormHandler/FormHandler";

const Styles = styled.div`
  #contactSection {
    display:flex;
    flex-direction:row;
    min-height:100vh;
  }
  #contactSectionRight {
    width:50%;
    padding-top:5%;
  }
  #contactSectionLeft {
    width:50%;
    min-height:100%
    margin-bottom: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: url("assets/email.svg");
    background-position: left;
    background-size: 35vw;
    background-repeat: no-repeat;
  }
`;

const Contact = () => {
  return (
    <Styles>
      <h1>Contact Me</h1>
      <section id="contactSection">
        <section id="contactSectionLeft"></section>
        <section id="contactSectionRight">
          <FormHandler></FormHandler>
          </section>
        
      </section>
    </Styles>
  );
};

export default Contact;
