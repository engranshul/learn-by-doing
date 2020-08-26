let productId = 123
let name = "shoe"
let category = NaN

console.log(typeof(productId))
console.log(typeof(name))

console.log("***Number.isNaN usage***");
console.log(Number.isNaN(name))
console.log(Number.isNaN(productId))
console.log(Number.isNaN(category))

console.log("***global isNaN usage***");
console.log(isNaN(productId))
console.log(isNaN(name))
console.log(isNaN(category))



/* Number.isNan returns a Boolean value that indicates whether a value is the 
reserved value NaN (not a number). Unlike the global isNaN(), 
Number.isNaN() doesn't forcefully convert the parameter to a 
number. Only values of the type number, that are also NaN, 
result in true */