export let num = 1;

export function mul(a, b) {
  return a * b;
}

export const divide = (a, b) => {
  return a / b;
};

let increment = (count) => {
  num += count;
  console.log(num);
};

export default increment;
