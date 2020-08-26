/* 
case 1: SyntaxError: Missing initializer in const declaration
const name;
*/

/* 
case 2:TypeError: Assignment to constant variable.
const input =6;
input =7; 
*/

/* 
case 3: the value a constant holds can be modified if its an object.
Const prevents modification of binding..not of value

const input = {id :1,name :"anshul"}
input.roll =123;
console.log(input); 
*/