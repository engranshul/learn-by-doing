/* 
The easiest way to pass data through the task runner is to pass the value
specified by yield into the next call to the next() method. To do so, you need
only pass result.value, as in this code:
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
result = task.next(result.value);
step();
}
}
// start the process
step();
}


run(function* () {
  let value = yield 1;
  console.log(value); // 1
  value = yield value + 3;
  console.log(value); // 4
});

/* 
Now that result.value is passed to next() as an argument, it’s possible to
pass data between yield calls, like this

This example outputs two values to the console: 1 and 4. The value 1
comes from yield 1, because the 1 is passed right back into the value variable.
The 4 is calculated by adding 3 to value and passing that result back
to value. Now that data is flowing between calls to yield, you just need one
small change to allow asynchronous calls.
*/