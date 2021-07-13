// declaring const require declare keyword
declare const maybe: unknown;

// below line will give error unknown is not assignable to type number
//const aNumber : number = maybe;

if(maybe === true)  {
    console.log("maybe is a boolean")
}