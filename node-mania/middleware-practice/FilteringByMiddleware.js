var express = require("express");
var app = express();

const logging = (req, res, next) => {
  console.log(
    `i am a global middleware..and i gonna pass pass through only 
        request having admin as true`
  );
  if (req.query.admin == "true") {
    console.log("admin param is present..");
    next();
  } else {
    res.status(400).send("Please provide admin param");
  }
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
In this i learnt how to filter requests using global middleware..
middleware can intercept request and if required..can return response 
to client from there only..
*/
