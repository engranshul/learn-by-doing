import React from "react";
import ToDoItem from "./components/ToDoItem";
import styling from "./App.css";
import toDoData from "./Data";

function App() {

  const toDoComponents = toDoData.map(function (item) {
    return (
      <div>
        <ToDoItem task={item.task} completed = {item.completed} />
      </div>
    );
  });

  // this need to be wrapped in div
  return <div>{toDoComponents}</div>;
}

export default App;

/*
In this we learned how to keep a checkbox checked by reading property 4m props in ToDoItem.js.
However it led to below warning..we will sort this out in future

You provided a `checked` prop to a form field without an `onChange` handler. This will render a
 read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange`
]or `readOnly`.
*/
