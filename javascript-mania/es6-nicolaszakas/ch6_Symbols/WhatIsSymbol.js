/* 
ECMAScript 6 introduces symbols as a primitive type. (The language already
had five primitive types: strings, numbers,Booleans, null, and undefined.)

Symbols are unique among JavaScript primitives in that they don’t have a
literal form, like true for Booleans or 42 for numbers. You can create a 
symbol using the global Symbol function..

A symbol value may be used as identifier of object properties..
*/

const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false


// this cat label is just a label..but it doesnt mean s3 and s4 are equal
const s3 = Symbol('cat');
const s4 = Symbol('cat');
console.log(s3 === s4); // false