// objects in javascript concept

var obj = {"file1":"abc.txt","file2":"def.txt"};

// printing value of key named file1
console.log(obj["file1"]);

// concept to check if a key exist in an object
var fileName ="file3";
if(fileName in obj) {
    console.log("yes");
}