/* 
Node.js advanced the asynchronous programming model by popularizing
callbacks. The callback pattern is similar to the event model because the
asynchronous code doesn’t execute until a later point in time. It’s different
because the function to call is passed in as an argument, as shown here:
*/

let fs = require('fs');

fs.readFile('example.txt', function (err, contents) {
  if (err) {
    throw err;
  }
  console.log(contents.toString());
});
console.log('Hi!');


/* 
Using the callback pattern, readFile() begins executing immediately and
pauses when it starts reading from the disk. That means console.log("Hi!")
is output immediately after readFile() is called, before console.log(contents)
prints anything. When readFile() finishes, it adds a new job to the end of the
job queue with the callback function and its arguments. That job executes
upon completion of all other jobs ahead of it.

The callback pattern is more flexible than events because chaining
multiple calls together is easier with callbacks.

Problems with callbacks :

Nesting multiple method calls, as this example does, creates a tangled
web of code that is difficult to understand and debug. Callbacks also 
present problems when you want to implement more complex functionality.
What if you want two asynchronous operations to run in parallel and notify
you when they’re both complete? What if you want to start two asynchronous
operations at the same time but only take the result of the first one
to complete? In these cases, you’d need to track multiple callbacks and
cleanup operations, and promises greatly improve such situations.
*/