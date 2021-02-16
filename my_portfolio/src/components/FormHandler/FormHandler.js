import React from "react";
import Form from "../Form/Form";

const FormHandler = () => {
  const handleSubmit = (product) => {
        alert("Shooted");
  };
  return <Form submit={handleSubmit}></Form>;
};

export default FormHandler;
