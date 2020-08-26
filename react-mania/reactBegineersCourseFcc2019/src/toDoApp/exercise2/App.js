import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return ReactDOM.render(
    <div>
      <ol>
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ol>
    </div>,
    document.getElementById("root")
  );
};
export default App;

/*
<h1></h1><p></p>..this wont work coz jsx wants a container if more dn one element

JSX wont work if we remove first import even if that import is not used directly
*/
