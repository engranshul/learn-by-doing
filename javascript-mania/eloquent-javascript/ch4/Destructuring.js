console.log("*****array destructuring *******")
let x,y;
[x,y]=[1,2]           //  simple way of assignment and referencing array values

console.log(x)
console.log(y)

//restof example

const restOfExample = function(input1,input2,...restof) {
console.log(input1);
console.log(input2);
console.log(restof);  // will print [3,4,5,6,7]
}

restOfExample(1,2,3,4,5,6,7)


console.log("*****object destructuring *******")

let a,b;
/* {x,y}={1,2} */   // this wont work for objects
({a,b}={a:1,b:2})   // simple way of assignment and referencing object values 

console.log(a)
console.log(b)

// rest of example

let c,d;
({c,d,...restof}={c:1,d:2,e:3,f:4});    // instead of restof it can be given other name also       

console.log(c)
console.log(d)
console.log(restof)


