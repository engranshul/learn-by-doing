// plain object
let dummyObj = {
    "name" : "anshul",
    "class": "12th",
    "school": "san francis"
}

console.log("print all keys",Object.keys(dummyObj));
console.log("name key value is",dummyObj["name"]);


// maps is javascript...using plain objects as maps is dangerous

let ages = new Map();
ages.set("Boris",10);
ages.set("oris",20);
ages.set("Bors",8);
ages.set("Bori",40);

console.log(ages.get("Boris"));

// check if a key exists in map

console.log("is key exist",ages.has("mnop"));

/* 
Objects.keys and .hasOwnProperty() method returns
only objects own keys, not those in the prototype
*/