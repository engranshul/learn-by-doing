/* 
Although generator methods are useful, defining a default iterator for
your class is much more helpful if the class represents a collection of values.
You can define the default iterator for a class by using Symbol.iterator to
define a generator method:
*/

class Collection {

  constructor() {
    this.items = [];
  }
  *[Symbol.iterator]() {
    yield* this.items.values();
  }
}
var collection = new Collection();
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);
for (let x of collection) {
  console.log(x);
}

/* 
This example uses a computed name for a generator method that
delegates to the values() iterator of the this.items array. Any class that
manages a collection of values should include a default iterator because
some collection-specific operations require collections they operate on to
have an iterator. Now you can use any instance of Collection directly in a
for-of loop or with the spread operator.
*/