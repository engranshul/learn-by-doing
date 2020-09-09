var keepsHisWord = false;
promise3 = new Promise(function (resolve, reject) {
  if (keepsHisWord) {
    resolve("The man likes to keep his word");
  } else {
    reject("The man doesn't want to keep his word");
  }
});
console.log(promise3);


/* 
This code will give warning when running by node:
UnhandledPromiseRejectionWarning: Unhandled promise rejection

When executing in browser..same error
*/