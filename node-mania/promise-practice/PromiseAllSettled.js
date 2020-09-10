let promise1 = Promise.resolve("hello i got resolved");

let promise2 = Promise.reject("hello i got resolved");

let promise3 = new Promise(function (resolve, reject) {
  let flag = true;
  if (flag) resolve("life is good..");
  else reject("life is boring..");
});

Promise.allSettled([promise1, promise2, promise3])
  .then((values) => console.log("values are", values))
  .catch((err) => console.log(err));

/* 
output :
values are [
  { status: 'fulfilled', value: 'hello i got resolved' },
  { status: 'rejected', reason: 'hello i got resolved' },
  { status: 'fulfilled', value: 'life is good..' }       
]
*/


/* 
The Promise.allSettled() method returns a promise that resolves after 
all of the given promises have either fulfilled or rejected, with an
 array of objects that each describes the outcome of each promise.
*/