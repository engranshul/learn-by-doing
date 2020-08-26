import React from "react";
import ReactDOM from "react-dom";
import styles from "./App.css";
import MyInfo from "./components/MyInfo";

const App = () => {
  return ReactDOM.render(<MyInfo />, document.getElementById("root"));
};
export default App;

/*
See how we exported out MyInfo component in components folder
*/
