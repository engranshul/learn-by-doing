//npm modules
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
const FileStore = require('session-file-store')(session); // notice this

const app = express();

app.use(
  session({
    genid: (req) => {
      console.log('Inside the session middleware');
      console.log(req.sessionID);
      return uuidv4();       // use UUIDs for session IDs
    },
    store: new FileStore(),  // defining store here
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
);


app.get('/', (req, res) => {
  console.log('Inside the homepage callback function');
  console.log(req.sessionID);
  res.send(`You hit home page!\n`);
});


app.listen(3000, () => {
  console.log('Listening on localhost:3000');
});


/* 
Notice in the above, that we are calling the session variable when we require 
the FileStore. Then, we add an instance to the FileStore to our session 
configuration.
We also need to do one other thing. When we use the the ‘session-file-store’
module, by default, it creates a new ‘/sessions’ directory when it is first 
called. The first time and each subsequent time that we create a new session,
the module creates a new file for the session info in the /sessions folder.
Since we import the session-file-store in server.js and the session-file-store
depends on the /sessions folder, nodemon will restart the server each time we 
create a new session.
We can tell nodemon to ignore a file or directory by calling ‘— ignore’ and 
passing it the file or directory name.


Now restart the server again.
Then call the cURL command passing in the cookie-file.txt with the ‘-b’ flag
this time, so that it sends the session id we created before we restarted
the server.

Try calling it as much as you like. You should get the same session id output 
by server every time. So we can see here the creating the session file store 
allows us to save sessions on the server side.
*/