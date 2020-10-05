/* 
Closely related to iterators, an iterable is an object with a Symbol.iterator
property. The well-known Symbol.iterator symbol specifies a function that
returns an iterator for the given object. All collection objects (arrays, sets,
and maps) and strings are iterables in ECMAScript 6, so they have a default
iterator specified. Iterables are designed to be used with a new addition to
ECMAScript: the for-of loop.

All iterators created by generators are also iterables, because generators assign the
Symbol.iterator property by default.

At the beginning of this chapter, I mentioned the problem of tracking
an index inside a for loop. Iterators are the first part of the solution to that
problem. The for-of loop is the second part: it removes the need to track
an index into a collection entirely, freeing you to focus on working with the
contents of the collection.
A for-of loop calls next() on an iterable each time the loop executes and
stores the value from the result object in a variable. The loop continues this
process until the returned object’s done property is true.
*/

let values = [1, 2, 3];
for (let num of values) {
  console.log(num);
}

/* 
This for-of loop first calls the Symbol.iterator method on the values
array to retrieve an iterator. (The call to Symbol.iterator happens behind
the scenes in the JavaScript engine.) Then iterator.next() is called, and the
value property on the iterator’s result object is read into num.

The for-of statement will throw an error when you use it on a non-iterable
object,null, or undefined
*/