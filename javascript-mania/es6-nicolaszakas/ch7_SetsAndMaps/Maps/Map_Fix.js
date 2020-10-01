let obj1 = { name: 'jack' };
let obj2 = { address: { houseNo: 123, pin: 110046 } };

let map = new Map();
map.set(obj1, 'i am the object one').set(obj2, 'i am the object two');

console.log('map size is', map.get(obj1));
console.log('map size is', map.get(obj2));

/* 
see how it has solved issue which comes when we use Objects as maps..
*/