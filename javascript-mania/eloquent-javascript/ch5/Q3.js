// custom every function

// using for loop
function customEvery(inputArr,predicateFunc) {   
let flag=true;    
// for (let element of inputArr)   this can also be used
for(let index=0;index < inputArr.length;index++) {
    if(!predicateFunc(inputArr[index])) {
        flag=false;
    }       
}
return flag;
}

console.log("custom every function output is",customEvery([1,2,3,4,5,6],input => { return input>0 }));

// wdout using for loop

// below approach is not that good
/* function customEveryWdoutLoop(inputArr,predicateFunc) {   
    let flag=true;   
    let itr=inputArr[Symbol.iterator]();
    predicateFunc(itr.next().value)
    
} */

/* 
Book solution learning :
see how they implemented every with the help of some method

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}
*/
    
// console.log("custom every function output is",customEveryWdoutLoop([1,2,3,4,5,6],input => { return input>0 }));
