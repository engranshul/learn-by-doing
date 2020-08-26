// primitives values equality test
let input1= "aa" +"bb" +"123";
let input2=  "aa" +"bb" +"123";

/* Primitive values (except for the mystical NaN value) will always be
exactly equal to another primitive with an equivalent value. Check
it out here: */

if(input1 == input2) { console.log("primtive are equal") };

// non primitive value equality test
let obj1 = {id : 1,name : "anshul"}
let obj2 = {id : 1,name : "anshul"}

/* below is perfect example of how objects are not equal 
but their fields which are primitives are equal */

if(obj1 == obj2) { console.log("objects are equal") };
if(obj1.name == obj2.name) { console.log("objects names are equal") };





