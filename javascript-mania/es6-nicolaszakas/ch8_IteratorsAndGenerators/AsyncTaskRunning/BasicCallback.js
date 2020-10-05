/* 
Much of the excitement around generators is directly related to asynchronous
programming. Asynchronous programming in JavaScript is a doubleedged
sword: simple tasks are easy to do asynchronously, but complex tasks
become an adventure in code organization. Because generators allow you
to effectively pause code in the middle of execution, they open many possibilities
related to asynchronous processing.
The traditional way to perform asynchronous operations is to call a
function that has a callback. For example, consider reading a file from the
disk in Node.js: 
*/

let fs = require("fs");
fs.readFile("config.json", function(err, contents) {
if (err) {
throw err;
}
doSomethingWith(contents);
console.log("Done");
});

/* 
The fs.readFile() method is called with the filename to read and a
callback function. When the operation is finished, the callback function is
called. The callback checks whether an error exists, and if not, processes
the returned contents. This works well when you have a small, finite number
of asynchronous tasks to complete but gets complicated when you need
to nest callbacks or otherwise sequence a series of asynchronous tasks. In
those situations, generators and yield are helpful. 
*/