var express = require("express");
var app = express();

const B = (req, res) => {
    console.log(`getting field that has been added in middleware C ${req.newKey}`)
    console.log("B");
};
const A = (req, res, next) => {
    console.log("A");
    next();
};
const C = (req, res, next) => {
    req.newKey = "looks";
    console.log("C");
    next();
};


app.get("/managers",A,(req, res,next) => {
    console.log("serving managers request..");
    res.send("hello");
    next();
},C,B);


app.listen(5000);


/*
we learnt how to chain multiple middlewares..

See how we didnt called next() in B middleware as it is the last middleware 
to be executed..

next() is only optional for middleware that is last in line

Added a new key in C middleware and used it in B
*/