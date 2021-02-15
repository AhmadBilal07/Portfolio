import React, {  useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const Styles = styled.div`
  #hero {
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
    background: url("assets/hero_background.svg");
    background-position: right;
    background-size: 50vw;
    background-repeat: no-repeat;
  }
  .hero-title {
    font-size: 3.2vw;
    font-weight: 700;
    margin-bottom: 3.2rem;
    text-align: left;
    color: #272341;
  }
  .hero-cta {
    display: flex;
  }
  .text-color-main {
    background-image: linear-gradient(135deg, #02aab0, #00cdac);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <Styles>
      <section id="hero" className="jumbotron">
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={1000}
          delay={500}
          distance="70px"
        >
          <h1 className="hero-title">
            {"Hi, my name is"}{" "}
            <span className="text-color-main">{"Ahmad Bilal Aslam"}</span>
            <br />
            <Fade bottom={true} duration={1000} delay={1000} distance="30px">
              {"I'm a Software Developer."}
            </Fade>
          </h1>
        </Fade>
      </section>
    </Styles>
  );
};

export default Hero;
