function getValue(input) {  
if(input > 5) {
    var value = "blue";
    return value;
}
else {
    console.log("value in else block is ",value)
}
console.log("value here is ",value)
}

getValue(4);

/* 
variable declarations using var are treated as if they are at the 
top of the function(or in the global scope,if declared outside of
a function) regardless of where the actual declaration occurs; this
is called hoisting)
Behind the scenes js engine changes above function to :

function getValue(input) {
    var value; // hoisting
    if() {

    }
    else {
              // here it prints undefined coz it has not been initilaized here
    }
}

*/  