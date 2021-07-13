// for using import i have to add type:module in package.json
import axios from 'axios';

interface ToDo {
  id : number,
  completed : boolean
}


axios
  .get('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.data as ToDo)
  .then((json) => {
    let id = json.id;
    let completed = json.completed;
    // json.finished..typescript will check dat finished dont exist in ToDo and throw error
    printTodo(id, completed);
  });

function printTodo(id:number, status:boolean) {
  console.log(`id  : ${id} and status : ${status}`);
}

/* see how we solved probs of chapter 1 by interface and type usage
 in params */
