/* 
You can use the spread operator in an array literal as many times as you
want, and you can use it wherever you want to insert multiple items from an
iterable. Those items will just appear in order in the new array at the location
of the spread operator. For example
*/

let smallNumbers = [1, 2, 3],
bigNumbers = [100, 101, 102],
allNumbers = [0, ...smallNumbers, ...bigNumbers];

console.log(allNumbers.length); // 7
console.log(allNumbers); // [0, 1, 2, 3, 100, 101, 102]

/* 
Because you can use the spread operator on any iterable, using it is the
easiest way to convert an iterable into an array. You can convert strings into
arrays of characters (not code units) and NodeList objects in the browser
into arrays of nodes.
*/