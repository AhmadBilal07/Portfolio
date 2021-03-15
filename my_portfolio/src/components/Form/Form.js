import React, { useState } from "react";
import styled from "styled-components";

const Styles = styled.div`
  padding: 20px;
  h1 {
    border-bottom: 1px solid white;
    color: #3d3d3d;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    padding: 10px;
    text-align: center;
  }

  form {
    background: white;
    border: 1px solid #0e538c;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 30px 50px;
  }

  input,
  select {
    border: 1px solid #0e538c;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
  }
  input:focus {
    border: 1px solid #ffbe55 !important;
    outline: none !important;
  }
  input[type="text"] {
    height: 60px;
  }

  label,
  option {
    color: #0e538c;
    display: block;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  div {
    padding-bottom: 5px;
  }

  .submitButton {
    background-color: #337AB7;
    color: white;
    font-family: sans-serif;
    font-size: 14px;
    margin: 20px 0px;
    transition: all 0.7s;
  }
  .submitButton:hover {
    color: #ffbe55;
  }
`;

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }
  Styles = styled.div`
  padding: 20px;
  h1 {
    border-bottom: 1px solid white;
    color: #3d3d3d;
    font-family: sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    padding: 10px;
    text-align: center;
  }

  form {
    background: white;
    border: 1px solid #0e538c;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 30px 50px;
  }

  input,
  select {
    border: 1px solid #0e538c;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
  }
  input:focus {
    border: 1px solid #ffbe55 !important;
    outline: none !important;
  }
  input[type="text"] {
    height: 60px;
  }

  label,
  option {
    color: #0e538c;
    display: block;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  div {
    padding-bottom: 5px;
  }

  .submitButton {
    background-color: #0e538c;
    color: white;
    font-family: sans-serif;
    font-size: 14px;
    margin: 20px 0px;
    transition: all 0.7s;
  }
  .submitButton:hover {
    color: #ffbe55;
  }
`;
  render() {
    const { status } = this.state;
    return (
      <Styles>
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xleoqdag"
        method="POST"
      >
        <div>
          <label>Name</label>
          <input
            name="name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            name="email"
            required
            type="email"
          />
        </div>
        <div>
          <label>Message</label>
          <input
            name="msg"
            type="text"
            required
          />
        </div>
        {status === "SUCCESS" ? <p>Thanks!</p> : <input type="submit" className="submitButton" value="Shoot!" />}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form></Styles>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
