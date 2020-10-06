function addition() {

  console.log(arguments)
  return Array.from(arguments)
}

console.log('created array is',addition(1,2,3,4,123))


/* 
Converting nonarray objects into actual arrays has always been cumbersome
in JavaScript. For instance, if you have an arguments object (which is
array-like) and want to use it like an array, you’d need to convert it first. To
convert an array-like object to an array in ECMAScript 5, you’d write a function
like the one in this example:

function makeArray(arrayLike) {
var result = [];
for (var i = 0, len = arrayLike.length; i < len; i++) {
result.push(arrayLike[i]);
}
return result;
}
function doSomething() {
var args = makeArray(arguments);
// use args
}

This approach manually creates a result array and copies each item
from arguments into the new array. Although this approach works, it
takes a decent amount of code to perform a relatively simple operation.

*/