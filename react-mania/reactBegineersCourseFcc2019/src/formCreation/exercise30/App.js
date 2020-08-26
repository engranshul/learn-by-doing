import ReactDOM from "react-dom";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { flag: "true" };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit() {
    alert("submit called")
    console.log("submit called")
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h2>welcome to page</h2>
          <h5>{this.state.flag}</h5>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;

/* 
In html5 in an button is found in form..it works same like old way :
input type = submit
*/
