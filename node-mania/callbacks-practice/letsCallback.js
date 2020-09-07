var fs = require("fs");

/*
case 1 : commented below is the async version of readfile..running this 
will throw error as we have not defined callback..

var data =fs.readFile("dummy.txt") 
*/

/* 
case 2 : correct way to running above code.Provided callback as second
argument..

fs.readFile("dummy.txt", (err, content) => {
  if (err) {
    throw err;
  }
  console.log(content.toString())
});

console.log(data); 
*/

/*
case 3 : how to save data returned by a callback function

Fact : You can't return data from a callback, instead you 
should pass a function into the method that can be called 
inside the callback with the result.

Due to this problem below result will also print undefined..
console.log line gets executed first because fs.readFile runs
in async


const callbackTester = () =>
  fs.readFile("dummy.txt", (err, content) => {
    if (err) {
      throw err;
    }
    return content.toString();
  });

console.log("result is",callbackTester());
*/

/* case 4 : this case helps to get data from callback function */

function callmeback(result) {
/* this way we can guarantee that this result.toString() will
print data in <file className=""></file> */
  console.log("ohh finally i have got data", result.toString());
}

/* below function has been provided a callback so that when it finishes
reading file..it can provide read data to callmeback method */
const testFunc = (callmeback) => {
  fs.readFile("dummy.txt", (err, data) => {
    if (err) {
      throw err;
    }
    callmeback(data); // call to callback
  });
};

testFunc(callmeback);


/* 
Note that in above case 4 we have provided callback function as 
parameter to testFunc and dn explicitly called it..

But in node library async functions like fs.readFile..it is the 
responsibility of node environment to call callback with error 
or data..control is not in our hand..
*/