import React from "react";
import styling from "./ToDoItem.css";

function ToDoItem(props) {
  return (
    <div className="toDoItem" style={{ backgroundColor: "pink" }}>
      <input
        id="checkid"
        type="checkbox"
        value="test"
        // here event is received thats why we cant directly say onChange ={props.handleChange()}
        onChange={(event) => props.handleChange(props.id)}
      />
      <p className="para">{props.task}</p>
    </div>
  );
}

export default ToDoItem;
