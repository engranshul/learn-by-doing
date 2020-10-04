const express = require('express');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');

const app = express();

app.use(
  session({
    genid: (req) => {
      console.log('Inside the session middleware');
      console.log(req.sessionID);
      return uuidv4();        // use UUIDs for session IDs
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
In this we created a new session id in genid function instead of using
default one..this way it overrides default session id generation logic

At this point when we curl
curl -X GET http://localhost:3000 -v

we gonna get following response from server that leads to set cookie in browser.
In browser next request goes with cookie..however in curl we have to explicitly
send it

Try calling the cURL function a few more times. You’ll see that a new session id 
is generated each time. Browsers will automatically save/send the session id and
send it in each request to the server; however, cURL doesn’t automatically save
our session ID and send it in the request headers.

Set-Cookie: 
connect.sid=s%3A6b16be21-cfb3-4a27-b867-ee80a5c95108.59mtOBJULe6J9CLnJRIHPnnMMbENRc0AjMIS%2Bt8UDvc; Path=/; HttpOnly
*/