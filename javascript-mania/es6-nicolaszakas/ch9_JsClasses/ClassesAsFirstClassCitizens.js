/* 
In programming, a first-class citizen is a value that can be passed into a function,
returned from a function, and assigned to a variable. JavaScript functions
are first-class citizens (also called first-class functions), and they’re part
of what makes JavaScript unique.
*/

function createClassObj(classDef) {
  return new classDef('joy');        // object creation for both example 1 and 2
}

class Animal {

  constructor(name) {
    this.name = name
  }
  sayName() {
    console.log('name is',this.name)
  }
}

// example 1
let obj = createClassObj(Animal)
obj.sayName()

// example 2..createClassObj() function is called with an anonymous
// class expression as an argument,
let obj1 = createClassObj(
  class {
    constructor(name) {
      this.name = name;
    }
    sayName() {
      console.log('name is', this.name);
    }
  }
)
obj1.sayName()