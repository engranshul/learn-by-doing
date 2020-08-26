import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";

class App extends React.Component {
  constructor() {
    super();
    this.state = { isLoggedIn: true };
    this.changeLoginStatus = this.changeLoginStatus.bind(this);
  }

  changeLoginStatus() {
    console.log("i track login status of user...");
    this.setState((prevState) => {
      return { isLoggedIn: !prevState.isLoggedIn };
    });
    console.log("current state object is", this.state);
  }

  render() {
    return (
      <Login
        loginStatus={this.state.isLoggedIn}
        handleChange={this.changeLoginStatus}
      />
    );
  }
}

export default App;

/* 
Again same concept of passing method from parent to child and then child calling that
to update state

In setState using prevState concept as we do need current loginStatus of user so that
we can toggle it

Passing a refernce of method from parent to child..i mean passing methodName instead
methodName()

*/
