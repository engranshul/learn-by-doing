// subproblem 1..perfect example of object creation(linked list)
const arrayToList = (inputArr) => {
let list =null;
/* 1 rest has 2 in it so 2 shd be created first */
for(let i=inputArr.length-1;i>=0;i--) {
 list ={value:inputArr[i],rest: list }; // amazing concept
}
return list;
}
console.log(arrayToList([1,2,3]));

// subproblem 2..perfect example to changing linked list object to array
const listToArray = (inputList) => {
let arr=[];
for(let node=inputList;node;node=node.rest) {
    arr.push(node.value);
}
return arr;
}
let inputList = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } };
console.log("array created is ",listToArray(inputList));


const prepend= (element,inputList) => {
    let outputList={ value : element, rest : inputList};
    return outputList;
}

console.log("prepend output is",prepend(4,{ value: 1, rest: { value: 2, rest : { value: 3, rest : null } } }));


// below code can be solved recursively also..
const nth = (inputList,n) => {
    let value =null;
    for(let start=0;start <n;start++) {
        if(inputList == null)
           return undefined;
        value = inputList.value;
        inputList = inputList.rest;
    }
    return value;
}
console.log("nth item is",nth({ value: 10, rest: { value: 20, rest : { value: 30, rest : null } } },4));

const recursiveNth = (inputList,n) => {
    if(inputList == null)
      return undefined;
    else if(n==0)
        return inputList.value;   
    else return recursiveNth(inputList.rest,n-1); // here dont forget to put return on recursive call
}
console.log("recursive nth item is",recursiveNth({ value: 10, rest: { value: 20, rest : { value: 30, rest : null } } },1));


/* 
Book solution learning : 
See how an object is created from array by again and again reassigning
Check vice versa also

Recursion on linked list concept
*/