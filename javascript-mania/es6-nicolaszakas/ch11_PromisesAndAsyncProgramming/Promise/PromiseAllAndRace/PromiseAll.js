/* 
The Promise.all() method accepts a single argument, which is an iterable
(such as an array) of promises to monitor, and returns a promise that is
resolved only when every promise in the iterable is resolved. The returned
promise is fulfilled when every promise in the iterable is fulfilled, as in this
example:
*/

let p1 = new Promise(function (resolve, reject) {
  resolve(4234424);
});

let p2 = new Promise(function (resolve, reject) {
  resolve("ohhh man..");
});

let p3 = new Promise(function (resolve, reject) {
   resolve(4234.424);
  // reject(172672)         // try both..
});

let promise = Promise.all([p1, p2, p3]);
promise.then((values) => {
  console.log(values[0])
  console.log(values[1]);
  console.log(values[2]);
});


/* 
If any promise passed to Promise.all() is rejected, the returned promise
is immediately rejected without waiting for the other promises to complete
*/