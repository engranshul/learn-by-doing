console.log(`****find and findIndex methods*******`)
let arr = [-1,10,1,3,45,2,7,3]

/* 
below line wont work as find requires an function
console.log(arr.find(3)) */

console.log(arr.find(x=> x>3))
console.log(arr.findIndex((x) => x > 44));

console.log(`*****fill method**************`)

let numbers = [1, 2, 3, 4];
numbers.fill(1);
console.log(numbers.toString()); // 1,1,1,1

console.log(`*****copy within**************`);
let numbers = [1, 2, 3, 4];
// paste values into array starting at index 2
// copy values from array starting at index 0
numbers.copyWithin(2, 0);
console.log(numbers.toString()); // 1,2,1,2


/* 
Prior to ECMAScript 5, searching through arrays was cumbersome because
there were no built-in methods for doing so. ECMAScript 5 added the
indexOf() and lastIndexOf() methods, which finally allowed developers to
search for specific values inside an array. These two methods were a big
improvement, yet they were still fairly limited because you could search
for only one value at a time. For example, if you wanted to find the first
even number in a series of numbers, you’d need to write your own code
to do so. ECMAScript 6 solved that problem by introducing the find() and
findIndex() methods.

Both find() and findIndex() accept two arguments: a callback function
and an optional value to use for this inside the callback function.

The fill() method fills one or more array elements with a specific value.
When passed a value, fill() overwrites all the values in an array with that
value.


The copyWithin() method is similar to fill() in that it changes multiple
array elements at the same time. However, instead of specifying a single
value to assign to array elements, copyWithin() lets you copy array element
values from the array. To accomplish that, you need to pass two arguments
to the copyWithin() method: the index where the method should start filling
values and the index where the values to be copied begin.
*/