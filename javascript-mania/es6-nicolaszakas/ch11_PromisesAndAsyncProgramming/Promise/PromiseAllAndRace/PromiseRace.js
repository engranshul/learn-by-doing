/* 
The Promise.race() method provides a slightly different take on monitoring
multiple promises. This method also accepts an iterable of promises
to monitor and returns a promise, but the returned promise is settled as
soon as the first promise is settled. Instead of waiting for all promises to be
fulfilled, like the Promise.all() method, the Promise.race() method returns
an appropriate promise as soon as any promise in the array is fulfilled

If the first promise to settle is fulfilled, the returned promise is 
fulfilled; if the first promise to settle is rejected, the returned promise
is rejected.
*/

let p1 = new Promise(function (resolve, reject) {
  resolve(4234424);
});

let p2 = new Promise(function (resolve, reject) {
  reject('ohhh man..');
});

let p3 = new Promise(function (resolve, reject) {
  resolve(4234.424);
  // reject(172672)         // try both..
});

let promise = Promise.race([p1, p2, p3]);
promise.then((value) => {
  console.log(value);
});