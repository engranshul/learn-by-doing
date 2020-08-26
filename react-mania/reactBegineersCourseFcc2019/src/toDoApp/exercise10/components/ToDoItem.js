import React from "react";
import styling from "./ToDoItem.css";

function ToDoItem() {
 
  return (
    <div className="toDoItem" style={{ backgroundColor: "pink" }} >
      <input id="checkid" type="checkbox" value="test" />
      <p className="para">Lorem ipsum dolor sit amet.</p>
    </div>
  );
}

export default ToDoItem;
