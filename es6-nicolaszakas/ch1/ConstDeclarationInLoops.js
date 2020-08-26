/* 
ES6 specification doesnt explicitly disallow constant declarations
in loops : however ,const behaves differently based on the type of
loop u are using..
*/


// case 1:
// will work for i=0 but after that will throw below error
// TypeError: Assignment to constant variable

for(const i=0;i<10;i++) {
    console.log("value of i is",i);
} 



// However above behaviour will work fine for for-in and for-of loop