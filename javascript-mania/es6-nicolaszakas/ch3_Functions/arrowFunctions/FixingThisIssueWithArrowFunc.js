console.log('*******case 1 : traditional anonymous func*******'); 
/* Arrow functions have lexical this, meaning the value of this is
 determined by the surrounding scope (the lexical environment). */

/*  As this shows, this.phrase is undefined, indicating that this within the 
 anonymous function passed into the forEach method does not refer to the
 printNumbers object. This is because a traditional function will not 
 determine its this value from the scope of the environment, which is 
 the printNumbers object. */

 const printNumbers = {
   phrase: 'The current value is:',
   numbers: [1, 2, 3, 4],

   loop() {
     this.numbers.forEach(function (number) {
       console.log(this.phrase, number);
     });
   },
 };

 printNumbers.loop();


console.log('*******case 2: traditional anonymous func with bind*********') 

/* In older versions of JavaScript, you would have had to use the bind 
method, which explicitly sets this. This pattern can be found often in 
some earlier versions of frameworks, like React, before the advent of ES6. 
*/

 const printNumbersFixWithBind = {
   phrase: 'The current value is:',
   numbers: [1, 2, 3, 4],

   loop() {
     // Bind the `this` from printNumbers to the inner forEach function
     this.numbers.forEach(
       function (number) {
         console.log(this.phrase, number);
       }.bind(this)
     );
   },
 };

 printNumbersFixWithBind.loop();

 console.log('*******case 3: arrow function way*********');
 
/* Arrow functions provide a more direct way of dealing with this. Since their
  this value is determined based on the lexical scope, the inner function called
  in forEach can now access the properties of the outer printNumbers object 
*/

const printNumbersArrow = {
  phrase: 'The current value is:',
  numbers: [1, 2, 3, 4],

  loop() {
    this.numbers.forEach((number) => {
      console.log(this.phrase, number);
    });
  },
};

printNumbersArrow.loop();

/* These examples establish that using arrow functions in built-in array 
methods like forEach, map, filter, and reduce can be more intuitive and easier 
to read, making this strategy more likely to fulfill expectations. */