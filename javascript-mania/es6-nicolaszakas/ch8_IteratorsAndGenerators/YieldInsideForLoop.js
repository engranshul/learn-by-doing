function* createIterator(items) {
  for (let i = 0; i < items.length; i++) {
    yield items[i];
  }
}
let iterator = createIterator([1, 2, 3]);
console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 2, done: false }"
console.log(iterator.next()); // "{ value: 3, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"
// for all further calls
console.log(iterator.next()); // "{ value: undefined, done: true }"

/* 
Generator functions are an important ECMAScript 6 feature,
and because they are just functions, you can use them in all the same
places. The rest of this section focuses on other useful ways to write
generators.

You can use the yield keyword only inside generators. Using yield anywhere
else is a syntax error, including in functions that are inside generators, 
such as:

function *createIterator(items) {
items.forEach(function(item) {
// syntax error
yield item + 1;
});
}

Even though yield is technically inside the createIterator() function, this
code is a syntax error because yield cannot cross function boundaries. The
yield keyword is similar to return in that a nested function cannot return a
value for its containing function.
*/