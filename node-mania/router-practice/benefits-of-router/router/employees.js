var express = require("express");
var router = express.Router()
// only requests related to employees

router
  .route("")
  .get((req, res, next) => {
    res.send("get request called for /employees");
    next();
  })
  .post((req, res, next) => {
    res.send("post request called for /employees");
    next();
  });

module.exports = router;
