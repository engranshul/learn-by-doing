const name = Symbol('tommy');

let user = {
  id: 123,
  [name]: 'jack',
};

console.log('symbols not visible here ', Object.getOwnPropertyNames(user));
console.log('symbols visible here ', Object.getOwnPropertySymbols(user));
