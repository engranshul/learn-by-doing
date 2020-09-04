var express = require("express");
var app = express();

// All requests related to users
app.get("/users", (req, res, next) => {
  console.log("get request called for /users");
});

app.post("/users", (req, res, next) => {
  console.log("post request called for /users");
});

app.get("/users/:id", (req, res, next) => {
  console.log("get request called for /users/:id");
});

app.post("/users/:id", (req, res, next) => {
  console.log("post request called for /users/:id");
});

// All requests related to employees..this is a slight improvement
// over above way as we combined requests get and post if they have
// same endpint..
app
  .route("/employees")
  .get((req, res, next) => {
    console.log("get request called for /employees");
  })
  .post((req, res, next) => {
    console.log("post request called for /employees");
  });

app.listen(5000);

/* 
Problem with this approach is that all the requests are cluttered in
same file
*/
