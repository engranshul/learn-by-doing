import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import MemeGenerator from "./components/MemeGenerator";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>
          <Header />
          <MemeGenerator />
        </h1>
      </div>
    );
  }
}

export default App;

/* 
learnt how to get response from api and get json out of it using json() method
learnt how to use multiple then in promises
concept of changing image by using form onSubmit()
*/