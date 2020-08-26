/* no divisible by 3 print Fizz..divisible by 5 print Buzz..div by 
both print "FizzBuzz" */


// my solution
for(i=1;i<=100;i++) 
{
if(i%5==0 && i%3==0)
console.log("FizzBizz")
else if(i%3 ==0)
console.log("Fizz")
else if(i%5==0) 
console.log("Bizz")
else
console.log(i);
}


/* 
book solution learning : output reinitialization at every call and short circuiting
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  } 
*/