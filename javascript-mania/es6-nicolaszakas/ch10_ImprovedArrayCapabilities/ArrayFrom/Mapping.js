let arr = Array.from([1, 0, 5, 2], (x) => x * 10);
console.log(`updated array is`,arr)

console.log(`******third argument usage********`)

let helper = {
  diff: 1,
  add(value) {
    return value + this.diff;
  },
}

function translate() {
return Array.from(arguments, helper.add, helper); // perfect example to bind this by using 3rd parameter
}

let numbers = translate(1, 2, 3);
console.log(numbers); // 2,3,4


/* 
Syntax : Array.from(arrayLike [, mapFn [, thisArg]])

arrayLike
An array-like or iterable object to convert to an array.

mapFn Optional
Map function to call on every element of the array.

thisArg Optional
Value to use as this when executing mapFn.
*/