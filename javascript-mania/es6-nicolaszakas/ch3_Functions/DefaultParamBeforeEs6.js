function add(a, b) {
  input1 = a || 20;
  input2 = b || 30;

  console.log('value of a', input1);
  console.log('value of b', input2);

  const result = input1 + input2;
  console.log('result is', result);
}

add(3,4);
console.log("**********************")
add();
console.log("**********************")
add(0, 4);


/* 
problem with this approach is that in the last case 0 is not considered
and for that default value is taken
*/
