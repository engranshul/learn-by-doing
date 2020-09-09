const person1 = {
    name : "max",
    country : "russia",
    paint() {
        console.log("i am painting")
    }
}

const person2 = {
    name : "max",
    country : "russia",
    paint() {
        console.log("i am painting")
    }
}

// above code doesnt look optimized..duplicacy is present

function Person(name) {
    this.name =name,
    this.draw = function() {
        console.log("lets draw")
    }
}

let dummyPerson=new Person("shenagin");
console.log("dummyPerson is",dummyPerson);


/* 
Factory functions vs Constructor functions

FF name is camelCase
CF name starts wd upper case

CF uses new keyword to create object
FF doesnt use new keyword

Both are ways to create objects..no pros cons as such

*/

