/* 
To properly track potentially unhandled rejections, use the events
rejectionHandled and unhandledRejection to store a list of potentially unhandled
rejections. Then wait some period of time to inspect the list. For example,
look at this simple unhandled rejection tracker:
*/

let possiblyUnhandledRejections = new Map();

// when a rejection is unhandled, add it to the map
process.on('unhandledRejection', function (reason, promise) {
  possiblyUnhandledRejections.set(promise, reason);
});

process.on('rejectionHandled', function (promise) {
  possiblyUnhandledRejections.delete(promise);
});

setInterval(function () {
  possiblyUnhandledRejections.forEach(function (reason, promise) {
    console.log(reason.message ? reason.message : reason);
    // do something to handle these rejections
    handleRejection(promise, reason);
  });
  possiblyUnhandledRejections.clear();
}, 60000);


/* 
This code uses a map to store promises and their rejection reasons.
Each promise is a key, and the promise’s reason is the associated value.
Each time unhandledRejection is emitted, the promise and its rejection reason
are added to the map. Each time rejectionHandled is emitted, the handled
promise is removed from the map. As a result, possiblyUnhandledRejections
grows and shrinks as events are called. The setInterval() call periodically
checks the list of possible unhandled rejections and outputs the information
to the console (in reality, you’ll probably want to do something else
to log or otherwise handle the rejection). A map is used in this example
instead of a weak map because you need to inspect the map periodically to
see which promises are present, and that’s not possible with a weak map.
Although this example is specific to Node.js, browsers have implemented
a similar mechanism for notifying developers about unhandled rejections.
*/

