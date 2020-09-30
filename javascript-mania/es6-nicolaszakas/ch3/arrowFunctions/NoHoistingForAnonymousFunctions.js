// ReferenceError: Cannot access 'sum' before initialization

sum(1, 2);

const sum = function (a, b) {
  return a + b;
};
