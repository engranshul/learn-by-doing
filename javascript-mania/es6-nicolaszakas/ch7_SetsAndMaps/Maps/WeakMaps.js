let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

john = null;          // visitedSet will be cleaned automatically

/* 
Weak maps are to maps what weak sets are to sets: they’re a way to store
weak object references. In weak maps, every key must be an object (an error
is thrown if you try to use a nonobject key), and those object references are
held weakly so they don’t interfere with garbage collection. When there are
no references to a weak map key outside a weak map, the key-value pair is
removed from the weak map. But only weak map keys, not weak map values,
are weak references. An object stored as a weak map value will prevent garbage
collection, even if all other references are removed.

The most useful place to employ weak maps is when you’re creating an
object related to a particular DOM element in a web page. For example,
some JavaScript libraries for web pages maintain one custom object for
every DOM element referenced in the library, and that mapping is stored
in a cache of objects internally.

The difficult part of this approach is determining when a DOM
element no longer exists in the web page so the library can remove its
associated object. Otherwise, the library would hold onto the DOM element
reference past the reference’s usefulness and cause a memory leak.

Tracking the DOM elements with a weak map would still allow the library
to associate a custom object with every DOM element, and it could automatically
destroy any object in the map when that object’s DOM element
no longer exists.
*/
