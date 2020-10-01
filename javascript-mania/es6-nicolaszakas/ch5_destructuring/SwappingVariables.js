// es5 way..requires a extra temp variable
let a=1
let b=2
let temp

temp =a
a=b
b=temp

console.log(`value of a is ${a} and value of b is ${b}`)

// es6 way..no third variable required..
let c=3;
let d=4;

[c,d] = [d,c]
console.log(`value of c is ${c} and value of d is ${d}`);

