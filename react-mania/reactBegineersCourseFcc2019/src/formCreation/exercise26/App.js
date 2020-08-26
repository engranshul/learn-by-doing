import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { firstName: "", lastName: "" };
    this.handleChangeCommon = this.handleChangeCommon.bind(this);
  }

  handleChangeCommon(event) {
    console.log("handing input");
    const { name, value } = event.target;     //destructuring
    this.setState({
      [name]: value,                          //see for key value we have to use []
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="enter your firstname"
          name="firstName" value = {this.state.firstName}  // this just shows whatever in state in textbox..
          onChange={this.handleChangeCommon}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="enter your lastname"
          name="lastName" value = {this.state.lastName}
          onChange={this.handleChangeCommon}
        />
        <br />
        <h3>{this.state.firstName}</h3>
        <h3>{this.state.lastName}</h3>
      </div>
    );
  }
}

export default App;

/* 
In this i learned how i combined two methods into a common method

Also i learnt destructuring concept

*/
