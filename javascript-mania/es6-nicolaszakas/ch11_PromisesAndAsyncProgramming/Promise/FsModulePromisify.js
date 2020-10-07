const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

readFile('example.txt')
  .then((contents) => {
    console.log('contents of file are', contents.toString());
  })
  .catch((err) => {
    console.log('error has occured while reading file');
  });


/* 
promise.catch(function(err) {
// rejection
console.error(err.message);
});

// is the same as:
promise.then(null, function(err) {
// rejection
console.error(err.message);
});
*/

/* 
The then() and catch() methods are intended to be used in combination
to properly handle the result of asynchronous operations. This system is
better than using events and callbacks because it clearly indicates whether
the operation succeeded or failed completely. (Events tend not to fire when
there’s an error, and in callbacks you must always remember to check the
error argument.) 

Just know that if you don’t attach a rejection handler to a promise, all 
failures will happen silently. Always attach a rejection handler,
even if the handler just logs the failure.
*/