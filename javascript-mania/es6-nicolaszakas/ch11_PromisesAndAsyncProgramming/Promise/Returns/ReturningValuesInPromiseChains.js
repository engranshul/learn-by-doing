/* 
Another important aspect of promise chains is the ability to pass data from
one promise to the next. I’ve shown how a value passed to the resolve()
handler inside an executor is passed to the fulfillment handler for that
promise, but you can continue passing data along a chain by specifying a
return value from the fulfillment handler.
*/
let promise = new Promise(function (resolve, reject) {
  resolve(40);
});

promise
  .then((value) => {
    return value + 10; // 50
  })
  .then((value) => {
    return value + 1; // 51
  })
  .then((value) => {
    console.log('final value is ', value * 10); // 510
  });
