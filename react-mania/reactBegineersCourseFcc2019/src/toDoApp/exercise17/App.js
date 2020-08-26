import React from "react";
import ToDoItem from "./components/ToDoItem";
import styling from "./App.css";
import toDoData from "./Data";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: toDoData }; // as per tutorial this shd be an object
  }

  render() {
    const toDoComponents = this.state.todos.map((item) => {
      return <ToDoItem task={item.task} completed={item.completed} />;
    });
    return <div>{toDoComponents}</div>;
  }
}

export default App;

/*
concept of keeping todo data in state and then using that data from  state

concept of arrow function and how no "function" keyword is required when 
using them

Return will always happen one time both in case of class component and
function component..others returns are basically of methods like map..
*/
