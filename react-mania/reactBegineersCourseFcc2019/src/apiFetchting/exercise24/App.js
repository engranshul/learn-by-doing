import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = { apiData: {}, loading: false };
  }

  componentDidMount() {
    console.log("i execute just after component renders on screen");
    this.setState({ apiData: {}, loading: true });                            // state change so render() method will be called

    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
          .then((data) => this.setState({ apiData: data, loading: false }));  // state change so render() method will be called
  }

  render() {
    let text = this.state.loading ? "loading..." : this.state.apiData.name;
    return <h1>{text}</h1>;
  }
}

export default App;

/* 
how to use fetch to get api data..it is global and doesnt require any specific import
fetch method returns Promise

React components automatically re-render whenever there is a change in their state or props.
A simple update of the state, from anywhere in the code, causes all the User Interface (UI)
elements to be re-rendered automatically. However, there may be cases where the render() 
method depends on some other data.

In render method how we abstracted out text to make returned JSX simple
*/
