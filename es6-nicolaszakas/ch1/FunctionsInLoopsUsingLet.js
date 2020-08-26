var funcs =[];

for(let i=0;i<10;i++) {
    funcs.push(function() {   // concept of pushing functions in array
        console.log(i);
    })
}
console.log("no of elements in funcs array is",funcs.length);

for(var func of funcs) { // use here let or var will work same way
    /* 
    will print 0 to 9..which looks expected
    */
    func(); 
}