/* 
The Array.from() method works on array-like objects and iterables. That
means the method can convert any object with a Symbol.iterator property
into an array.
*/

let numbers = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
let numbers2 = Array.from(numbers, (value) => value + 1);
console.log(numbers2); // 2,3,4

/* 
Because the numbers object is an iterable, you can pass numbers directly
to Array.from() to convert its values into an array. The mapping function
adds 1 to each number, so the resulting array contains 2, 3, and 4 instead
of 1, 2, and 3.
*/