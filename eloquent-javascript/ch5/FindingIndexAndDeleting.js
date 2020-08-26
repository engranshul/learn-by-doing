let persons =[
    {"name": "anshul","addr": "delhi",birthYear:1989},
    {"name": "hunny","addr": "delhi",birthYear:1981},
    {"name": "rose","addr": "delhi",birthYear:1984},
    {"name": "mary","addr": "delhi",birthYear:1985}
    ]

const index=persons.findIndex(person => person.name == "rose"); 
console.log("index is",index);  

 
persons.splice(index,1); // see  how slice removed element from array
console.log("updated persons array is",persons)
