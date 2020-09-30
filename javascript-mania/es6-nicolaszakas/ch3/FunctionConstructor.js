var add = new Function('first','second=first','return first + second');

console.log('result is',add(4));


/* 
Function constructor is infrequently used..the arguments to the constructor
are the parameters for the function and function body, all as strings
*/