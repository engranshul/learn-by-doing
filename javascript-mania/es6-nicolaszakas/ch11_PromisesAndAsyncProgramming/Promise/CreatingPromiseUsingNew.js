let fs = require('fs');
function readFile(filename) {
  return new Promise(function (resolve, reject) {
    // trigger the asynchronous operation
    fs.readFile(filename, { encoding: 'utf8' }, function (err, contents) {
      // check for errors
      if (err) {
        reject(err);
        return;
      }
      // the read succeeded
      resolve(contents);
    });
  });
}
let promise = readFile('example.txt');

// then can listen for both fulfillment and rejection
promise.then(
  function (contents) {
    // fulfillment
    console.log(contents);
  },
  function (err) {
    // rejection
    console.error(err.message);
  }
);

/* 
Syntax :
new Promise(function(function resolve, function reject) resolver) -> Promise
*/

/* 
In this example, the native Node.js fs.readFile() asynchronous call is
wrapped in a promise. The executor either passes the error object to the
reject() function or passes the file contents to the resolve() function.

Keep in mind that the executor runs immediately when readFile() is
called. When either resolve() or reject() is called inside the executor, a 
job is added to the job queue to resolve the promise. This is called job 
scheduling,and if you’ve ever used the setTimeout() or setInterval() 
functions,you’re already familiar with it. 

// add this function to the job queue after 500 ms have passed
setTimeout(function() {
console.log("Timeout");
}, 500)
console.log("Hi!");
*/
