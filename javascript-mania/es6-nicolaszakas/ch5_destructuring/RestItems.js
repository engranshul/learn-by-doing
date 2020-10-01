// case 1 : below throws error
/* 
let address = {
  'houseNo': 123,
  'city':'delhi',
  'country':'india'
}

let { houseNo,...rest} = address;
console.log(houseNo)
console.log(...rest) 
*/

// case 2 : will work fine for array
let colors = ['red', 'green', 'blue', 'orange'];

let [,valueTwo,...rest] = colors;
console.log(`valueTwo is ${valueTwo} and rest params are ${rest}`)


