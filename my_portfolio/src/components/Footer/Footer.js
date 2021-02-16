import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";
import twitterLogo from "./twitterLogo.png"
const Styles = styled.div`
.logoHolder {
	bottom: 15px;
	right: 0;
	height: 20px;
	margin-right: 10px;
	text-align: right;
}
.anchorTwitter {
	border-radius: 100%;
  padding:2px;
}
.anchorTwitter:hover {
	background: black;
}
#twitterLogo {
	width: 15vw;
	height: auto;
}
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
        <div className="logoHolder">
        <SocialIcon   className="anchorTwitter"
          url="http://twitter.com/ahmadbilal07"
          target="_blank"
        ></SocialIcon>
          
        </div>
      </footer>
    </Styles>
  );
};

export default Footer;
