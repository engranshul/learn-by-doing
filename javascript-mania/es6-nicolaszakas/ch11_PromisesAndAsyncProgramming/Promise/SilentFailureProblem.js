/* 
One of the most controversial aspects of promises is the silent failure that
occurs when a promise is rejected without a rejection handler.
Some consider this the biggest flaw in the specification because it’s the 
only part of the JavaScript language that doesn’t make errors apparent.
Determining whether a promise rejection was handled isn’t straightforward
due to the nature of promises. For instance, consider this
example:
*/

let rejected = Promise.reject(42);
  // at this point, rejected is unhandled

  // some time later...
rejected.catch(function (value) {
  // now rejected has been handled
  console.log(value);
});


/* 
You can call then() or catch() at any point and have them work correctly
regardless of whether the promise is settled or not, making it difficult to
know precisely when a promise will be handled. In this case, the promise is
rejected immediately but isn’t handled until later.

Although it’s possible that a future version of ECMAScript will address
this problem, both Node.js and browsers have implemented changes to
address this developer pain point. They aren’t part of the ECMAScript 6
specification but are valuable tools when you’re using promises.
*/