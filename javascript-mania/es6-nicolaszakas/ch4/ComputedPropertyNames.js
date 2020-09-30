let additionalDetails ='interests'

let obj = {
  'name' : 'anshul',
  'age' : 10,
  [additionalDetails] : [] 
}
let keyPart1 ='residential '
let keyPart2 = 'address'

// adding new property in object using square bracket notation..this way we can
// easily add space in key
obj[keyPart1 + keyPart2] = 'world..'

// adding new property in object using dot notation
obj.religion = 'human'

console.log(obj);