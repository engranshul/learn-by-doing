let obj = {}

let key1 = { name: 'jack' };
let key2 = { address: { houseNo: 123, pin: 110046 } };

obj[key1] = 'hello'
obj[key2] = 'world'


console.log(Object.keys(obj).length)
console.log(obj)


/* 
The objects key1 and key2 are converted to strings because object properties 
must be strings.Because "[object Object]" is the default string representation 
for objects,both key1 and key2 are converted to that string.
 
This can cause errors that may not be obvious because it’s logical to assume 
that different object keys would, in fact, be different.The conversion to the
default string representation makes it difficult to use objects as keys.
*/