import React from "react";
import styling from "./ToDoItem.css";

function ToDoItem(props) {
 
  return (
    <div className="toDoItem" style={{ backgroundColor: "pink" }} >
      <input id="checkid" type="checkbox" value="test" checked = {props.completed}/>
  <p className="para">{props.task}</p>
    </div>
  );
}

export default ToDoItem;
