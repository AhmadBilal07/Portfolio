import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import twitterLogo from "./twitterLogo.png";
import upKey from "./top.png";
const Styles = styled.div`
  .anchorTwitter {
    border-radius: 100%;
    padding: 2px;
  }
  .anchorTwitter:hover {
    background: black;
  }
  #twitterLogo {
    width: 15vw;
    height: auto;
  }
  .back-to-top {
    display: none;
    /* Rounded corners */
  }
  .back-to-top.scrolled {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    background-color: white;
    border-style: solid;
    border-color: #0e538c;
    color: white;
    cursor: pointer;
    padding: 5px;
    border-radius: 10%;
  }
  .back-to-top.scrolled:hover {
    border-color: rgb(255, 190, 85, 1);
  }
  .back-to-top.scrolled {
    transition: all 0.5s;
  }
`;

const Footer = () => {
  const [state, setState] = useState({
    scrolled: false,
  });
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 1) {
        setState({ scrolled: true });
      } else {
        setState({ scrolled: false });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Styles>
      <footer className="footer navbar-static-bottom">
        <Link to="hero" smooth duration={1000}>
          <span className={"back-to-top" + (state.scrolled ? " scrolled" : "")}>
              <img src={upKey}></img>
          </span>
        </Link>
        {/* <div className="social-links">
          <hr/>
          <SocialIcon
            url="http://linkedin.com/in/ahmadbilal07"
            target="_blank"
          ></SocialIcon>
          <SocialIcon
            url="http://twitter.com/ahmadbilal07"
            target="_blank"
          ></SocialIcon>
          <SocialIcon
            url="http://github.com/ahmadbilal07"
            target="_blank"
          ></SocialIcon>
        </div> */}
        <p className="footer__text">
          {new Date().getFullYear()}©{" "}
          <a
            href="https://github.com/ahmadbilal07"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahmad Bilal Aslam
          </a>
        </p>
      </footer>
    </Styles>
  );
};

export default Footer;
