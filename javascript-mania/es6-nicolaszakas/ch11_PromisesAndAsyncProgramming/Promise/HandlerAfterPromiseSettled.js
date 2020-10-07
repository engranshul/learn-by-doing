const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const promise = readFile('example.txt');

// original fulfillment handler
promise.then(function (contents) {
  console.log(contents.toString());
// now add another
  promise.then(function (contents) {
    console.log(contents.toString());
  });
});


/* 
A fulfillment or rejection handler will still be executed even if it is
added to the job queue after the promise is already settled. This allows you
to add new fulfillment and rejection handlers at any time and guarantee
that they will be called.

In this code, the fulfillment handler adds another fulfillment handler
to the same promise. The promise is already fulfilled at this point, so the
new fulfillment handler is added to the job queue and called when all other
preceding jobs on the queue are complete. Rejection handlers work the
same way.

Each call to then() or catch() creates a new job to be executed when the promise is
resolved. But these jobs end up in a separate job queue that is reserved strictly for
promises. The precise details of this second job queue aren’t important for understanding
how to use promises as long as you understand how job queues work in
general.

*/