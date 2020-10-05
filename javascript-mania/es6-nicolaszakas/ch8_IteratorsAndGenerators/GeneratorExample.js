function* createIterator() {
  yield 1;
  yield 2;
  yield 3;
}
let iterator = createIterator();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);


/* 
ECMAScript 6
also provides generators, which make creating iterator objects much simpler.

A generator is a function that returns an iterator. Generator functions are
indicated by an asterisk character (*) after the function keyword and use the
new yield keyword.

Perhaps the most interesting aspect of generator functions is that
they stop execution after each yield statement. For instance, after yield 1
executes in this code, the function doesn’t execute anything else until the
iterator’s next() method is called. At that point, yield 2 executes. This ability
to stop execution in the middle of a function leads to some interesting uses
of generator functions
*/