import React from "react";
import ReactDOM from "react-dom";

function MyApp() {
  return (
    <div>
      <h1>exercise 3</h1>
      <ol>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ol>
    </div>
  );
}

const App = () => {
  return ReactDOM.render(<MyApp />, document.getElementById("root"));
};
export default App;

/* 
concept of functional component..now ReactDOM.render first param 
is lot cleaner

concept of starting component name with uppercase
*/
