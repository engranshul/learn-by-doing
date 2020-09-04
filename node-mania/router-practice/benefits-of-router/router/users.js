var express = require("express");
var router = express.Router();

// only requests related to users

router.get("", (req, res, next) => {
  res.send("get request called for /users");
  next();  // this is optional..call only if u wan to trigger next middleware
})

router.post("", (req, res, next) => {
  res.send("post request called for /users");
  next();
});

router.get("/:id", (req, res, next) => {
  res.send("get request called for /users/:id");
  next();
});

router.post("/:id", (req, res, next) => {
  res.send("post request called for /users/:id");
  next();
});

module.exports = router;
