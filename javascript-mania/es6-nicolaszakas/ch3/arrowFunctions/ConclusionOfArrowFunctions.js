/* 
arrow functions are always anonymous, do not have a prototype or constructor,
cannot be used with the new keyword, and determine the value of this through
lexical scope. There are new syntactic enhancements available 
to arrow functions, such as implicit return and parentheses omission for
single parameter functions.

No this, super, arguments, and new.target bindings The values of this,
super, arguments, and new.target inside the function are defined by the
closest containing non-arrow function

Cannot be called with new. Arrow functions do not have a [[Construct]]
method and therefore cannot be used as constructors. Arrow functions
throw an error when used with new.

No prototype Because you can’t use new on an arrow function, there’s
no need for a prototype. The prototype property of an arrow function
doesn’t exist.

Can’t change this The value of this inside the function can’t be
changed. It remains the same throughout the entire life cycle of the
function.

No arguments object Because arrow functions have no arguments binding,
you must rely on named and rest parameters to access function
arguments.

No duplicate named parameters Arrow functions cannot have duplicate
named parameters in strict or non-strict mode, as opposed to nonarrow
functions, which cannot have duplicate named parameters only
in strict mode.

First and foremost, this
binding is a common source of error in JavaScript. It’s very easy to lose track
of the this value inside a function, which can result in unintended program
behavior, and arrow functions eliminate this confusion. Second, by limiting
arrow functions to simply executing code with a single this value, JavaScript
engines can more easily optimize these operations, unlike regular functions,
which might be used as a constructor or otherwise modified.
*/