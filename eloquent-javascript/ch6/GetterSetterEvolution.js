// approach 1
const obj = {
 firstName : "anshul",
 lastName : "chauhan"
}
console.log(obj);

// how to print fullName now ??
console.log(obj.firstName +" "+obj.lastName)

/* lets make it better using template strings and
problem with above approach is that every i have 
to access fullName, i have to use this template string */

console.log(`${obj.firstName} ${obj.lastName}`);

// lets add a method in object
const objUpdated = {
    firstName : "anshul",
    lastName : "chauhan",
    fullName() {
        return `${obj.firstName} ${obj.lastName}`;
    }
}
console.log("full name from updated object is",objUpdated.fullName())

// problem with above appraoch is that i have to use "()" and cant
// mutate first name and last name..lets add getter and setters

const objFinal = {
    firstName : "anshul",
    lastName : "chauhan",
    get fullName() {
       return  `${obj.firstName} ${obj.lastName}`;
    },
    set fullName(value) {
        let parts=value.split(" ");
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
}
console.log("fullname from objFinal object is",objFinal.fullName);
// objFinal.fullName("rose mary"); wont work
objFinal.fullName ="rose mary";
console.log("fullname from objFinal object is",objFinal);









