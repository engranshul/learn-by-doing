/* 
Value Types(primitives) : Number,Boolean,String,Symbol,null,undefined
ReferenceTypes(objects) : Array,Function,Object
*/

// primitives example
let x=10;
let y=x; // value gets copied..both x and y pointing to diff memory locations
x=x+10;
console.log(`${x} "**" ${y}`)


// objects exampple