console.log('********traditional function************');

/* 
A constructor function is just a regular function. It becomes a constructor
when it is called on by an instance with the new keyword. In JavaScript, we 
capitalize the first letter of a constructor function by convention.
*/

function Hero(name, level) {
  this.name = name;
  this.level = level;
}

let hero1 = new Hero('Bjorn', 1);
console.log('prototype of hero1 is',Object.getPrototypeOf(hero1));
/* 
We have created a constructor function called Hero with two parameters: name 
and level. Since every character will have a name and a level, it makes sense 
for each new character to have these properties. The this keyword will refer 
to the new instance that is created, so setting this.name to the name parameter
 ensures the new object will have a name property set.
*/



console.log('*********arrow function behaviour***********')

/* 
 Since arrow functions do not have their own this value, it follows that
 you would be unable to use an arrow function as a constructor.
*/