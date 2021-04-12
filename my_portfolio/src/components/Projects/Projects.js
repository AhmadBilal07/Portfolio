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
  padding-top: 50px !important; 
  margin-bottom:0px;
}
  #projectsSection .project {
    padding: 10px !important;

  }
  #projectsSection {

    display: flex !important;
    flex-wrap: wrap !important;
    flex-direction:column;
    min-height:80vh;
    justify-content: center;
   
    background: url("assets/blog-svg-svg (1).svg");
    background-position: right;
    background-size: 32vw;
    background-repeat: no-repeat;
  }
 
  #projectsSectionLeft {
    margin-right: 20%;
    padding-left:5%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-left:10%;

  }
  #projectsSectionLeft .project {
    padding: 10px;
  }
  #projectsSectionRight {
    flex: 1;
    width: 35% !important;
    @media only screen and (max-width: 600px) {
      min-width: 100%;
    }
  }


 
`;

const Projects = () => {
  return (
    <Styles>
      <h1 id="projects">PROJECTS</h1>
      <section id="projectsSection">
        <section id="projectsSectionLeft">
          <Fade bottom={true} duration={1000} delay={500} distance="30px">
            <Project
              class="project"
              title="CPO Outlets"
              link="https://www.cpooutlets.com/"
              content="CPO Outlets is America’s leading online retailer for tools & equipment. Developed in Salesforce Commerce Cloud."
              img={process.env.PUBLIC_URL + "/assets/CPO-svg1.svg"}
            ></Project>
            <Project
              class="project"
              title="Meeting Log"
              link="https://meeting-logger07.web.app/"
              content=" A SPA which creates meetings, allows people to check in, and picks random users to award giveaways."
              img={process.env.PUBLIC_URL + "/assets/meeting.svg"}
            ></Project>
            <Project
              class="project"
              title="Burger Builder"
              link="https://ahmadbilal07.github.io/BurgerBuilder/"
              content="A react application where a user can dynamically build a burger, add ingredients and then in the end of course also purchase it. "
              img={process.env.PUBLIC_URL + "/assets/burger2.svg"}
            ></Project>
                        <Project
              class="project"
              title="Firebase Clone"
              link="http://freelancer-firebase-one-page.herokuapp.com/"
              content="A single page template of Google firebase using semantic UI."
              img={process.env.PUBLIC_URL + "/assets/firebase.png"}
            ></Project>
            <Project
              class="project"
              title="Excelcium"
              link="http://excelcium-modern.herokuapp.com/"
              content="A simple redesign of a 2000-era website in plain HTML/CSS using bootstrap developed for a company."
              img={process.env.PUBLIC_URL + "/assets/excelcium-logo.png"}
            ></Project>
            <Project
              class="project"
              title="Face Scope"
              link="https://facescope.herokuapp.com/"
              content="A real time application recording & maintaining trespassers and violators information developed using AWS and Node.js"
              img={process.env.PUBLIC_URL + "/assets/faceScope.png"}
            ></Project>
            {/* <Project
              class="project"
              title="Portfolio Builder"
              link="https://github.com/AhmadBilal07/Portfolio-Builder"
              content=" A react application which enables people to develop a portfolio website by simply connecting with LinkedIn."
              img={process.env.PUBLIC_URL + "/assets/support-team1.svg"}
            ></Project> */}
          </Fade>
        </section>
      </section>
    </Styles>
  );
};

export default Projects;
