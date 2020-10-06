let gameNameKey = 'gameName'
let methodName = 'printGameHistory'

class Games  {

   constructor(name) {
    [gameNameKey] = name
   }

   [methodName]() {
     console.log('hockey was first played 100 years ago..')
   }

}

let obj = new Games('hockey')
obj.printGameHistory();
/* 
Even more similarities exist between object literals and classes. Class methods
and accessor properties can also have computed names. Instead of using an
identifier, use square brackets around an expression, which is the same syntax
you use for object literal computed names.
*/