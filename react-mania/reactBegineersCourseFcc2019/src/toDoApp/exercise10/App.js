import React from "react";
import ToDoItem from "./components/ToDoItem";
import styling from "./App.css"

function App() {
   return (
     <div class="toDoList">
       <ToDoItem />
       <ToDoItem />
       <ToDoItem />
       <ToDoItem />
     </div>
   );
    
}

export default App;

/* 
concept of defining styles inline in AwesomeCheckbox.js

how in inline styles we used backgroundColor instead of 
background-color

concept of how we applied logic to style sheets in the same
js file and made style a separate object.

concept of how i added properties to object using . and []
annotation
*/
