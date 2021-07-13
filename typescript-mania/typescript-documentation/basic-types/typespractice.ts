//******boolean type 

let isDone : boolean = true; // here we being explicit in defining type
let flag = false;            // typescript inferred type automatically


//******number type

/* 
all numbers in TypeScript are either floating point values or
BigIntegers. These floating point numbers get the type number, 
while BigIntegers get the type bigint
*/
let count : number = 123;

//*****big int type 
//let counter = 100n; // will give error BigInt literals are not available when targeting lower than ES2020.


