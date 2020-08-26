import React from "react";
import ReactDOm from "react-dom";

const Product = function (props) {
  return (
    <div>
      <h1>"serialNo": {props.serialNo}</h1>
      <h1>"name": {props.name}</h1>
      <h1>"product": {props.product}</h1>
      <h1>"description": {props.description}</h1>
      <hr />
      <br />
    </div>
  );
};

export default Product;
