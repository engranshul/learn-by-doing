/*
below code will work fine in browser..when var is used in the 
global scope,it creates a new global variable ,which is a 
property on the global object(window in browsers)
*/
var games ="football";
console.log(window.games); 


/* 
If u use let or const in the global scope, a new binding is created
in the global scope but no property is added to the global object..
This lack of global object modification make let and const safer to
use in the global scope when u dont want to create properties on the
global object..

If we use const in the global scope, a new binding is created
in the global scope and property is added to the global object

*/



