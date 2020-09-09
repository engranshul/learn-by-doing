// sum of a range

// subquestion 1
const range = (start,end) => {
 let arr =[];
 for(let i=start;i<=end;i++) {
     arr.push(i);
 }
 return arr;
} 

console.log("arr from start to end is",range(10,25))

// subquestion 2
const sum = arr => {     // see we are taking arr as function param but still we havent used []
let total=0;
for(let i of arr) {
    total = total +i;
}
return total;
}
console.log(sum([1,2,3,4,5,6,7,8,9,10]));

// subquestion 3
const rangeWithStep = (start,end,step) => {
    let arr =[];
    if(step >0) {
        for(let i=start;i<=end;i) {
            arr.push(i);
            i+=step;
        }
        return arr;
       } 
    else {
        for(let i= start;i>=end;i){ // i += step
            arr.push(i);
            i+=step;
        }
        return arr;   
    }
    }
    
    
console.log("range wd step result is",rangeWithStep(5,2,-1))  


/* 
Book solution learning :
see how it initilaized default value for step in function arguments..
if no step param is supplied it will work this way
function range(start, end, step = start < end ? 1 : -1)

Instead of doing i += step separately..do it in the function itself
*/






