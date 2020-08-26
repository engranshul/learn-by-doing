/* 
Code points are numbers that represent Unicode characters. 
Code units are numbers that encode code points, to store or transmit Unicode text. 
One or more code units encode a single code point. 
Each code unit has the same size, which depends on the encoding 
format that is used.
*/

/* A code point is the atomic unit of information. Text is a sequence 
of code points. Each code point is a number which is given meaning 
by the Unicode standard.

A code unit is the unit of storage of a part of an encoded code 
point. In UTF-8 this means 8-bits, in UTF-16 this means 16-bits. 
A single code unit may represent a full code point, or part of a 
code point. For example, the snowman glyph (☃) is a single code 
point but 3 UTF-8 code units, and 1 UTF-16 code unit.
*/


// u flag anatomy

/* 
Regular expressions assume 16 bit code units,where each represents a
single character..to address this prob es6 defines a u flag..

In other words, the character encoding translates the Unicode code 
points to unique code unit sequences. Popular encodings are UTF-8, 
UTF-16 and UTF-32. Most JavaScript engines use UTF-16 encoding. 
This affects the way JavaScript works with Unicode.

when a regular expression has u flag set,it switches modes to work
on characters,not code points
*/

let text ="🎂";
console.log(text.length); // weird will print 2

// regular expression /^.$/ matches any input string with a single character

console.log(/^.$/.test(text));// weird will print false..ie this text has more than one character

// solution is u flag

console.log(/^.$/u.test(text)); // will print true




