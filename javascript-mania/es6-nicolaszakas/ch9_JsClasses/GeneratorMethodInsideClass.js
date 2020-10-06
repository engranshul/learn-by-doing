class Movie {

  *createIterator() {
    yield 1;
    yield 2;
    yield 3;
  }
}

let obj = new Movie()
let itr = obj.createIterator()

console.log('first value is',itr.next())
console.log('second value is', itr.next())
console.log('third value is', itr.next())
console.log('fourth value is', itr.next());

/* 
we can define a generator on an object literal
by prepending an asterisk (*) to the method name. The same 
syntax works for classes as well, allowing any method to be
a generator.

This code creates a class called Movie with a createIterator() generator
method. The method returns an iterator whose values are hardcoded
into the generator. Generator methods are useful when you have an object
that represents a collection of values and you want to iterate over those
values easily. Arrays, sets, and maps all have multiple generator methods to
account for the different ways developers need to interact with their items.
*/