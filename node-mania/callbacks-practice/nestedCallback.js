var fs = require("fs");

fs.readFile("dummy.txt", (err, data) => {
  if (err) {
    throw err;
  }
  fs.readFile("fun.txt", (err, data) => {
    if (err) {
      throw err;
    }
    fs.readFile("fake.txt", (err, data) => {
      if (err) {
        throw err;
      }
      // do stuff
    });
  });
});




/*
this is an example of callback hell..
more about it : http://callbackhell.com/
*/