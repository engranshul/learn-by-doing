const { promisify } = require("util");
const jwt = require("jsonwebtoken");

const jwtVerify = promisify(jwt.verify);

const verifyToken = (token) =>
  jwtVerify(token, CERTIFICATE, { algorithms: ["RS256"] });

/* 
  this is a promisify function in util package that does
  same thing that we did in v1
*/
