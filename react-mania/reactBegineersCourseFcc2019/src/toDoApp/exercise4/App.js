import React from "react";
import ReactDOM from "react-dom";
import styles from "./App.css";

function MyInfo() {
  return (
    <div>
      <h1>exercise 4</h1>
      <p>Lorem ipsum dolor sit amet.</p>
      <ol>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ol>

      <body></body>
    </div>

  );
  
}

const App = () => {
  return ReactDOM.render(<MyInfo />, document.getElementById("root"));
};
export default App;

/*
concept of how we linked css to this file using import command

in css file no export is required
*/
