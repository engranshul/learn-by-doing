//accepts two parameters: resolve and reject, which are in turn 
//functions.

var keepsHisWord = true;
promise1 = new Promise(function (resolve, reject) {
  if (keepsHisWord) resolve("the man likes to keep his word");
  else reject("the man doesnt want to keep his word");
});

/* 
 Promises are generally used for easier handling of asynchronous
 operations or blocking code, for example, file operations, API calls,
 DB calls, IO calls,
 */


 