import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { gender: "random" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // Not all input types have value property..do check that by exploring 
    // event.target for that input type..
    const { value } = event.target;
    console.log("value is", value);
    this.setState({ gender: value });
    setTimeout(() => {
      console.log("current gender state is", this.state);
    }, 2000);
  }

  render() {
    return (
      <div>
        <h1>hello world</h1>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={this.handleChange}
          />
          male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={this.handleChange}
          />
          female
        </label>
        <h1>current state is {this.state.gender}</h1>
      </div>
    );
  }
}

export default App;

/* 
In this we will learn about radio button :

In this we learnt about how setState works async and console.log just after
it wasnt printing updated state..so just to see updated state we introduced
sleep just setTimeout()..it worked fine after that..

*/
