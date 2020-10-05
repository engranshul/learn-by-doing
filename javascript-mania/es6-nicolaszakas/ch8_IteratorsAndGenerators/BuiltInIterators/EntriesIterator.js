// array
let arr = ['car','bus','train','cycle']

// map
let mp = new Map();
mp.set(1,'jack').set(2,'jill')

// set
let st = new Set();
st.add(10)
st.add(20)
st.add(30)

// now we gonna use entries iteartor on each of these
console.log('*******array elements***********')
for(let item of arr.entries()) {
  console.log(item)
}
console.log('*******map elements***********');
for (let item of mp.entries()) {
  console.log(item);
}
console.log('*******set elements***********');
for (let item of st.entries()) {
  console.log(item);
}

/* 
The entries() iterator returns a two-item array each time next() is called. The
two-item array represents the key and value for each item in the collection.
For arrays, the first item is the numeric index; for sets, the first item is also
the value (because values double as keys in sets); for maps, the first item
is the key.
*/