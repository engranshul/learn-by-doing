class PersonClass {
  
  // equivalent of the PersonType constructor
  constructor(name) {
    this.name = name;
  }
  // equivalent of PersonType.prototype.sayName
  sayName() {
    console.log(this.name);
  }
  // equivalent of PersonType.create
  static create(name) {
    return new PersonClass(name);
  }
}
let person = PersonClass.create('Nicholas');


/* 
You can use the static keyword on any method or accessor
property definition within a class. The only restriction is that you can’t
use static with the constructor method definition.
*/
