class MyArray extends Array {

}

let myArr = new MyArray();
myArr[0] = 10
myArr[1] = 11
myArr[2] = 5

console.log(`******calculating length*********`)
let arrLength =myArr.length
console.log(`array Length is`, arrLength);

console.log(`*******slice property************`)
let result =myArr.slice(1,2)
console.log(`result is`,result)

console.log(`*******check instanceof********`)
let items = new MyArray(1, 2, 3, 4),
subitems = items.slice(1, 3);

console.log(items instanceof MyArray); // true
console.log(subitems instanceof MyArray); // true

/* 
For almost as long as JavaScript arrays have existed, developers have
wanted to create their own special array types through inheritance. In
ECMAScript 5 and earlier, this wasn’t possible.

One goal of ECMAScript 6 classes is to allow inheritance from all 
builtins.
*/