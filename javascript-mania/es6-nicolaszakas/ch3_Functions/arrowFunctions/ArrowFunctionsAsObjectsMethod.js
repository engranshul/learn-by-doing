/* 
TypeError: Cannot read property 'forEach' of undefined
Arrow functions are not effective as object methods because of the way 
they use lexical scoping for this..

Since the object does not create a lexical scope, the arrow function method 
looks for this in the outer scope–Window in this example. Since the numbers 
property does not exist on the Window object, it throws an error. As a general 
rule, it is safer to use traditional functions as object methods by default.
*/

const printNumbers = {
  phrase: 'The current value is:',
  numbers: [1, 2, 3, 4],

  loop: () => {
    this.numbers.forEach((number) => {
      console.log(this.phrase, number);
    });
  },
};

printNumbers.loop();