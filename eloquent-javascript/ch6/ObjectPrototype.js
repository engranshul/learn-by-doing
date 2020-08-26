let arr =[1,2,3,4,5,6]
let dummy = {"class":"first"}
let foo="mnop"

console.log(Object.getPrototypeOf(arr));
console.log(Object.getPrototypeOf(dummy));

// output of both of below lines will be same
console.log(Object.getPrototypeOf(foo));
console.log(Object.getPrototypeOf("rose"));

/* 
Object.getPrototypeOf(obj)
The prototype of the given object. If there are no 
inherited properties, null is returned.

Javascript objects : In addition to their set of properties
,most objects also have a prototype.A prototype is another 
object that is used as a fallback source of properties.

When an object gets a request for a property that its does
not have,its prototype will be searched for the property,then
the prototype's prototype and so on..

Prototype relations of javascript form a tree shaped structure
Many objects dont directly have Object.prototype as their 
prototype

Functions drive from Function.prototype
Arrays drive from Array.prototype


Default methods like toString() are provided by root prototypes
*/

