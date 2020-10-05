/* 
Bracket notation works on code units rather than characters, so it cannot
be used to access double-byte characters correctly
*/

var message = 'A 𠮷 B';
for (let i = 0; i < message.length; i++) {
  console.log(message[i]);
}

/* 
Because the double-byte character is treated as two separate code units,
four empty lines are between A and B in the output.
*/