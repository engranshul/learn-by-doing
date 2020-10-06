function PersonType(name) {
  this.name = name
}

PersonType.prototype.sayName = function() {
  console.log('name is',this.name)
}

let person = new PersonType('jack')
person.sayName()

console.log(person instanceof  PersonType)
console.log(person instanceof Object)


/* 
In ECMAScript 5 and earlier, JavaScript had no classes.

In this code, PersonType is a constructor function that creates a single
property called name. The sayName() method is assigned to the prototype so
the same function is shared by all instances of the PersonType object. Then,
a new instance of PersonType is created via the new operator. The resulting
person object is considered an instance of PersonType and of Object through
prototypal inheritance.
*/