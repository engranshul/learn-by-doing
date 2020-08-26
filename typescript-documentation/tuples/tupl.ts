console.log("*******rest operator example************")
let dummyTuple :[string,string,...number[]];
dummyTuple =["sas","sasas",1,2,3,4]
console.log(dummyTuple);


console.log("***********spread operator example**************")
function add(input1:number,input2:number,input3:number):number {
     return input1 + input2 + input3;
}

let arr:[number,number,number] = [5,10,17];
console.log("result is",add(...arr));

console.log("***********empty tuples examples***********")
type emptyTuple =[];
//const dummy:emptyTuple =["js"];  // this line will throw error


type emptyTuple2 = [string,string,number] | [] | [number];
let obj1: emptyTuple2 = [];
let obj2: emptyTuple2 =[27e5275752375273572537527357253527532737253752];
let obj3: emptyTuple2 = ["","",1];
//let ob4: emptyTuple2 = ["will show error"];


console.log("*********optional tuple elements**************")
type tuple= [number,number?];
let obj4 : tuple = [1,1];

console.log("*********optional elements in rest parameters*********")
type contract = [string];
function mul(input1:number,input2:string,input3?:contract):number {
     return input1 * Number(input2);
}
console.log("result is",mul(2,"4455"));










