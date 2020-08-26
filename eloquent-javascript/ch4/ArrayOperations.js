let arr =[1,2,3,4,5];

console.log("*****push pop operations in array***");
arr.push(6);
arr.push(7);
console.log("arr values are",arr);

arr.pop();
console.log("arr values are",arr);

console.log("***shift unshift operations in array***");
arr.shift();
console.log("arr values are",arr);
arr.unshift(10);         // inserts at front
console.log("arr values are",arr);

console.log("****length operations*******");
console.log("length of array is",arr.length);
console.log("length of array is",arr["length"]); // see another way of finding length in array

console.log("****array inclues*****")
console.log("arr include example",arr.includes(11))
// similarly indexOf and  lastIndexOf method work with arrays

console.log("**array slice join and concat example**")
console.log(arr.slice(2,5).join(".").concat(100)) 

// javascript arrays doesnt have fixed length and can save diff types in them
let arrInput =[1,2,3,'ansh','rahul',5]             // see able to save integer and string together
console.log("type of arrInput ",typeof(arrInput)); // in JS arrays are objects
console.log(arrInput.reverse()) // arrays have multiple methods










