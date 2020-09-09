// closure concept is similar to scoping
let name = "anshul"
function printSomething() {
 let sirname ="chauhan"   
 console.log(name)   // will print fine
}
console.log(sirname) // will throw error sirname is not defined
printSomething()