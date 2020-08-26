import React from "react";
import ReactDOM from "react-dom";

class Login extends React.Component {
  
  constructor() {
    super();
  }
  render(props) {
    console.log("props received is", this.props.loginStatus);

    let buttonText = this.props.loginStatus
      ? "you have been logged in"
      : "you have been logged out";

    return (
      <div>
        <h3>hello dude..pls use below button to log yourself in/out</h3>
        <button
          onChange={() => {
            console.log("changed");
          }}
          onClick={() => {
            this.props.handleChange();
          }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default Login;
