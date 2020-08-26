let persons =[
    {"name": "anshul","addr": "delhi",birthYear:1989},
    {"name": "hunny","addr": "delhi",birthYear:1981},
    {"name": "rose","addr": "delhi",birthYear:1984},
    {"name": "mary","addr": "delhi",birthYear:1985}
    ]

let output=persons.find(person => {
       return person.birthYear > 1982; // see here it doesnt require explicitly returning of true/false
})

console.log(output);

/* 
find returns first element that obeys that search criteria
*/
