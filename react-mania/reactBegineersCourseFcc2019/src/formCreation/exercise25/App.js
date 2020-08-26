import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { firstName: "", lastName: "" };
    this.handleChangeForFirstName = this.handleChangeForFirstName.bind(this);
    this.handleChangeForLastName = this.handleChangeForLastName.bind(this);
  }

  handleChangeForFirstName(event) {
    console.log("going to change first name for event", event.target.value);
    let targetValue = event.target.value;   // this saving was necessary 
    this.setState((prevState) => {          //setState is async func so directly setting target value wont work
      return {
        firstName: targetValue,           
        lastName: prevState.lastName,
      };
    });
    console.log("updated first name is", this.state);
  }

  handleChangeForLastName(event) {
    console.log("going to change last name for event", event);
    let targetValue = event.target.value;
    this.setState((prevState) => {
      return {
        firstName: prevState.firstName,
        lastName: targetValue,
      };
    });
    console.log("updated last name is", this.state);
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="enter your firstname"
          name="firstName"
          onChange={this.handleChangeForFirstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="enter your lastname"
          name="lastName"
          onChange={this.handleChangeForLastName}
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
In this we gonna learn how to make forms reactive..that means whenever users type
in form elements..it changes state..instead of waiting for form to Submit

we will use how to use event object to get details about html input types

In next exercise we will combine these two handle change methods into one

*/
