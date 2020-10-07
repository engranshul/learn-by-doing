let promise1 = new Promise(function (resolve, reject) {
  resolve(41);
});

let promise2 = new Promise(function (resolve, reject) {
  resolve(43)
  // reject(50)    // try out both of these for learning purpose
});

promise1
  .then((value) => {
    return promise2;
  })
  .then((value) => console.log('final value received is', value));

/* 
The important thing to recognize about this pattern is that the second
fulfillment handler is not added to p2 but rather to a third promise.
So above example is equivalent to below example..
*/

let p1 = new Promise(function (resolve, reject) {
  resolve(41);
});

let p2 = new Promise(function (resolve, reject) {
  resolve(43);
  // reject(50)    // try out both of these for learning purpose
});

let p3 =p1
  .then((value) => {
    return p2;
  })
  
p3.then((value) => console.log('final value received is', value));
