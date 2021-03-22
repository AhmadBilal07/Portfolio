import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaCaretUp  } from 'react-icons/fa';
import styled from "styled-components";
const Styles = styled.div`
  .back-to-top {
    display: none;
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
    color: #3366cc;
    text-decoration: none;
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
  .footer-links {
    padding-left: 0;
    list-style: none;
  }
  .footer-links li {
    display: block;
  }
  .site-footer .social-icons {
    text-align: center;
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
  .copyright-text a {
    color: #0e538c;
    -webkit-transition: all 0.75s ;
    -o-transition: all 0.75s ;
    transition: all 0.75s ;
  }
  .copyright-text a:hover {
    color: #ffbe55;
    animation: fill 1s forwards;
    text-decoration:none;
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
    .copyright-text {
      float: initial;
    }
    .social-icons li.title {
      display: block;
      margin-right: 0;
      font-weight: 600;
    }
    .angle-up{
      line-height: 38px !important;
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
    color: #0e538c;
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
  .social-icons a.twitter:hover {
    color:#00aced;
    animation: fill 1s forwards;
    
  }
  .social-icons a.linkedin:hover {
    color:#007bb6;
    animation: fill 1s forwards;
  }
  .social-icons a.github:hover {
    color:black;
    animation: fill 1s forwards;
  }
  .angle-up {
    font-size: 1.7em;
    line-height: 43px;
    color: #0e538c;
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
      <footer className="site-footer">
        <Link to="hero" smooth duration={1000}>
          <span className={"back-to-top" + (state.scrolled ? " scrolled" : "")}>
            <p className="angle-up" ><FaCaretUp /></p>
          </span>
        </Link>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2021 Made With 💖 by&nbsp;
                <a href="https://github.com/AhmadBilal07" target="_blank">Ahmad Bilal Aslam</a>.
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <a className="twitter" href="https://twitter.com/AhmadBilal07" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a className="github" href="https://github.com/AhmadBilal07" target="_blank">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
                <li>
                  <a className="linkedin" href="https://www.linkedin.com/in/ahmadbilal07/" target="_blank">
                    <i className="fa fa-linkedin"></i>
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
