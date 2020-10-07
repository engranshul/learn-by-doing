let button = document.getElementById('my-btn');
button.onclick = function (event) {
  console.log('clicked..');
};

/* 
When a user clicks a button or presses a key on the keyboard, an event like
onclick is triggered. That event might respond to the interaction by adding
a new job to the back of the job queue. This is JavaScript’s most basic form
of asynchronous programming. The event handler code doesn’t execute
until the event fires, and when it does execute, it has the appropriate context.
*/