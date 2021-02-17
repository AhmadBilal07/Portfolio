import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Styles = styled.div`
  .card {
    width: 30%;  
    background-color: white;
    border-style: solid;
    border-color: #02c3ae;
  }
  .card-title {
    font-size: calc(7px + 1.1vw);
    margin-bottom: 1px;
  }

  .card-text {
    text-align: justify;
    text-decoration: none;
    @media only screen and (max-width: 600px) {
      font-size: calc(5px + 1.1vw);
    }
    font-weight: normal;
  }
  .card img {
    max-width: 150px;
    height: 50px;
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
  }
`;

const Project = (props) => {
  return (
    <Styles>
      <section id="Project" className={props.class}>
        <div class="card">
          <img src={props.img} class="card-img-top" />
          <div class="card-body">
            <a href={props.link} target="_blank">
              <h5 class="card-title">{props.title}</h5>
            </a>
            <p class="card-text">
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
