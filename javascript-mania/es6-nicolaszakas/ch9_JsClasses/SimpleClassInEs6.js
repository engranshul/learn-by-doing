class PersonClass {
  
  // equivalent of the PersonType constructor
  constructor(name) {
    this.name = name;
  }

  // equivalent of PersonType.prototype.sayName
  sayName() {
    console.log('name is', this.name);
  }
}

PersonClass.prototype.sayWoff = function () {
  console.log('wofff..');
};

let person = new PersonClass('jill');
person.sayName()
person.sayWoff()
 
console.log(person instanceof PersonClass);           // true
console.log(person instanceof Object);                // true
console.log(typeof PersonClass);                      // "function"
console.log(typeof PersonClass.prototype.sayName);    // "function"



/* 
The class declaration for PersonClass behaves similarly to PersonType in the
previous example. But instead of defining a function as the constructor, class
declarations allow you to define the constructor directly inside the class using
the special constructor method name. Because class methods use the concise
syntax, there’s no need to use the function keyword. All other method names
have no special meaning, so you can add as many methods as you want.

Interestingly, class declarations are just syntactic sugar on top of the
existing custom type declarations. The PersonClass declaration actually
creates a function that has the behavior of the constructor method, which
is why typeof PersonClass gives "function" as the result. The sayName() method
also ends up as a method on PersonClass.prototype in this example, similar to
the relationship between sayName() and PersonType.prototype in the previous
example. These similarities allow you to mix custom types and classes without
worrying too much about which you’re using.
*/