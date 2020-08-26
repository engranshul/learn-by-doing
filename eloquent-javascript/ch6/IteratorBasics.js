/* In obj(below example) proto there wont be an method named 
Symbol.iterator.However all iterable objects(like array) has 
this method in their proto
*/
const obj = {    
"name" : "anshul",
"age" : 11,
"roll" : 12
}

// example 1
const arr = [1,2,3,4,5];
let iterator=arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


/* 
see how above a new field done is present and its 
value become true once we iterate all elements
*/

// example 2
let dummyObjIterator = "Ok"[Symbol.iterator]();
console.log(dummyObjIterator.next());
console.log(dummyObjIterator.next());
console.log(dummyObjIterator.next());
