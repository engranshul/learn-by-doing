/* 
The normalize() method returns the Unicode Normalization Form 
of the string.
*/

const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`);
// expected output: "Amélie, Amélie"
console.log(name1 === name2);
// expected output: false
console.log(name1.length === name2.length);
// expected output: false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
// expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// expected output: true
console.log(name1NFC.length === name2NFC.length);
// expected output: true


/* 
Unicode assigns a unique numerical value, called a code point, 
to each character. For example, the code point for "A" is given 
as U+0041. However, sometimes more than one code point, or 
sequence of code points, can represent the same abstract 
character — the character "ñ" for example can be represented by 
either of:

The single code point U+00F1.
The code point for "n" (U+006E) followed by the code point for the combining tilde (U+0303).

However, since the code points are different, string comparison will 
not treat them as equal. And since the number of code points in each
version is different, they even have different lengths.

The normalize() method helps solve this problem by converting a string 
into a normalized form common for all sequences of code points that 
represent the same characters. There are two main normalization forms, 
one based on canonical equivalence and the other based on compatibility.
*/