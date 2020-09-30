/* 
case 1:
Below two lines will throw error :
SyntaxError: Identifier 'count' has already been declared

let count =0;    // let usage 
var count =0;    // var usage
*/

/* 
Below code will throw errorSyntaxError: Identifier 'balls' 
has already been declared

case 2:
let balls =0;

if(1==1) {
    var balls =1;
    console.log("balls are",balls);
}
*/

/* 
case 3:
will work fine and print 1..balls in if block will
shadow global balls

var balls =0;

if(1==1) {
    let balls =1;
    console.log("balls are",balls);
} 
*/




