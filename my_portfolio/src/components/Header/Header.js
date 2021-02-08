import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Styles = styled.div`
  header {
    display: none;
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
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-weight:bold;
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
