var express = require("express");
var app = express();

const logging = (req, res, next) => {
    console.log(
        `this time app.use is not used..so no global middleware..i will
        simply run for /employees because it has only specified it..`
    );
    next();
};


app.get("/managers", (req, res) => {
    console.log("serving managers request..");
    res.send("hello");
});

// loggin middleware tied to below request
app.get("/employees",logging, (req, res) => {
    console.log("serving users request..");
    res.send("hello");
});

app.listen(5000);


/*
In this i learnt how to tie middleware in specific request..
*/