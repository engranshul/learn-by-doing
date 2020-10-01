let uid = Symbol.for('uid');
console.log(Symbol.keyFor(uid));  // "uid"

let uid2 = Symbol.for('uid');
console.log(Symbol.keyFor(uid2)); // "uid"

let uid3 = Symbol('uid');
console.log(Symbol.keyFor(uid3)); // undefined

/* 
Notice that both uid and uid2 return the "uid" key. The symbol uid3
doesn’t exist in the global symbol registry, so it has no key associated 
with it and Symbol.keyFor() returns undefined.

Note : The global symbol registry is a shared environment, just like the global 
scope. That means you can’t make assumptions about what is or is not already 
present in that environment. 

*/
