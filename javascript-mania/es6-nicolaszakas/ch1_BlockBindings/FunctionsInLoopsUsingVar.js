var funcs =[];

for(var i=0;i<10;i++) {
    funcs.push(function() {   // concept of pushing functions in array
        console.log(i);
    })
}
console.log("no of elements in funcs array is",funcs.length);

for(let func of funcs) { // use here let or var will work same way
    /* 
    will print 10 ten times instead of 0 to 9 coz "i" is shared
    across each iteration of the loop..
    */
    func(); 
}

/* this problem can be solved with immediately invoked 
functions expression but they have some weird syntax 
*/
