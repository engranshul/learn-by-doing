const express = require('express');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');

const app = express();

app.use(
  session({
    genid: (req) => {
      console.log('Inside the session middleware');
      console.log(req.sessionID);
      return uuidv4(); // use UUIDs for session IDs
    },
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
-c : Write cookies to <filename> after operation
-b : Send cookies from string/file

Try calling the cURL function a few more times. You’ll see that a new session 
id is generated each time. Browsers will automatically save/send the session
id and send it in each request to the server; however, cURL doesn’t 
automatically save our session ID and send it in the request headers. 
Let’s fix that. Let’s use cURL again, except let’s pass in the ‘-c’ flag 
with the text ‘cookie-file.txt’.

curl -X GET http://localhost:3000 -c cookie-file.txt

This creates a text file in our /client folder called ‘cookie-file.txt’

Now we can call curl again, but this time calling cookie-file.txt with 
the ‘-b’ flag which tells cURL to send our session id in our header data. 
Let’s also add the ‘-v’ flag to see this.

curl -X GET http://localhost:3000 -b cookie-file.txt -v

If you flip over to the server logs, you should see that the same session 
id is being output to the console each time. You may also notice, we don’t 
see the ‘Inside the session middleware’ log being made. This is because our
‘genid’ function isn’t called since the id is already being taken in.

Till now all the sessions are stored in memory..if we kill the app..all
current sessions will be lost..

The session id is being matched with the session id in memory else new session
id will be generated.

We still haven’t solved the problem though. If we restart our server again, the 
memory will be wiped again. So we need to have some way of making sure that we
can save our session id even if the server shuts down. That’s where the 
‘session store’ comes in. Normally, your database would act as a session 
store, but since we’re trying to keep things as simple as possible, let’s 
just store our session info in text files.

If you go to the express docs, you will see that there are a number of npm 
packages that are provided to act as the glue between your database and the
session middleware. We’re going to use the one called ‘session-file-store.’ 
As usual, let’s install it.

npm install session-file-store
*/
