// wdout strict mode
function add(input1, input2) {
  input1 = 5;
  input2 = 6;

  for (let i = 0; i < arguments.length; i++) {
    console.log('argument is', arguments[i]);
  }

  if (arguments[0] === 3 && arguments[1] === 4) {
    console.log('updating arguments value didnt have any effect..');
  }
}

add(3, 4);




// with strict mode
function mul(input1, input2) {
  'use strict';
  input1 = 5;
  input2 = 6;

  for (let i = 0; i < arguments.length; i++) {
    console.log('argument is', arguments[i]);
  }

  if (arguments[0] === 3 && arguments[1] === 4) {
    console.log(
      'with strict mode updating arguments value didnt have any effect..'
    );
  }
}

mul(3, 4);




// methods args with default value works same in strict mode..es6 way
function divide(input1, input2=10) {
  input1 = 5;
  input2 = 6;

  // printing all arguments
  for (let i = 0; i < arguments.length; i++) {
    console.log('argument is', arguments[i]);
  }

  if (arguments[0] === 3) {
    console.log(
      'with strict mode updating arguments value didnt have any effect..'
    );
  }
}

divide(3);


/* 
Here only concept is that if arguments shd be updated if arguments value
is updated in the function..

non strict mode : updates
strict mode : does not update
*/