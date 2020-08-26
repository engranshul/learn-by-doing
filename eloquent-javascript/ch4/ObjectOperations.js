let dreams = {
   "realistic" : true,
   "checklist" : ['millionaire','billionaire','trillonaire'] // semicolon here will lead to syntaxError
}

console.log("object is",dreams);
console.log("length of object is",dreams.length); // wont work as it is not the array

console.log("***perfect way to find object keys and values*****");
console.log("finding object keys",Object.keys(dreams))
console.log("finding object keys",Object.values(dreams))


console.log("insert into object")
dreams.archievable = "yes"
dreams.aimHigh = true        // true false can go wdout quotes
console.log("object is",dreams)

console.log("***delete from object*****")
delete dreams.checklist
console.log(dreams)

console.log("copies all properties from one object to another")
let objectA= {a:1,b:2};
Object.assign(objectA,{c:3,d:4})
console.log(objectA)

console.log("*****json stringify and parse functions****")
let str= JSON.stringify(objectA);
console.log("strigified json object is",str); // see how it changed a and b into quotes

console.log("json parse example",JSON.parse(str).a) // but this shd be proper json for parsing to work




