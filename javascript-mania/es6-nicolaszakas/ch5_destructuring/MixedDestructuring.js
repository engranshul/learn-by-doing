let node = {
  type: 'Identifier',
  name: 'foo',
  loc: {
    start: {
      line: 1,
      column: 1,
    },
    end: {
      line: 1,
      column: 4,
    },
  },
  range: [0, 3],
};
let {
  loc: { start },
  range: [startIndex],
} = node;

console.log(start.line); // 1
console.log(start.column); // 1
console.log(startIndex); // 0


/* 
You can use object and array destructuring together to create more complex
expressions. By doing so, you’re able to extract just the pieces of information
you want from any mixture of objects and arrays.
*/