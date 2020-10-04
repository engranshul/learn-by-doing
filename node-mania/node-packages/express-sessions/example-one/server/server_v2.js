const express = require('express');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');

const app = express();


app.use(
  session({
    genid: (req) => {
      console.log('Inside the session middleware');
      console.log(req.sessionID);
      return req.sessionID;   // not changing session id
    },
    secret: 'keyboard cat',   // shd nt be hardcoded here 
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
In this i learnt about a new function

genid
Function to call to generate a new session ID. Provide a function that returns
a string that will be used as a session ID. The function is given req as the
first argument if you want to use some value attached to req when generating 
the ID.

However in this example we are not changing session id in genid function..we are
returning it as it is.
*/