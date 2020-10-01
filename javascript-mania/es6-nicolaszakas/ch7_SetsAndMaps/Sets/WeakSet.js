let set = new WeakSet(),
  key = {};
// add the object to the set
set.add(key);
console.log(set.has(key)); // true
// remove the last strong reference to key (also removes from weak set)
key = null;


/* 
The preceding examples show that weak sets share some characteristics
with regular sets, but there are some key differences:

• In a WeakSet instance, the add() method, has() method, and delete()
  method all throw an error when passed a nonobject.
• Weak sets aren’t iterables and therefore cannot be used in a for-of loop.
• Weak sets don’t expose any iterators (such as the keys() and values()
  methods), so there is no way to programmatically determine the contents
  of a weak set.
• Weak sets don’t have a forEach() method.
• Weak sets don’t have a size property.

The seemingly limited functionality of weak sets is necessary to properly
handle memory. In general, if you only need to track object references,
you should use a weak set instead of a regular set.
*/