const express = require('express');
const { v4: uuidv4 } = require('uuid');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

const app = express();

// Body parser...newly added
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(
  session({
    genid: (req) => {
      console.log('Inside the session middleware');
      console.log(req.sessionID);
      return uuidv4();                               // use UUIDs for session IDs
    },
    store: new FileStore(),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  })
);

app.get('/', (req, res) => {
  console.log('Inside the homepage callback function');
  console.log(req.sessionID);
  res.send(`You got home page!\n`);
});

// create the login get and post routes
app.get('/login', (req, res) => {                    // newly added
  console.log('Inside GET /login callback function');
  console.log(req.sessionID);
  res.send(`You got the login page!\n`);
});

app.post('/login', (req, res) => {                   // newly added
  console.log('Inside POST /login callback function');
  console.log(req.body);
  res.send(`You posted to the login page!\n`);
});


app.listen(3000, () => {
  console.log('Listening on localhost:3000');
});


/* 
npm install passport passport-local

*/