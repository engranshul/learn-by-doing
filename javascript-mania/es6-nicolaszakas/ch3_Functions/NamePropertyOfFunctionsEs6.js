let Person = {
  name: 'anshul',
  age: 10,
  address: {
    houseNo: 123,
    streetNo: 'brookyln street',
  },
  printDetails: function () {
    console.log(`name is ${this.name} and age is ${this.age}`);
  },
};

console.log(Person.printDetails());
console.log(Person.printDetails.name); // checkout this name property



/* identifying functions can be challenging in javascript given the various
ways u can define a function..additionally prevalence of anonymous functions
make debugging a bit more difficult..often result in  stack trace that are hard
to decipher..to handle this es6 added name property to every function
 */
