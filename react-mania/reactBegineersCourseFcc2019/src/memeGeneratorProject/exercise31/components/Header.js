import React from "react";
import ReactDOM from "react-dom";

function Header() {
  return (
    <div>
          <h3 style = {{ backgroundColor : "green",textAlign : "center"}}>Meme generator</h3>
    </div>
  );
}

export default Header;

/* 
Header will be a component that just displays..no state..so it can be
a functional component
*/
