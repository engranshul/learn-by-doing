import React from "react";
import ReactDOM from "react-dom";

class Conditional extends React.Component {

  render(props) {
    console.log("props received is",this.props.loadingStatus)
    if (this.props.loadingStatus) {
      return (
        <div>
          <h1>data has loaded</h1>
        </div>
      );
    }
    return (
      <div>
        <h1>loading data...</h1>
      </div>
    );
  }
}

export default Conditional;
