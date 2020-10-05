let arr = [1,5,6,2,9,6,4]

// this converts array to set
let st = new Set(arr)
console.log('set is',st)
// set to array conversion
console.log('array is',...st)


/* 
The spread operator works on all iterables and uses the default iterator to 
determine which values to include. All values are read from the iterator and 
inserted into the array in the order in which values where returned from the
iterator

The spread operator converts map into an array of arrays. Because the default 
iterator for maps returns key-value pairs
*/