import React from "react";
import styled from "styled-components";
import FormHandler from "../FormHandler/FormHandler";

const Styles = styled.div`
  #contactSection {
    display:flex;
    flex-direction:row;
    min-height:100vh;
    flex-wrap:wrap;
    justify-content: center;
    margin-top: -50px;
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
  h1 {
    padding-top: 0% !important; 
    font-family: 'Roboto', sans-serif; !important;
    font-weight: normal;
    color:#0E538C;
    padding-top: 60px !important; 
  }
`;

const Contact = () => {
  return (
    <Styles>
      <h1 id="contact">CONTACT ME</h1>
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
