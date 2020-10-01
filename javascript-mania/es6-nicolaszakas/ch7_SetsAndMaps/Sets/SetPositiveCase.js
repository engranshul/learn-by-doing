/* 
ECMAScript 6 adds a Set type that is an ordered list of values without duplicates.
Sets allow fast access to the data they contain, adding a more efficient
manner of tracking discrete values.

Sets don’t coerce values to determine whether they’re the same. That
means a set can contain the number 5 and the string "5" as two separate
items.
*/

let set = new Set();
set.add(5);
set.add("5");
console.log(set.size); // 2


let arrayToSet = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
console.log(arrayToSet.size); // 5

/* 
The Set constructor actually accepts any iterable object as an argument. 
Arrays work because they are iterable by default, as are sets and maps. 
The Set constructor uses an iterator to extract values from the argument. 
*/