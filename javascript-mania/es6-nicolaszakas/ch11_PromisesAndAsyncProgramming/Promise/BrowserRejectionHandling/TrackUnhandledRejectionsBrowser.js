let possiblyUnhandledRejections = new Map();

// when a rejection is unhandled, add it to the map
window.onunhandledrejection = function (event) {
  possiblyUnhandledRejections.set(event.promise, event.reason);
};
window.onrejectionhandled = function (event) {
  possiblyUnhandledRejections.delete(event.promise);
};

setInterval(function () {
  possiblyUnhandledRejections.forEach(function (reason, promise) {
    console.log(reason.message ? reason.message : reason);
    // do something to handle these rejections
    handleRejection(promise, reason);
  });
  possiblyUnhandledRejections.clear();
}, 60000);


/* 
Browsers also emit two events to help identify unhandled rejections. These
events are emitted by the window object and are effectively the same as 
their Node.js equivalents:

unhandledrejection Emitted when a promise is rejected and no rejection
handler is called within one turn of the event loop

rejectionhandled Emitted when a promise is rejected and a rejection
handler is called after one turn of the event loop

Although the Node.js implementation passes individual parameters to
the event handler, the event handler for these browser events receives an
event object with the following properties:

type : The name of the event ("unhandledrejection" or "rejectionhandled")
promise : The promise object that was rejected
reason : The rejection value from the promise
*/
