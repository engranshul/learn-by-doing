//npm modules
const express = require('express');
const { v4: uuidv4 } = require('uuid');


// create the server
const app = express();

// create the homepage route at '/'
app.get('/', (req, res) => {
  console.log(req);
  const uniqueId = uuidv4();
  res.send(`Hit home page. Received the unique id: ${uniqueId}\n`);
});

// tell the server what port to listen on
app.listen(3000, () => {
  console.log('Listening on localhost:3000');
});


/* 
learnt a basic way about how to use uuid npm module and
generate id using same 
*/