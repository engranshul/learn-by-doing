// flattening an array of array

let arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log("arr size is",arr.length);

console.log(arr.reduce((flatArr, current) => flatArr.concat(current), []));


// concept of see how reduce is provided initial value as []

// individual element iteration not required...wow    
/*      for(let start=0;start <currValue.length;start++) {
         console.log(currValue[start]);    
     } 
*/