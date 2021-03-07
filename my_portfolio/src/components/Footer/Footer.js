import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
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
    bottom: 9px;
    right: 30px;
    z-index: 99;
    background-color: white;
    border-style: solid;
    border-color: #0e538c;
    color: white;
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 100%;

  }
  .back-to-top.scrolled:hover {
    border-color: rgb(255, 190, 85, 1);
  }
  .back-to-top.scrolled {
    transition: all 0.5s;
  }
  /*Footer*/
  .site-footer {
    background-color: white;
    box-shadow: 0 1px 10px #777 !important;
    padding: 10px 0 5px;
    font-size: 15px;
    line-height: 35px;

  }
  .site-footer .copyright-text {
    line-height: 40px;
    color:#0e538c;
  }
  .site-footer a {
    color: #737373;
  }
  .site-footer a:hover {
    color: #3366cc;
    text-decoration: none;
  }
  .copyright-text  a:hover {
    color: #ffbe55;
  } 
  .footer-links {
    padding-left: 0;
    list-style: none;
  }
  .footer-links li {
    display: block;
  }
  .footer-links a {
    color: #737373;
  }

  .site-footer .social-icons {
    text-align: right;
  }
  .site-footer .social-icons a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
    background-color: #33353d;
  }
  .copyright-text {
    margin: 0;
    float:left;
  }
  @media (max-width: 991px) {
    .site-footer [class^="col-"] {
      margin-bottom: 30px;
    }
  }
  @media (max-width: 767px) {
    .site-footer {
      padding-bottom: 0;
    }
    .site-footer .copyright-text,
    .site-footer .social-icons {
      text-align: center;
    }
  }
  .social-icons {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .social-icons li {
    display: inline-block;
    margin-bottom: 4px;
  }

  .social-icons a {
    background-color: white !important;
    background-color: white;
    border-style: solid;
    border-width: thin;
    color: #818a91;
    font-size: 16px;
    display: inline-block;
    line-height: 44px;
    width: 44px;
    height: 44px;
    text-align: center;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }
  

  .social-icons.size-sm a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 14px;
  }
  a.angle-up {
    font-size: 34px;
    padding: 5px;
  }
  .social-icons a.twitter:hover {
    color:#00aced;
    border-width: 1.5px;
    line-height: 39.5px;
    
  }
  .social-icons a.linkedin:hover {
    color:#007bb6;
    border-width: 1.5px;
    line-height: 39.5px;
  }
  .social-icons a.github:hover {
    color:black;
    border-width: 1.5px;
    line-height: 39.5px;
  }
  @media (max-width: 767px) {
    .social-icons li.title {
      display: block;
      margin-right: 0;
      font-weight: 600;
    }
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
      <footer class="site-footer">
        <Link to="hero" smooth duration={1000}>
          <span className={"back-to-top" + (state.scrolled ? " scrolled" : "")}>
            <a class="angle-up" href="#">
              <i class="fa fa-angle-up"></i>
            </a>
          </span>
        </Link>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2021 Created With Love by&nbsp;
                <a href="https://github.com/AhmadBilal07" target="_blank">Ahmad Bilal Aslam</a>.
              </p>
            </div>

            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li>
                  <a class="twitter" href="https://twitter.com/AhmadBilal07" target="_blank">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a class="github" href="https://github.com/AhmadBilal07" target="_blank">
                    <i class="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a class="linkedin" href="https://www.linkedin.com/in/ahmadbilal07/" target="_blank">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Styles>
  );
};

export default Footer;
