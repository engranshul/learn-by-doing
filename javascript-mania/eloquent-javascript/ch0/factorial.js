// recursive..5!= 5*4*3*2*1

function factorial(n) {     // see there is  no type in function param
    if (n == 1)
        return 1;

    return factorial(n - 1) * n;  // way return happens in js
}

console.log(factorial(5));