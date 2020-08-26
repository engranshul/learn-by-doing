let user = {
id : 9451,
name : 'Dominique',
city : 'Siena',
age : 59
}

console.log("user is",user);
user.id =12345;
console.log("user is",user); // overridden earlier id property

/* By using symbols we can be sure that whatever we are adding 
is not conflicting with someone else */

const idSym = Symbol("id");
// square brackets is required in below command
user[idSym] = 367676767765656;
console.log("user is",user);
// square brackets is required in below command
console.log("user id is",user[idSym]);


// tryduplicating..this name idSymDuplicate doesnt get visible while printing object..
const idSymDuplicate = Symbol("id");
// square brackets is required in below command
user[idSymDuplicate] = 367676767765656;
console.log("user is",user);
// square brackets is required in below command
console.log("user id is",user[idSymDuplicate]);


// when symbols dont show up
console.log("all property names are",Object.getOwnPropertyNames(user));
console.log("all property names are",Object.keys(user));

// when symbols show up
console.log("all property names are",Object.getOwnPropertySymbols(user));










