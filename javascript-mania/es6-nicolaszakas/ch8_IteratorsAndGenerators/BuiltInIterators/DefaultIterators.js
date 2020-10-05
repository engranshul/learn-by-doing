/* 
Each collection type also has a default iterator that is used by for-of whenever
an iterator isn’t explicitly specified. The values() method is the default
iterator for arrays and sets, whereas the entries() method is the default iterator
for maps. These defaults make using collection objects in for-of loops a
little easier. 
*/

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
for (let item of arr) {
  console.log(item);
}
console.log('*******map elements***********');
for (let item of mp) {
  console.log(item);
}
console.log('*******set elements***********');
for (let item of st) {
  console.log(item);
}


/* 
No iterator is specified, so the default iterator functions will be used.

On the other hand, weak sets and weak maps do not have built-in iterators. 
Managing weak references means there’s no way to know exactly how many 
values are in these collections, which also means there’s no way to 
iterate over them.
*/