console.log("verbose way to write print function")
var person = {
  'name' : 'jack',
  'age' : 10,
  print : function() {
    console.log(this.name)
  }
}
person.print();

console.log('in es6 way colon and function keyword can be removed..')
var human = {
  name: 'jill',
  age: 10,
  print() {
    console.log(this.name);
  },
};
human.print();