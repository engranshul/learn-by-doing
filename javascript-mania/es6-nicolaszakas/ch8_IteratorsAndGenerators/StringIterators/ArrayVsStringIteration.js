console.log('iterating over string')
var msgStr = 'mynameisjack';
for (let i = 0; i < msgStr.length; i++) {
  console.log(msgStr[i]);
}

console.log('iterating over array');
var msgArr = ['my', 'name', 'is', 'jack'];

for (let i = 0; i < msgArr.length; i++) {
  console.log(msgArr[i]);
}

/* 
JavaScript strings have slowly become more like arrays since ECMAScript 5
was released. For example, ECMAScript 5 formalized bracket notation
for accessing characters in strings (that is, using text[0] to get the first
character, and so on). 

But bracket notation works on code units rather than characters, so it cannot
be used to access double-byte characters correctly
*/