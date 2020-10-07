const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const promise = readFile('example.txt')

promise.then(
  function (contents) {
    // fulfillment
    console.log(contents.toString());
  },
  function (err) {
    // rejection
    console.error(err.message);
  }
);
promise.then(function (contents) {
  // fulfillment
  console.log(contents.toString());
});
promise.then(null, function (err) {
  // rejection
  console.error(err.message);
});


/* 
All three then() calls operate on the same promise. The first call listens for
fulfillment and rejection. The second only listens for fulfillment; errors won’t
be reported. The third just listens for rejection and doesn’t report success
*/