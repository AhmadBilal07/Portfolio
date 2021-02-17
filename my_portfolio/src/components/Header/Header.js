import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Styles = styled.div`
  header {
    display: none;
    z-index: 999;
  }
  header.scrolled {
    background-color: white;
    position: fixed;
    top: 0;
    width: 100%;
    display: block;
  }
  header a {
    float: left;
    color: #272341;
    text-align: center;
    padding: 5px 3.2vw;
    text-decoration: none;
    font-size:calc(5px + 1.1vw);
    font-weight:normal;
    display:inline-block;

  }
`;

const Header = () => {
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
      <header className={state.scrolled ? "scrolled" : ""}>
        <a>About</a>
        <a>Skills</a>
        <a>Projects</a>
        <a>Contact</a>
      </header>
    </Styles>
  );
};
export default Header;
