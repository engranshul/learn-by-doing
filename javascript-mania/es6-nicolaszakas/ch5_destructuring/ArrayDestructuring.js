let colors = ['red', 'green', 'blue', 'orange'];
let [,value_two, value_three] = colors;

console.log(value_two);
console.log(value_three);

console.log('****nested array destructuring example***')
let interests = ['apple','orange',['football','volleyball'],'banana']
let  [foodChoice,,[gameChoice]] = interests; 
console.log(`food choice is ${foodChoice} and game choice is ${gameChoice}`)