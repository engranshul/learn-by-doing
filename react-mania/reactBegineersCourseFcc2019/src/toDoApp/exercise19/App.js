import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 }; // this shd be object..dnt do something like this.state =0

    this.handleClickIgnorePrevStateUponUpdatingState = this.handleClickIgnorePrevStateUponUpdatingState.bind(
      this
    );
    this.handleClickConsiderPrevStateUponUpdatingState = this.handleClickConsiderPrevStateUponUpdatingState.bind(
      this
    );
  }
  // method 1
  handleClickIgnorePrevStateUponUpdatingState() {
    console.log("i shd have been clicked earlier");
    this.setState({ count: 1 }); // concept of providing static object wdout considering previous state
  }

  // method 2
  handleClickConsiderPrevStateUponUpdatingState() {
    console.log("i shd have been clicked earlier");
    this.setState((prevState) => {
      return {
        count: prevState.count + 1, // in this we incremented on last state..see we didnt do prevState.count++ to avoid updating prev state
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.count}
        <br />
        <button onClick={this.handleClickIgnorePrevStateUponUpdatingState}>
          Increment
        </button>
        <hr />
        <br />
        {this.state.count}
        <br />
        <button onClick={this.handleClickConsiderPrevStateUponUpdatingState}>
          Increment
        </button>
      </div>
    );
  }
}

export default App;

/* 
Common classic error..
TypeError: Cannot read property 'setState' of undefined
the way to solve it is by adding below line in constructor
this.handleClickIgnorePrevStateUponUpdatingState = this.handleClickIgnorePrevStateUponUpdatingState.bind(this);


I learnt two ways of updating state
a) directly setting object
b) incrementing over prev object

I learnt how state shd be changed only by this.setState and not by doing this.state ="some new value"


concept that for this problem state is shared for both buttons..so an increment action does increment in both
buttons
*/
