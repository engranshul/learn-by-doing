const obj = {}

/* 
Objects play an elemental role in the JavaScript language. 
They’re used everywhere. They’re often used as collections 
of key/value pairs. However, this is a big limitation of 
using them in this manner: Until symbols existed, object 
keys could only be strings. If we ever attempt to use a
 non-string value as a key for an object, the value will be 
 coerced to a string
*/

obj.name = "anshul";
obj['bar'] = 'bar';
obj[1] = "person";

console.log(obj); // see how 1 will print as string


/* 
see how map solved problem above problem now keys can be numeric 
with the help of map
*/
const testMap = new Map();
testMap.set(1,"anshul");
console.log(testMap);