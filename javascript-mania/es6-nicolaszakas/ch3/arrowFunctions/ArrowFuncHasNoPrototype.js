console.log('*****traditional function*****')
function myFunction() {
  this.value = 5;
}
console.log(myFunction.prototype);


console.log('*****arrow function******')
const myArrowFunction = () => {};
console.log(myArrowFunction.prototype);


/* 
As a result of the missing prototype property, the new keyword is not
available and you cannot construct an instance from the arrow function
*/
