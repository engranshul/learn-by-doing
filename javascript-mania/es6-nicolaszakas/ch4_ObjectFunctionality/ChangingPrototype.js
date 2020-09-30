let person = {
  getGreeting() {
    return 'hey..i am a person..'
  }
}
let friend=Object.create(person)
console.log(Object.getPrototypeOf(friend) == person)
console.log('greeting is',friend.getGreeting())

let dog = {
  getGreeting() {
    return 'wow..i am a dog..woof..woof';
  },
};

// change prototype of friend

Object.setPrototypeOf(friend,dog)
console.log('greeting is',friend.getGreeting());
