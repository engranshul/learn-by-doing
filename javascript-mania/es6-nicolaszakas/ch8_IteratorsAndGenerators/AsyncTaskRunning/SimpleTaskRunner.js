/* 
Because yield stops execution and waits for the next() method to be called
before starting again, you can implement asynchronous calls without managing
callbacks. To start, you need a function that can call a generator and
start the iterator, such as this:
*/

function run(taskDef) {
  // create the iterator, make available elsewhere
  let task = taskDef();
  // start the task
  let result = task.next();
  // recursive function to keep calling next()
  function step() {
  // if there's more to do
    if (!result.done) {
      result = task.next();
      step();
    }
  }
  // start the process
  step();
}

run(function* () {
  console.log(1);
  yield;
  console.log(2);
  yield;
  console.log(3);
});


/* 
The run() function accepts a task definition (a generator function) as
an argument. It calls the generator to create an iterator and stores the iterator
in task. The first call to next() begins the iterator and the result is stored
for later use. The step() function checks whether result.done is false and,
if so, calls next() before recursively calling itself. Each call to next() stores
the return value in result, which is always overwritten to contain the latest
information. The initial call to step() starts the process of looking at the
result.done variable to see whether there’s more to do.

With this implementation of run(), you can run a generator containing
multiple yield statements

This example just outputs three numbers to the console, which simply
shows that all calls to next() are being made. However, just yielding a couple
of times isn’t very useful. The next step is to pass values into and out of the
iterator.
*/