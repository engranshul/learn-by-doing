// creating symbols

let sym1 = Symbol()
let sym2 = Symbol('foo') // The following syntax with the new operator will throw a TypeError:
let sym3 = Symbol('foo')

if(Symbol('foo') === Symbol('foo')) {
    console.log("equal")
}
else {
    console.log("not equal")
}

/* 
When instantiating a symbol there is an optional first argument 
where you can choose to provide it with a string. This value is 
intended to be used for debugging code, it otherwise doesn’t 
really affect the symbol itself.
*/

// symbols are not always unique if created with for keyword
// here what is in paranthesis matter
const sym4 = Symbol.for("cat");
const sym5 = Symbol.for("cats");

if(sym4 == sym5) {
    console.log("symbol created with for keyword are equal")
}


/* https://www.youtube.com/watch?v=4J5hnOCj69w */
