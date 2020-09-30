function add(a=20, b=30) {
  input1 = a;
  input2 = b;

  console.log('value of a', input1);
  console.log('value of b', input2);

  const result = input1 + input2;
  console.log('result is', result);
}

add(3, 4);
console.log("**********************")
add();
console.log("**********************")
add(0, 4);


/*
see how it solved problem we faced in  before es6 version..
0 value is considered in last case
*/
