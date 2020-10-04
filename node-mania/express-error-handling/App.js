var express = require('express');
var app = express();
const fs = require('fs');
const path = require('path');
/* 
Error Handling refers to how Express catches and processes errors that occur
both synchronously and asynchronously. Express comes with a default error
handler so you don’t need to write your own to get started.
*/

/*
case 1 : 
Errors that occur in synchronous code inside route handlers and middleware 
require no extra work. If synchronous code throws an error, then Express will 
catch and process it. For example:
*/

app.get('/', function (req, res) {
  throw new Error('BROKEN');
});

/* 
case 2: 
For errors returned from asynchronous functions invoked by route handlers 
and middleware, you must pass them to the next() function, where Express 
will catch and process them. For example:
*/

app.get('/async', function (req, res, next) {
  fs.readFile('provide file to read here', function (err, data) {
    if (err) {
      next(err); // Pass errors to Express.
    } else {
      console.log('data is', data);
      res.send('request is successful');
    }
  });
});

app.listen(5000);
