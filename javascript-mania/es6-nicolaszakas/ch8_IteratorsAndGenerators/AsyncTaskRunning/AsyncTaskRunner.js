let fs = require('fs');

function run(taskDef) {
  // create the iterator, make available elsewhere
  let task = taskDef();
  // start the task
  let result = task.next();
  // recursive function to keep calling next()
  function step() {
    // if there's more to do
    if (!result.done) {
      
      /* Anytime result.value is a function, the task runner will execute
         it instead of just passing that value to the next() method. */
      if (typeof result.value === 'function') {
        result.value(function (err, data) {
          if (err) {
            result = task.throw(err);
            return;
          }
          result = task.next(data);
          step();
        });
      } else {
        result = task.next(result.value);
        step();
      }
    }
  }
  step();
}

// wrapper over read file
function readFile(filename) {
  return function (callback) {
    fs.readFile(filename, callback);
  };
}

run(function* () {
  let contents = yield readFile('config.json');
  // doSomethingWith(contents);
  console.log('Done');
});


/* 
The previous example(TaskRunningWithData) passed static data back and forth 
between yield calls,but waiting for an asynchronous process is slightly 
different. The task runner needs to know about callbacks and how to use them. 
Because yield expressions pass their values into the task runner, any function 
call must return a value that somehow indicates the call is an asynchronous 
operation that the task runner should wait for.
*/


/* 
Of course, there are downsides to the pattern used in these examples;
namely, you can’t always be sure a function that returns a function is
asynchronous.

But for now, it’s only important that you understand the theory
behind the task running. Another new feature in ECMAScript 6, promises,
offers more flexible ways of scheduling asynchronous tasks,
*/