// array
let arr = ['car', 'bus', 'train', 'cycle'];

// map
let mp = new Map();
mp.set(1, 'jack').set(2, 'jill');

// set
let st = new Set();
st.add(10);
st.add(20);
st.add(30);

console.log('*******array elements***********');
for (let item of arr.values()) {
  console.log(item);
}
console.log('*******map elements***********');
for (let item of mp.values()) {
  console.log(item);
}
console.log('*******set elements***********');
for (let item of st.values()) {
  console.log(item);
}


/* 
Calling the values() iterator, as in this example, returns the exact data
contained in each collection without any information about that data’s location
in the collection.
*/