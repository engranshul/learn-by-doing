values = [2,1,4,3,5,6,0,-1,2,3]

// math.max doesnt work wd array
console.log("will print NAN ",Math.max(values));

// with the help of spread operator math.max works fine..additional value can also
// be provided
console.log(Math.max(...values,10));
console.log(...values);


/* 
rest : converts multiple independent arguments into array
spread : takes an array and separtes arguments
*/