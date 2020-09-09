// no overriding because of using Symbol
const toStringSymbol = Symbol();

Array.prototype[toString] = function() {
    return `${this.length} cm of blue yarn`;
}

Array.prototype[toStringSymbol] = function() {
    return `${this.length} cm of blue yarn`;
}

console.log([1,2].toString());
console.log([1,2][toString]());
console.log([1,2][toStringSymbol]());

/* 
It is possible to include Symbol properties in object expressions
and classes by using square brackets around the property name
*/

const objSymbol = Symbol();
let stringObj = {
    [objSymbol]() { return "hello world";}
};
console.log(stringObj[objSymbol]());




