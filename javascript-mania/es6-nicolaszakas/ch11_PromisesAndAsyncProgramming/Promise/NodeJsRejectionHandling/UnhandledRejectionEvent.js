/* 
What happens if you don’t handle a rejected promise in Node.js?
How can you debug that?

There are two important things here:
The process doesn’t crash. The process continues to work. But you get noticed.
However, this behavior will change in the future! In future versions of 
Node.js the process will crash.

This is great to know. Now you might be wondering how you can react to 
unhandled rejections programmatically. For example you might be interested 
in sending the stack trace to a crash reporting service. No worries, 
Node.js has something for you. You can listen to the unhandledRejection 
event emitted by process
*/
console.log('***example of unhandled rejection event****')
let rejectedPromise1 = new Promise(function (resolve, reject) {
  reject('world is going to end..');
});

process.on('unhandledRejection', function (reason, promise) {
  console.log(reason);
  console.log(promise === rejectedPromise1);
});



/* 
Node.js emits two events on the process object that are related to promise
rejection handling:

unhandledRejection Emitted when a promise is rejected and no rejection
handler is called within one turn of the event loop

rejectionHandled Emitted when a promise is rejected and a rejection
handler is called after one turn of the event loop
*/