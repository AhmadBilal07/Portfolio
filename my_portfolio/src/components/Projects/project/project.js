import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";

const Styles = styled.div`
  .box {
    width: 100%;
    height: 600px;
    background-color: #6a1b9a;
    webkit-transform: skewY(6deg);
    -moz-transform: skewY(6deg);
    -ms-transform: skewY(6deg);
    -o-transform: skewY(6deg);
    transform: skewY(6deg);
    margin:10px;
  }

  .box > * {
    webkit-transform: skewY(-6deg);
    -moz-transform: skewY(-6deg);
    -ms-transform: skewY(-6deg);
    -o-transform: skewY(-6deg);
    transform: skewY(-6deg);
  }

  .card {
    width: 17vw;
    height: 40vh;
  }
  .card-text {
    text-align: justify;
    text-decoration: none;
    font-size: 1vw;
    font-weight: normal;
  }
`;

const Project = () => {
  return (
    <Styles>
      <section id="Project">
        <div class="card">
          <img
            src={"https://www.savings.com/images/savings/logo/4214751.png"}
            class="card-img-top"
          />
          <div class="card-body">
            <a href={"https://www.cpooutlets.com/"} target="_blank">
              <h5 class="card-title">CPO Outlets</h5>
            </a>
            <p class="card-text">
              {" "}
              America's leading online tool retailer. Developed on Saleforce
              Commerce Cloud. I was part of the core team & later support team.
              Worked on Checkout, PLP, PDP and other related components.
            </p>
          </div>
        </div>
      </section>
    </Styles>
  );
};

export default Project;
