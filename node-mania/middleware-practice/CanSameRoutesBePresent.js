var express = require("express");
var app = express();

app.get(
  "/user/:id",
  function (req, res, next) {
    console.log("ID:", req.params.id);
    next();
  },
  function (req, res, next) {
    res.send("User Info");
    // next(); this will judge whether next app.get should get called or not..
  }
);

app.get("/user/:id", function (req, res, next) {
  console.log("reached..");
  res.end(req.params.id);
});

app.listen(5000);
