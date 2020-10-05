let values = [1, 2, 3];
let iterator = values[Symbol.iterator]();

console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 2, done: false }"
console.log(iterator.next()); // "{ value: 3, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"

/* 
This is the same process that happens behind the scenes when you’re 
using a for-of loop.'
Because Symbol.iterator specifies the default iterator, you can use it to
detect whether an object is iterable

function isIterable(object) {
return typeof object[Symbol.iterator] === "function";
}

The isIterable() function simply checks whether a default iterator exists
on the object and is a function. The for-of loop does a similar check before
executing.
*/

