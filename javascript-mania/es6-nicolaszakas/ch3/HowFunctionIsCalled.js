/* 
in ecmascript 5 or earlier functions server dual purpose of being callable
with or without new.When used with new , the this value inside a function
is a new object and that new object is returned

es6 introduces this new.target metaproperty and with the help of it we can
know if a function is called with new operator or wdout it 
*/

let Person = function(name) {
  this.name = name;
  console.log('function is called with',new.target)
}


console.log(new Person('jack'))
console.log('*******************')
console.log(Person('jack'));