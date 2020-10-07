/* 
Both Promise.resolve() and Promise.reject() also accept non-promise thenables
as arguments. When passed a non-promise thenable, these methods
create a new promise that is called after the then() function.

A non-promise thenable is created when an object has a then() method
that accepts a resolve and a reject argument, like this:
*/

let thenable = {
  then: function (resolve, reject) {
    resolve(42);
  },
};

let p1 = Promise.resolve(thenable);
p1.then(function (value) {
  console.log(value); // 42
});


/* 
In this example, Promise.resolve() calls thenable.then() so a promise
state can be determined. The promise state for thenable is fulfilled because
resolve(42) is called inside the then() method. A new promise called p1 is
created in the fulfilled state with the value passed from thenable (that is,
42), and the fulfillment handler for p1 receives 42 as the value.

Promise.resolve() and Promise.reject() work like this to allow you to easily
work with non-promise thenables. Many libraries used thenables prior
to promises being introduced in ECMAScript 6, so the ability to convert
thenables into formal promises is important for backward compatibility
with previously existing libraries. When you’re unsure whether an object is
a promise, passing the object through Promise.resolve() or Promise.reject()
(depending on your anticipated result) is the best way to find out because
promises just pass through unchanged
*/