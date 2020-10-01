let node = {
  id: 1,
  area: 'delhi',
  pin: 110046,
  interests: {
    games: ['football', 'volleyball'],
    food: ['pizza', 'pasta'],
  },
};
console.log('***provided default value to key school that doesnt exist in node***');
let { area, school : coaching = 'lps' } = node;
console.log(`area is ${area} and school is ${coaching}`);
