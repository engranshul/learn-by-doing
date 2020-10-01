let map = new Map();

map.set('name', 'anshul').set('roll', 9);
console.log('map size is', map.size);

map.forEach((a, b, c) => console.log(`a is ${a} and b is ${b} and c is ${c}`));

/* 
Sets give you a new way to handle lists of values, but they aren’t useful
when you need to associate additional information with those values. That’s
why ECMAScript 6 also adds maps.

*/


/* 
The forEach() method for maps is similar to forEach() for sets and arrays in
that it accepts a callback function that receives three arguments:

• The value from the next position in the map
• The key for that value
• The map from which the value is read
These callback arguments more closely match
*/


/* 
The ECMAScript 6 Map type is an ordered list of key-value pairs, where the
key and the value can be any type. Key equivalence is determined by calling
the Object.is() method, so you can have a key of 5 and a key of "5" because
they’re different types. This is quite different from using object properties
as keys, because object properties always coerce values into strings.

You can add items to maps by calling the set() method and passing it a
key and the value to associate with the key. You can later retrieve a value by
passing the key to the get() method.
*/