let persons =[
{"name": "anshul","addr": "delhi",birthYear:1989},
{"name": "hunny","addr": "delhi",birthYear:1980},
{"name": "rose","addr": "delhi",birthYear:1984},
{"name": "mary","addr": "delhi",birthYear:1985}
]

// verbose way..see here we made function with arrow keyword
const verboseWayResult =persons.some(function check(person){
    return person.birthYear >1980;
}) 
console.log("verboseWayResult result is",verboseWayResult)


// not so verbose way
const shortWayResult=persons.some(person => {
    return (new Date()).getFullYear() - person.birthYear > 5 ;
})

console.log("shortWayResult result is",shortWayResult)


