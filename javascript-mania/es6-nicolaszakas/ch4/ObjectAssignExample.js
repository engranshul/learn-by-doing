console.log('****positive case*****');
let human = {
  sleep() {
    console.log('sleeping....');
  },
};

let person = {
  name: 'jack',
  age: 10,
};

Object.assign(person, human);
console.log('printing person', person);
console.log(person.sleep());

console.log('***object assign wd multiple suppliers****');

let beast = {
  feast() {
    console.log('feasting....');
  },
};

let angel = {
  beautiful() {
    console.log('beautiful....');
  },
  feast() {
    console.log('overided....');
  },
};

let king = {};
Object.assign(king, beast, angel);
console.log('king is', king);

console.log('*****copying accessor properties behaviour****');

// accessor property on a supplier will become a data property on the receiver..
let receiver = {};
let supplier = {
  get name() {
    return 'file.js';
  },
};

Object.assign(receiver,supplier)
console.log('supplier is',supplier.name)