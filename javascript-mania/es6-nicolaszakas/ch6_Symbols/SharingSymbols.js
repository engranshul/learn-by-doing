let uid = Symbol.for('uid');
let object = {
  [uid]: '12345',
};
console.log(object[uid]); // "12345"
console.log(uid);         // "Symbol(uid)"
let uid2 = Symbol.for('uid');

console.log(uid === uid2); // true
console.log(object[uid2]); // "12345"
console.log(uid2);         // "Symbol(uid)"

/* 
At times, you might want different parts of your code to share symbols. For
example, suppose you have two different object types in your application
that should use the same symbol property to represent a unique identifier.

Keeping track of symbols across files or large codebases can be difficult and
error prone. For these reasons, ECMAScript 6 provides a global symbol registry
that you can access at any time.

When you want to create a symbol to be shared, use the Symbol.for()
method instead of calling the Symbol() method. The Symbol.for() method
accepts a single parameter, which is a string identifier for the symbol you
want to create. That parameter is also used as the symbol’s description

The Symbol.for() method first searches the global symbol registry to see
whether a symbol with the key "uid" exists. If so, the method returns the
existing symbol. If no such symbol exists, a new symbol is created and registered
to the global symbol registry using the specified key. The new symbol
is then returned.
*/


