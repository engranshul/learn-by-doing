let promise1 = Promise.reject("first rejected");

let promise2 = Promise.reject("second rejected");

let promise3 = new Promise(function (resolve, reject) {
  let flag = false;
  if (flag) resolve("life is good..");
  else reject("third rejected..");
});
/* 
Promise.all(iterable)
An iterable object such as an Array.
*/

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log("values are", values))
  .catch((values) => console.log(values));

// output : first rejected

/* 
Reason for why all first rejection value got printed :

Promise.all is all or nothing. It resolves once all promises in the 
array resolve, or reject as soon as one of them rejects. 

In other words, it either resolves with an array of all resolved values,
or rejects with a single error.
*/