import React from "react";
import ReactDOM from "react-dom";
import Conditional from "./components/Conditional";

class App extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }

  // lets fake api call in componentDidMount()
  componentDidMount() {
    setTimeout(() => {
      console.log("ohhh i just waited for 1500 ms");
      this.setState({loading : false})
    }, 1500);
  }

  render() {
    return (
      <div>
        <Conditional loadingStatus = {this.state.loading}/>
      </div>
    );
  }
}

export default App;
/* 
In this i learnt conditional rendering.I also made use of componentDidMount

concept of faking api call in componentDidMount.The componentDidMount() method is called after the 
component is rendered.This is where you run statements that requires that the component is already 
placed in the DOM.


Mounting means putting elements into the DOM.
React has four built-in methods that gets called, in this order, when mounting a component:
1)constructor()
2)getDerivedStateFromProps()
3)render()
4)componentDidMount()
The render() method is required and will always be called, the others are optional and will be called
if you define them.


learnt of how upon changing state in componentDidMount render method gets automatically called

*/
