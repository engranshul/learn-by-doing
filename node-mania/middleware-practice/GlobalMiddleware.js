var express = require("express");
var app = express();

const logging = (req, res, next) => {
  console.log(
    "i am a global middleware..i will be called for every incoming request"
  );
  next();
};

/*  Using app.use() means that this middleware will be called for every
 call to the application*/
app.use(logging);

app.get("/managers", (req, res) => {
  console.log("serving managers request..");
  res.send("hello");
});

app.get("/employees", (req, res) => {
  console.log("serving users request..");
  res.send("hello");
});

app.listen(5000);


/* 
In this i learnt concept of global middleware

Also i learnt that if i remove next() from logging function then
then app.get doesnt get called 

Express.js middleware are functions that have the following signature:
function myCustomMiddleware(req, res, next) {
  // custom middleware here...
}

Middleware functions can perform the following tasks:
Execute any code.
Make changes to the request and the response objects.
End the request-response cycle.
Call the next middleware function in the stack.


*/