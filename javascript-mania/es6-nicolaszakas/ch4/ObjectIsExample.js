console.log('***some issues with ===***');

if (NaN === NaN) {
  console.log('NaN is equal to NaN');
} else {
  console.log('NaN is not equal to NaN');
}

if (+0 === -0) {
  console.log('plus zero is equal to negative zero');
} else {
  console.log('+0 is not equal to -0');
}


console.log('***Object.is solves above issues***');

if (Object.is(NaN,NaN)) {
  console.log('NaN is equal to NaN');
} else {
  console.log('NaN is not equal to NaN');
}

if (Object.is(+0,-0)) {
  console.log('plus zero is equal to negative zero');
} else {
  console.log('+0 is not equal to -0');
}

/* 
When you want to compare two values in JavaScript, you’re probably used
to using either the equals operator (==) or the identically equals operator
(===). Many developers prefer the latter to avoid type coercion during comparison.
But even the identically equals operator isn’t entirely accurate. For
example, the values +0 and −0 are considered equal by ===, even though
they’re represented differently in the JavaScript engine. Also, NaN === NaN
returns false, which necessitates using isNaN() to detect NaN properly


In many cases, Object.is() works the same as the === operator. The only
differences are that +0 and −0 are considered not equivalent, and NaN is 
considered equivalent to NaN. But there’s no need to stop using equality
operators.Choose whether to use Object.is() instead of == or === based on
how those special cases affect your code.

*/