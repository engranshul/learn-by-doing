import React, { Component } from "react";
import ReactDOM from "react-dom";
import ChildComponent from "./components/ChildComponent";

class App extends Component {
  constructor() {
    super();
    this.state = { speed: "90kmperhour" };
  }
  render() {
    return (
      <div>
        <ChildComponent speed={this.state.speed} />
      </div>
    );
  }
}

export default App;

/* 
We learned how we can change import and extend Component instead of React.Component..both
ways are valid

React components has a built-in state object. The state object is where you store property
values that belongs to the component. When the state object changes, the component re-renders.

state can be passed to child components as props..

Initial state of component shd be defined in constructor of component
*/
