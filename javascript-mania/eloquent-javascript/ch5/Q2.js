function highOrderFunction(value,testFunction,updateFunction,bodyfunction,noOfTimes) {
    let val =value;
    for(let index=0;index <= noOfTimes;index++) {
        console.log("index is ",index)
        testFunction=testFunction(value);
        val=bodyfunction(value);
        val=updateFunction(value);
        console.log("value is",val);
    }

}

highOrderFunction(11,value => {
   return val = value +10;
},value=> {
   return val=value +50;
},value=> {
   return val=value +50;
},5);


/* 
Above solution is wrong..a for loop like below need to be created
..important concept of passing function definitions in for loop


function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }
  
loop(3, n => n > 0, n => n - 1, console.log); 

*/