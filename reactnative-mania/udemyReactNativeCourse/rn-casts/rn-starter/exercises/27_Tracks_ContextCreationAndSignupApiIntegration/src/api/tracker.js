import axios from 'axios';


/* 
So once backend server(signup,signin apis) is on localhost and on 
the same computer we are running our android app..so our app has to 
connect to backend server..so by default app connect to localhost 
using 10.0.2.2 ip.. 
*/
export default axios.create({
  baseURL: 'http://10.0.2.2:3000',
});
