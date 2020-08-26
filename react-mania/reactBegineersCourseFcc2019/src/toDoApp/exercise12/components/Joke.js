import React from "react";
import ReactDOM from "react-dom";

const Joke = function (props) {
  console.log(props);
  return (
    <div style={{ display: props.ques.question ? "block" : "none" }}>
      <h1 style={{ color: "blue" }}>Questions : {props.ques.question}</h1>
      <h1 style={{ color: "orange" }}>Punchline : {props.ques.punchline}</h1>
      <hr />
    </div>
  );
};

export default Joke;
