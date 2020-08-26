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

// in above objects, there is duplicate code..how to get rid of that

function createPerson() {
    const person2 = {
        name : "max",
        country : "russia",
        paint() {
            console.log("i am painting")
        }
    }
    return person2;
}


// but there is a problem every object created has hardcoded name as max

function createPersonUpdated(name,country) {
    const person2 = {
        name,  // shortcut for name:name 
        country,
        paint() {
            console.log("i am painting")
        }
    }
    return person2;
}

// more shortHand..removed const person2 =....directly returning

function createPersonFinal(name,country) {
    return {
        name,  // shortcut for name:name 
        country,
        paint() {
            console.log("i am painting")
        }
    }
}

/* 
see how in below code we have removed duplicate  code
and able to create custom objects
*/

let person3 = createPersonFinal("rahul","india");
console.log("person3 is",person3)

let person4 = createPersonFinal("kim","china");
console.log("person4 is",person4)



