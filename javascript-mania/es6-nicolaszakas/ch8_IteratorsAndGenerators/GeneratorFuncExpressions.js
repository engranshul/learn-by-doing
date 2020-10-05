let createIterator = function* (items) {
  for (let i = 0; i < items.length; i++) {
    yield items[i];
  }
};
let iterator = createIterator([1, 2, 3]);
console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 2, done: false }"
console.log(iterator.next()); // "{ value: 3, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"
// for all further calls
console.log(iterator.next()); // "{ value: undefined, done: true }"


/* 
In this code, createIterator() is a generator function expression instead
of a function declaration. The asterisk goes between the function keyword
and the opening parenthesis because the function expression is anonymous.
Otherwise, this example is the same as the previous example, which
also used a for loop.
*/