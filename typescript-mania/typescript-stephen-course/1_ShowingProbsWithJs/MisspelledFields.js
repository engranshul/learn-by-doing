// for using import i have to add type:module in package.json
import axios from "axios"

axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.data)
  .then(json => console.log(json.ID))

/* 
see how we used wrong spelling of ID but still js didnt help us
*/
