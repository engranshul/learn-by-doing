 if(1==1) {
    console.log(val); // ReferenceError: Cannot access 'val' before initialization..TDZ..
    let val =10;

} 

/* 
// however as expected will print undefined in case of var coz of hoisting
if(1==1) {
    console.log(val); 
    var val =10;

} 
*/