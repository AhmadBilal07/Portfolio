import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
const Styles = styled.div`
`;
const Footer = () => {
  return (
    <Styles>
      <footer className="footer navbar-static-bottom">
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <a href="#">Back to top</a>
          </Link>
        </span>
        <div className="social-links"></div>
        <hr />
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
      </footer>
    </Styles>
  );
};

export default Footer;
