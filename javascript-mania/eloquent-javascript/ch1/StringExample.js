let str1 ='lake';
console.log(typeof(str1)); // string primitive
/* 
when we use a dot notation with string primitive
javascript engine internally wraps it with a string
object..thats y u will be able to use functions(trim,
replace) on it..
*/
let str2 = new String('lake');
console.log(typeof(str2)); // object

/* 
more about js strings :
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
*/