var express = require("express");
var app = express();
const users = require("./router/users");
const employees = require("./router/employees");

app.use((req, res, next) => {
  console.log("loadbalancing...");
  next();
});

app.use("/users", users);
app.use("/employees", employees);

app.use((req, res, next) => {
  console.log("cleanup...");
});

app.listen(5000);


/* 
Remember that order of writing middleware is important..
*/