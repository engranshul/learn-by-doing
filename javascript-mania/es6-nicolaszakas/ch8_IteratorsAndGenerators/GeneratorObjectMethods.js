/* Because generators are just functions, you can add them to objects */

// es5 way
let o = {
  createIterator: function* (items) {
    for (let i = 0; i < items.length; i++) {
      yield items[i];
    }
  },
};
let iterator = o.createIterator([1, 2, 3]);

// es6 way..createIterator() method is defined with no function keyword
let o = {
  *createIterator(items) {
    for (let i = 0; i < items.length; i++) {
      yield items[i];
    }
  },
};
let iterator = o.createIterator([1, 2, 3]);