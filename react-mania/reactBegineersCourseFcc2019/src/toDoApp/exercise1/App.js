import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return ReactDOM.render(<h1>exercise 1</h1>, document.getElementById("root"));
};
export default App;

/* 
there are two render methods generally 
one is inside class Xyz extends React.Component {}
another is ReactDOM.render()

See how we use ReactDOM.render directly by wrapping it 
in a function..ReactDOM.render can work independly this 
way

ReactDOM.render(what,where)..see how in what we have defined JSX
*/
