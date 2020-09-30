/* Below code will give error : Cannot access 'sum' before initialization
arrow functions are not hoisted, and so you cannot call them before 
you declare them */
sum(1,2)

const sum = (a, b) => {
  return a + b;
};
