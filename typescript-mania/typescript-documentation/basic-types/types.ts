console.log("***boolean data type demo");
//concept that if u will hover over flag variable it will show boolean
let flag = true;
// explicitly defining boolean
let foo:boolean = false; 


console.log("***string data type demo");
//concept that if u will hover over baz variable it will show string
let baz = "";
// explicitly defining string
let bar:string = "hello world"; 


console.log("***tuple demo..tuple is not an keyword..its a way of defining");
// works wd array i think for object interface can be used to get same behaviour
let kimData : [string,number];
kimData = ["delhi",1001];
// kimData = [1001,"delhi"]; defining it this way will throw error



console.log("***number datatype demo..As in JavaScript, all numbers in TypeScript are either floating point values or BigIntegers. These floating point numbers get the type number, while BigIntegers get the type bigint.");
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
//below line will throw error :BigInt literals are not available when targeting lower than ES2020.
//let big: bigint = 100n;

console.log("***array example..second uses generic array type")
let arr:number[] =[1,2,3];
let list: Array<number> = [1, 2, 3];

console.log("****enum demo")
enum Color {
    Red=5,  // by default counting starts from 0 but u can change it
    Yello,
    Blue,
    Pink
}
let c: Color = Color.Blue;  // here type number "c:number" will work in same way
console.log("c is",c);      // will print integer
let col: String = Color[5];
console.log("col is",col);  // will print string

console.log("***unknown type demo")
let notSure: unknown=4;
notSure="";
notSure=true;
//below line will give error :Type 'unknown' is not assignable to type 'number'
// let num : number = notSure;

if(notSure === true) {
    let num:boolean = notSure; // typescript knows that notSure is a boolean now so doesnt give error
}

if(typeof notSure === "string") {
    let num: string = notSure; // typescript knows that notSure is a string now so doesnt give error
}

console.log("***any type demo")
// The any type is a powerful way to work with existing JavaScript, allowing 
// you to gradually opt-in and opt-out of type checking during compilation.

function process() : any {
    return "done!!!";
}
let result : string = process(); // this wouldnt have worked if process if of type unknown
console.log("result is",result);
let answer: number = process();
console.log("answer is",answer); // this wouldnt have worked if process if of type unknown

console.log("****unknown and any behaviour in case properties doesnt exist")

let obj1 : unknown= {};
// in case of unknown it checks that add doesnt exist on obj1 object
//obj1.add();

let obj2 : any= {};
// in case of any it doesnt check that add doesnt exist on obj1 object
obj2.add();


console.log("***void data type demo..opposite of any")
let fizz : void = undefined ;  // not much useful though

console.log("****In TypeScript, both undefined and null actually have their own types named undefined and null respectively. Much like void, they’re not extremely useful on their own:")
let crizz : undefined = undefined;
let frizz : null =null; 

console.log("***union type demo")

let lorm : string | number;
// lorm =false; this will throw error


console.log("***never type demo")
// Function returning never must not have a reachable end point
function error(message: string): never {
    throw new Error(message);
  }
  
  // Inferred return type is never
  function fail() {
    return error("Something failed");
  }
  
  // Function returning never must not have a reachable end point
  function infiniteLoop(): never {
    while (true) {}
  }

  // object is a type that represents the non-primitive type, i.e. anything
  // that is not number, string, boolean, symbol, null, or undefined.

  function(input : object | null) : void {
      
  }









