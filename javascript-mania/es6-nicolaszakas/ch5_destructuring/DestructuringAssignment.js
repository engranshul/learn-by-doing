let node = {
    type: 'Identifier',
    name: 'foo',
  },
  type = 'Literal',
  name = 5;

console.log('node type is',node.type)
console.log('type is',type)  

// assign different values using destructuring
({ type, name } = node);

console.log(type); // "Identifier"
console.log(name); // "foo"

/* 
In this example, type and name are initialized with values when declared,
and then two variables with the same names are initialized with different
values. The next line uses destructuring assignments to change those values
by reading from the node object. Note that you must put parentheses around
a destructuring assignment statement. The reason is that an opening curly
brace is expected to be a block statement, and a block statement cannot
appear on the left side of an assignment. The parentheses signal that the
next curly brace is not a block statement and should be interpreted as an
expression, allowing the assignment to complete.
*/