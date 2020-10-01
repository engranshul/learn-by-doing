let node = {
  'id' : 1,
  'area' : 'delhi',
  'pin' : 110046,
  'interests' : {
    'games' : ['football','volleyball'],
    'food' : ['pizza','pasta']
  }
}
console.log('*****positive case******')
let { area,pin} = node;
console.log(`area is ${area} and pin is ${pin}`)

console.log('*****nested destructuring****')
// value that doesnt exist will be destructured as undefined
let { interests: {games} , school } = node
console.log(games)
console.log(school)