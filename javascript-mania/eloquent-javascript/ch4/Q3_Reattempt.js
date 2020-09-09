// list problem

/* 
list is a set of nested objects with first object holding a reference of second
*/

// subproblem 1
function arrayToList(inputArr) {
let list =null;

for(let start=inputArr.length-1;start >=0 ;start--) {
    list = { value : inputArr[start],rest : list};
}
return list;
}

console.log("list created is",arrayToList([1,2,3]));

//subproblem 2
function listToArray(inputObjectLL) {
    let arr=[];
    for(let node=inputObjectLL;node !=null;node=node.rest) {
        arr.push(node.value);
    }
    return arr;
}

console.log("array created from objectLL is ",listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }));

//subproblem 3
function prepend(value,inputObjectLL) {

    let outputList=null;
    outputList = { value ,rest :inputObjectLL};
    return outputList;
}
console.log("prepend output is",prepend(4,{ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }));


//subproblem 4..take a list and a number and returns nth element

// iterative version
function nthIterative(index,inputObjectLL) {
    let nthELement = null;
    for(let start =0;start < index;start++) {
        if(inputObjectLL == null) return undefined;
        nthELement = inputObjectLL.value;
        inputObjectLL = inputObjectLL.rest;   
    }
    return nthELement;
}
console.log("nth element iterative is",nthIterative(4,{ value: 1, rest: { value: 11, rest: { value: 111, rest: null } } }));


// recursive version
function nthRecursive(index,inputObjectLL) {
    if(inputObjectLL == null) return undefined;
    if(index ==1) return inputObjectLL.value;
    return nthRecursive(index-1,inputObjectLL.rest);
}
console.log("nth element recursive is",nthRecursive(4,{ value: 1, rest: { value: 11, rest: { value: 111, rest: null } } }));



