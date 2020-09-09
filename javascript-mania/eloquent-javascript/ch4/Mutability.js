const me = {
    "name" : "anshul",
    "addr" : "delhi"
}
console.log(me)

 //me = {}  // will throw error TypeError: Assignment to constant variable

 me.roll = 123;
 console.log("updated value is ",me)

 // here the concept is that for const object we can change reference but can update object


 console.log("*****object equality concept*******")
 /* here are two diff objects..so == will return false regardless if there values are same or not */
 let obj1 ={"name": "anshul","roll":123} 
 let obj2 ={"name": "anshul","roll":123}

console.log("is obj1 equal to obj2",obj1==obj2)
obj1=obj2;
console.log("is obj1 equal to obj2",obj1==obj2)





