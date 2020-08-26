import React from "react";
import ReactDOM from "react-dom";

class ChildComponent extends React.Component {
  render(props) {
    return (
      <div>
        {this.props.speed > 90 ? (
          <div> Something went wrong </div>
        ) : (
          <div> Everything in the world is fine </div>
        )}
      </div>
    );
  }
}

export default ChildComponent;
