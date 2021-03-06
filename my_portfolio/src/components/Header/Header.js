import React, { useEffect, useState } from "react";
import styled from "styled-components";
const Styles = styled.div`
  header {
    display: none;
    background-color:white;
    font-family:"arial";
    text-transform:uppercase;
    text-align:center;
    z-index: 999;
    line-height: 3;
  }
  header.scrolled {
    position: fixed;
    top: 0;
    width: 100%;
    display: block;
  }
#mainNav ul {
  list-style: none;
  margin:0px;
  padding-inline-start: 0px;
  box-shadow: 0 1px 10px #777 !important;
  @media only screen and (max-width: 600px) {
  //  margin-left:-30px;
  }
}
#mainNav ul li {
  display: inline-block;
	display:inline;
	margin: 20px;
  @media only screen and (max-width: 600px) {
    margin: 10px;
  }
}
#mainNav ul li a {
  padding-bottom: 5px;
  text-decoration: none;
  color:#0E538C;
}
#mainNav ul li a,
#mainNav ul li a:after,
#mainNav ul li a:before {
  transition: all .5s;
}
#mainNav ul li a:hover {
  color:#E34F25;
}

/* stroke */
#mainNav.stroke ul li a
{
  position: relative;
}
#mainNav.stroke ul li a:after,
#mainNav ul li a:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  //margin: auto;
  width: 0%;
  content: '.';
  color: transparent;
  background: #0E538C;
  height: 1px;
}
#mainNav.stroke ul li a:hover:after {
  width: 100%;
}

#mainNav ul li a {
  transition: all 0.75s;
}

#mainNav ul li a:after {
  text-align: left;
  content: '.';
  margin: 0;
  opacity: 0;
}
#mainNav ul li a:hover {
  color: #FFBE55;
  z-index: 1;
}
#mainNav ul li a:hover:after {
  z-index: -10;
  animation: fill 1s forwards;
  opacity: 1;
}
#mainNav {
  height:48px !important;

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
        <nav className="stroke" id="mainNav">
          <ul>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#projectsSection">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            </ul>
        </nav>
      </header>
    </Styles>
  );
};
export default Header;
