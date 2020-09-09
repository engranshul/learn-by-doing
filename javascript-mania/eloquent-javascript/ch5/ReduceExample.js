let arr =[1,2,3,4,5,6]

let output=arr.reduce((totalResult,currValue)=> {
    totalResult +=currValue;
    return totalResult;    
},5
)

console.log("output is",output);

/* 

What does reduce do?
The reduce method is applied to arrays in Javascript. This method does what its name says; it takes the values in an array, from the first till the last element, and applies functionality such that it changes the array into one singular value. Hence, it reduces the array.

Why do we need reduce?
The reduce method helps make the code more concise and neat.

It eliminates the need to implement for loops to traverse an array.
It allows for callbacks which save time when iterating over the array.
It allows multiple functions to be implemented on the array; sum, average, max and min values.


// syntax1

let answer = array.reduce(callback, initialValue);

// syntax2

let answer = array.reduce(callback);

// syntax3

let answer = array.reduce(function(totalResult,currValue,currIndex,array),initialValue);


https://www.educative.io/edpresso/what-is-reduce-in-javascript

*/