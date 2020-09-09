const {performance} = require('perf_hooks');
// reversing an array

// array standard reverse

let arr1 =[1,2,3,4];
let arr2 =arr1.reverse(); // doesnt returns a new array..changes original array
arr2.push(5);
console.log("arr1 is",arr1);
console.log("arr2 is",arr2);

// subquestion 2

const reverseArrayInPlace = (arr) => {
    let start,end,temp;
    for(start=0,end=arr.length-1;start<=end;start++,end--){
        // swap logic
        temp=arr[start];
        arr[start]=arr[end];
        arr[end] =temp;
    }
    return arr;
}



// subquestion 1

const reverseArray = (arr) => {
    // this way wont change original array
    let newArr=[];
    Object.assign(newArr,arr);
    // add something in new array
    newArr.push(6);
    console.log("original arr",arr);
    console.log("new arr",newArr);

    return reverseArrayInPlace(newArr);

}
let t0 = performance.now();
console.log("reverseArrayInPlace result is",reverseArrayInPlace([1,2,3,4,5]));
let t1 = performance.now();
console.log("Call to reverseArrayInPlace took " + (t1 - t0) + " milliseconds.")


let t2 = performance.now();
console.log("reverseArray result is",reverseArray([1,2,3,4,5]));
console.log("Call to reverseArray took " + (t2 - t1) + " milliseconds.")

/* 
this can be done by iterating from end to start
*/

/* 
Doubt :
Here i can not make out how reversing array is place is slow 
*/


