function createIterator(items) {
  var i = 0;
  return {                         // returning object 4m createIterator func
    next: function () {            // object has a function wd name next
      var done = i >= items.length;
      var value = !done ? items[i++] : undefined;
      return {
        done: done,
        value: value,
      };
    },
  };
}

// here iterator is the object that gets returned from createIterator
// function..now we can call next() on that object..
var iterator = createIterator([1, 2, 3]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());