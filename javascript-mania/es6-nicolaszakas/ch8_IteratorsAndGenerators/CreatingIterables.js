let collection = {
  items: [],
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item;
    }
  },
};
collection.items.push(1);
collection.items.push(2);
collection.items.push(3);
for (let x of collection) {
  console.log(x);
}

/* 
First, the example defines a default iterator for an object called
collection. The default iterator is created by the Symbol.iterator method,
which is a generator (note that the asterisk still comes before the name).
The generator then uses a for-of loop to iterate over the values in this.items
and uses yield to return each one. Instead of manually iterating to define
values for the default iterator of collection to return, the collection object
relies on the default iterator of this.items to do the work
*/