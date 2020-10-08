export let num = 1;

export function add(a, b) {
  return a + b;
}

export const subtract = (a, b) => {};

let increment = () => {
  ++num;
  console.log(num);
}

export default increment;
