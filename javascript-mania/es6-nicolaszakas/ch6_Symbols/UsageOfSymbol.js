let user = {
  'id' : 123
}

// see how we created a symbol with same name as user property
const id = Symbol();
user[id] =122333;

console.log('symbol value',user[id])
console.log('user id is',user.id);

// suppose there is a bunch of properties that are coming and
// we want to add them in user object without overriding any 
// property..how to do that..symbol comes to rescue 