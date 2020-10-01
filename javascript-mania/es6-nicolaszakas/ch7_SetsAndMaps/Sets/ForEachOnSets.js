let set = new Set();
set.add(5);
set.add('5');

set.forEach((a, b, c) => console.log(`a is ${a} and b is ${b} and c is ${c}`));

/* 
The forEach() method is passed a callback function that accepts three
arguments:
• The value from the next position in the set
• The same value as the first argument
• The set from which the value is read

The strange difference between the set version of forEach() and the
array version is that the first and second arguments to the callback function
are the same value in the set version. Although this might look like a mistake,
there’s a good reason for the behavior.

The other objects that have forEach() methods (arrays and maps) pass
three arguments to their callback functions. The first two arguments for
arrays and maps are the value and the key (the numeric index for arrays).

Sets don’t have keys, however. The people behind the ECMAScript 6
standard could have made the callback function in the set version of forEach()
accept two arguments, but that would have made it different from the other
two. Instead, they found a way to keep the callback function the same and
accept three arguments: each value in a set is considered to be the key and
the value. As such, the first and second argument are always the same in
forEach() on sets to keep this functionality consistent with the other forEach()
methods on arrays and maps.
*/