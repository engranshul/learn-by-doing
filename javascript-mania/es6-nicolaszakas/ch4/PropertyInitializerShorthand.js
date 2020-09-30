console.log('******will work*********');
function Person(name, age) {
  this.name = name,
  this.age = age;
}

let boy = new Person('jack', 10);
console.log(boy);

console.log('**shorthand wont work in this case..as shorthand replaces : not =***');
function Human(name, age) {
  this.name, 
  this.age;
}

let girl = new Human('jill', 10);
console.log(girl);

console.log('******remember shorthand is for objects*******')

function createPersonVerbose(name,age) {
  return {
    name : name,
    age : age
  }
}
console.log("verbose result",createPersonVerbose('jack',100))

function createPersonShorthand(name, age) {
  return {
    name: name,
    age: age,
  };
}
console.log("shorthand result",createPersonShorthand('jill',200)
)
