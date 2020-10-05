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

// now we gonna use entries iteartor on each of these
console.log('*******array elements***********');
for (let item of arr.keys()) {
  console.log(item);
}
console.log('*******map elements***********');
for (let item of mp.keys()) {
  console.log(item);
}
console.log('*******set elements***********');
for (let item of st.keys()) {
  console.log(item);
}

/* 
The keys() iterator returns each key present in a collection. For arrays, it
returns only numeric keys; it never returns other own properties of the
array. For sets, the keys are the same as the values, so keys() and values()
return the same iterator. For maps, the keys() iterator returns each unique
key.
*/
