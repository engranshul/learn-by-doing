console.log("case1 : diff result for heart")
let input= "💘";
console.log(input.charCodeAt());
console.log(input.codePointAt());

console.log("case2 : same result for A")
let input1 ="A";
console.log(input1.charCodeAt());
console.log(input1.codePointAt());

console.log("case3 : reversing..fromCharCode will give wrong output")
console.log(String.fromCharCode(55357));   // wont print heart
console.log(String.fromCodePoint(128152)); // will print heart..correct output

console.log("case 4: length operation")
console.log(input.length)                  // will print two coz it is using surrorate pairs

/**
 * Character Codes and Code Points
 * str.charCodeAt(index)  //good for UTF-8  (0 - 65535 or 0xFFFF)
 * str.codePointAt(index) //better for UTF-16 (0 - 1114111 or 0x10FFFF)
 * str.charAt(index)
 *
 * String.fromCharCode(code)  //good for UTF-8 (0 - 65535 of 0xFFFF)
 * String.fromCodePoint(code) //better for UTF-16 (0 - 1114111 or 0x10FFFF)
 */


/* 
Before es6, javascript assumed that each 16 bit sequence called a
code unit,represented a single character.Earlier 16 bits were enough
to contain any character..

Limiting character length to 16 bits was hurdle for unicode goal 
to provide globally unique identifier to every character in the
world

UTF-16 solves this problem by introducing surrogate pairs in which
a single code point is represented by two 16 bit code units(total 
32 bits).

In es5,all string operations(length,charAt) work on 16 bit code units,
meaning u can get unexpected results from UTF-16 encoded strings containing
surrogate pairs..see case 4 above..

Additional tutorial :
https://www.youtube.com/watch?v=Kr7grjJXm6U
*/
