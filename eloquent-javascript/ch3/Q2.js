// isEven problem

function isEven(input) {

    if(input ==1 || input == -1)
       return false;
    if(input ==0)
       return true;

    return isEven(input-2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/* book solution learning : 

function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n); // see how it makes negative integer positive and gets going
    else return isEven(n - 2);
  }
 */





