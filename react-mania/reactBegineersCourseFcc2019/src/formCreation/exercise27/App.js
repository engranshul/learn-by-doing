import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
        <input type="radio" checked={true}/>
        <br/>
        <input type="radio" checked= {false}/>
      </div>
    );
  }
}

export default App;

/* 
Above example generates below error is console as we have hardcoded checked property to true/false for input type
radiobutton 

Error:
You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. 
If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.
*/