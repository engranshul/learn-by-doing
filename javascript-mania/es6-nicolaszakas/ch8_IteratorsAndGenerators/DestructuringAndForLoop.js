let mp = new Map();
mp.set(1, 'jack').set(2, 'jill');

/* 
curly braces wont work..
for({id,name} of mp) {
 console.log(`id is ${id} and name is ${name}`)
} 
*/
// same as using data.entries()
for ([id, name] of mp) {
  console.log(`id is ${id} and name is ${name}`);
}


/* 
The for-of loop in this code uses a destructured array to assign key and
value for each entry in the map. In this way, you can easily work with keys and
values at the same time without needing to access a two-item array or going
back to the map to fetch either the key or the value. Using a destructured array
for maps makes the for-of loop equally useful for maps as it is for sets and
arrays.
*/