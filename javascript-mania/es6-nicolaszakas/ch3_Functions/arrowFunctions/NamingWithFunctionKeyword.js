/* 
You can name function expressions written with the function keyword, but this 
is not popular in practice. One reason you might want to name a function 
expression is to make error stack traces easier to debug.
*/

const sum = function namedSumFunction(a, b) {
  if (!a || !b) throw new Error('Parameters are required.');

  return a + b;
};

sum();
