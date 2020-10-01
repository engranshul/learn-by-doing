const name =Symbol('tommy')

let user = {
  id: 123,
  [name] : 'jack'
};

console.log(user)

