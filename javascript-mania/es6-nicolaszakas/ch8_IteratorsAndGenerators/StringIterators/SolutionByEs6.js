var message = 'A 𠮷 B';
for (let c of message) {
  console.log(c);
}


/* 
Fortunately, ECMAScript 6 aims to fully support Unicode (see Chapter
2), and the default string iterator is an attempt to solve the string iteration
problem. As such, the default iterator for strings works on characters
rather than code units. Changing the preceding example to use the default
string iterator with a for-of loop results in more appropriate output.
*/