function is32bit(c) {
    return c.codePointAt() > 0xFFFF;
}
/* 
The upper bound of 16 bit characters is represented in hexadecimal
as FFFF,so any code pint greater than number must be represented 
by two code points..for a total of 32 bits..
*/

console.log(is32bit("💘"));
console.log(is32bit("A"));
