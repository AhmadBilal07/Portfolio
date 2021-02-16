import React,{ useState } from 'react'
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
    border: 1px solid #dedede;
    border-radius:10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0 auto;
    max-width: 500px;
    padding: 30px 50px;
  }
 
  input,select {
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
  }
 
  label,option {
    color: #3d3d3d;
    display: block;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
  }
 div {
     padding-bottom:5px;
 }
 
  .submitButton {
    background-color: #6976d9;
    color: white;
    font-family: sans-serif;
    font-size: 14px;
    margin: 20px 0px;
 `;

 const Form = (props) => {
  const [state, setState] = useState({
    name: "",
    category: "",
    price: "",
  });

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <Styles>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.submit(state);
        }}
      >
        <div>
          <label>Name</label>
          <input name="name" onChange={onInputChange} value={state.name} required />
        </div>
        <div>
          <label>Email</label>
          <input name="email" onChange={onInputChange} value={state.email} required type="email" />
        </div>
        <div>
          <label>Message</label>
          <input name="msg" onChange={onInputChange} value={state.msg} type="text" required/>
        </div>
        <input type="submit" className="submitButton" value="Shoot!"/>
      </form>
    </Styles>
  );
};
export default Form;
