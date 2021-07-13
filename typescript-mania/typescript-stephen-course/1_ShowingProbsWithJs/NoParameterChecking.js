// for using import i have to add type:module in package.json
import axios from 'axios';

axios
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.data)
  .then((json) => {
    let id = json.id;
    let completed = json.completed;
    printTodo(completed, id);
  });

function printTodo(id, status) {
  console.log(`id  : ${id} and status : ${status}`)
}

/* see how we interchanged parameter position but still js didnt 
complain */