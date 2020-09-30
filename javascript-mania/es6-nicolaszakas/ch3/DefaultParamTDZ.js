// will work fine
function mul(input1, input2 = input1) {
  console.log(input1 * input2);
}

mul(3);




// below will throw error :
// ReferenceError: Cannot access 'input2' before initialization
function add(input1=input2, input2) {
  console.log(input1 + input2);
}

add(undefined,3);