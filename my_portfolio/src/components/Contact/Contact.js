import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import FormHandler from "../FormHandler/FormHandler";

const Styles = styled.div`
  #contactSection {
    display:flex;
    flex-direction:row;
    min-height:100vh;
    flex-wrap:wrap;
    justify-content: center;
  }
  #contactSectionRight {
    padding-top:5%;
  }
  #contactSectionLeft {
    
    min-height:100px !important;
    margin-bottom: 0;
    min-width:50% !important; 
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: url("assets/email.svg");
    background-position: left;
    background-size: 32vw;
    background-repeat: no-repeat;
  }
`;

const Contact = () => {
  return (
    <Styles>
      <h1>CONTACT ME</h1>
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
