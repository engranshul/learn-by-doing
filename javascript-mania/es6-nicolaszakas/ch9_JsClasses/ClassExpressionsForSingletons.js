// without new keyword we get error :Class constructor Animal cannot be 
// invoked without 'new'

let cls = new class Animal {

  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log('name is',this.name)
  }
}('xyian xing')

cls.sayName()

/* 
Here, an anonymous class expression is created and then executed
immediately. This pattern allows you to use the class syntax for creating
singletons without leaving a class reference available for inspection. The
parentheses at the end of the class expression indicate that you’re calling a
function and also allow you to pass in an argument.
*/

