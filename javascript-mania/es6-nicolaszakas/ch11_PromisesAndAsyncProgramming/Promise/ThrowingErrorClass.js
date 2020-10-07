let promise = new Promise(function (resolve, reject) {
  // some blah blah..
  throw new Error('error has occured..');
});

promise
  .then(() => console.log('all right..'))
  .catch(() => console.log('devastated..'));

/* 
If an error is thrown inside an executor, the promise’s rejection handler is
called

In this code, the executor intentionally throws an error. An implicit
try-catch is inside every executor so that the error is caught and then 
passed to the rejection handler.The previous example is equivalent to 
this:

let promise = new Promise(function(resolve, reject) {
try {
throw new Error("Explosion!");
} catch (ex) {
reject(ex);
}
});
promise.catch(function(error) {
console.log(error.message); // "Explosion!"
});

The executor catches any thrown errors to simplify this common use
case, but an error thrown in the executor is only reported when a 
rejection handler is present. Otherwise, the error is suppressed.
*/
