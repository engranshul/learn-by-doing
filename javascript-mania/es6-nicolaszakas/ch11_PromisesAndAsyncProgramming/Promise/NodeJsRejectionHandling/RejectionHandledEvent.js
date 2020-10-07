/* 
The 'rejectionHandled' event is emitted whenever a Promise has been rejected 
and an error handler was attached to it (using promise.catch(), for example) 
later than one turn of the Node.js event loop.
*/

console.log('***example of rejection handled event****');

let rejected = Promise.reject("i have been rejected...");

// wait to add the rejection handler
setTimeout(function() {
rejected.catch(function(value) {
console.log('**message is**',value); // "Explosion!"
});
}, 1000);

process.on('rejectionHandled', function (promise) {
  console.log('****is equal****', rejected === promise); // true
});