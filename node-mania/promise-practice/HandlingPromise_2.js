var keepsHisWord = false;
promise1 = new Promise(function (resolve, reject) {
  if (keepsHisWord) resolve("the man likes to keep his word");
  else reject("the man doesnt want to keep his word");
})
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log("i always execute"));

/* 
  A common need is to execute two or more asynchronous operations back
  to back, where each subsequent operation starts when the previous 
  operation succeeds, with the result from the previous step. We 
  accomplish this by creating a promise chain.
 
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);
OR
const promise2 = doSomething().then(successCallback, failureCallback);
  
*/
