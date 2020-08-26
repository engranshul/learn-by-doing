import React from "react";
import ToDoItem from "./components/ToDoItem";
import styling from "./App.css";
import toDoData from "./Data";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: toDoData }; // as per tutorial this shd be an object
    this.handleChange= this.handleChange.bind(this)
  }

  handleChange(id) {
    console.log("i have been changed. My id is ",id);

    let updatedTodos=this.state.todos.map(function name(item) {
      if(item.id === id) {
         console.log("match found..my current completed status is",item.completed)
         item.completed = !item.completed;
      }
      return item;
    })
    this.setState(updatedTodos);  // see how again we updated state using this.setState()
  }

  render() {
    const toDoComponents = this.state.todos.map((item) => {
      return <ToDoItem task={item.task} completed={item.completed} handleChange ={this.handleChange} id ={item.id}/>;
    });
    return <div>{toDoComponents}</div>;
  }
}

export default App;

/*
Following steps i performed :

1) created a method handleChange in App.js
2) now handleChange has to be called whenever checkBox is changed..but checkBox is defined
in child component name ToDoItem
3) so we pass this handleChange method as props in ToDOItem
4) So in ToDoItem i have defined checkbox so whenever checkbox is clicked..in checkbox's onChange we call handleChange
that has been passed through props
5) this way handleChange method gets notified and it updates state of checkbox that has been updated..

*/
